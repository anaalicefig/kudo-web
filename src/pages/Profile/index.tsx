import React, { useRef, useCallback, ChangeEvent } from 'react'
import { FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'

import getValidationErros from '../../utils/getValidationErros'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Content, AnimationContainer, AvatarInput } from './styles'
import api from '../../services/api'

interface UpdateProfileFormData {
  name: string
  email: string
  password: string
  old_password: string
  password_confirmation:string
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { user, updateUser } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(async (data: UpdateProfileFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        old_password: Yup.string(),
        password: Yup.string().when('old_password', {
          is: val => !!val.length,
          then: Yup.string().required('Campo obrigatorio'),
          otherwises: Yup.string()
        }),
        password_confirmation: Yup.string().when('old_password', {
          is: val => !!val.length,
          then: Yup.string().required('Campo obrigatorio'),
          otherwises: Yup.string()
        }).oneOf(
          [Yup.ref('password'), null],
          'Confirmação incorreta',
        ),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      const formData = Object.assign({
        name: data.name,
        email: data.email
      }, data.old_password ? {
        old_password: data.old_password,
        password: data.password,
        password_confirmation: data.password_confirmation
      }: {})

      const response = await api.put('/profile', formData)

      updateUser(response.data)

      history.push('/dashboard')
      addToast({
        type: 'success',
        title: 'Perfil atualizado',
      })
    } catch (err) {
      if( err instanceof Yup.ValidationError ) {
        const errors = getValidationErros(err)

        formRef.current?.setErrors(errors)

        return
      }

      addToast({
        type: 'error',
        title: 'Erro ao atualizar perfil',
        description: 'Verifique seus dados e tente novamente.'
      })
    }
  }, [addToast, history, updateUser])

  const HandleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      const data = new FormData()
      data.append('avatar', e.target.files[0])

      api.patch('/users/avatar', data).then((response) => {
        updateUser(response.data)
        addToast({
          type: 'success',
          title: 'Foto atualizada com sucesso.'
        })
      });
    }

  }, [addToast, updateUser])

  return (
    <>
      <Header />
      <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>

              <AvatarInput>
                <img src={user.avatar_public_url} alt={user.name} />
                <label htmlFor="avatar">
                  <FiCamera />
                  <input type="file" id="avatar" onChange={HandleAvatarChange} />
                </label>
              </AvatarInput>
              <h1>Meu perfil</h1>

              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input name="password" icon={FiLock} placeholder="Senha" />
              <Input
                ContainerStyle={{ marginTop: '24px' }}
                name="old_password"
                icon={FiLock}
                type="password"
                placeholder="Senha Atual"
              />
              <Input name="password" icon={FiLock} placeholder="Nova Senha" />
              <Input
                name="password_confirmation"
                icon={FiLock}
                placeholder="Confirmar Senha"
              />

              <Button type="submit">Confirmar mudanças</Button>
            </Form>

          </AnimationContainer>
      </Content>
    </>
  )
}

export default Profile
