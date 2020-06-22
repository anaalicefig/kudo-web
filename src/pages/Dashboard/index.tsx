import React, { useEffect, useState, useCallback } from 'react'
import api from '../../services/api'

import { useProfile } from '../../hooks/profile'
import { useKudo } from '../../hooks/kudo'
import { useToast } from '../../hooks/toast'

import { Content, Selos, Status, Kudo, ImagesContainer, KudoButtons, Brooches } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import GratefulIcon from '../../assets/icons/grateful.svg'
import AwesomeIcon from '../../assets/icons/awesome.svg'
import LearnIcon from '../../assets/icons/learn.svg'
import formatDate from '../../utils/formatDate'

interface BrothersData {
  id: string
  name: string
  email: string
  avatar_public_url: string
}

interface KudoData {
  was_awesome: number
  learned: number
  grateful: number
}

interface CreateSendKudoData {
  received_user: string
  type: 'was_awesome' | 'learned' | 'grateful'
}

const Dashboard: React.FC = () => {
  const [brothers, setBrothers] = useState<BrothersData[]>([])
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const [kudos, setKudos] = useState<KudoData>({} as KudoData)

  const { getUserProfile } = useProfile()
  const { addToast } = useToast()
  const { createSendKudo } = useKudo()

  useEffect(() => {
    async function getBrothers() {
      const response = await api.get('/brothers')
      setBrothers(response.data)
    }
    getUserProfile().then((user) => {
      const dateFormated = formatDate(user.updated_at)
      setLastUpdated(dateFormated)
      setKudos({
        grateful: user.grateful,
        learned: user.learned,
        was_awesome: user.was_awesome
      })
    })

    getBrothers()
  }, [getUserProfile])

  const handleSendKudo = useCallback(async (data: CreateSendKudoData) => {
    try {
      const gaveKudoUser = await createSendKudo({
        received_user: data.received_user,
        type: data.type
      })

      const dateFormated = formatDate(gaveKudoUser.updated_at)
      setLastUpdated(dateFormated)
      setKudos({
        grateful: gaveKudoUser.grateful,
        learned: gaveKudoUser.learned,
        was_awesome: gaveKudoUser.was_awesome
      })


      addToast({
        type: 'success',
        title: 'Deu certo!',
        description: 'Kudo enviado com sucesso.'
      })
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao enviar Kudo',
        description: 'Ocorreu ao enviar Kudo, verifique se você tem Kudo suficiente para está operação.'
      })
    }

  }, [addToast, createSendKudo])

  return (
    <>
      <Header />
      <Content>
				<h1>Dê um kudo</h1>
				<Selos>
					<Status>
						<h2>Selos disponíveis</h2>
            <p>Atualizado em {lastUpdated}</p>
					</Status>
					<Kudo>
						<div>
							<img src={LearnIcon} alt="grateful" />
              <span>{kudos.learned}</span>
						</div>
						<div>
							<img src={AwesomeIcon} alt="grateful" />
							<span>{kudos.was_awesome}</span>
						</div>
						<div>
							<img src={GratefulIcon} alt="grateful" />
							<span>{kudos.grateful}</span>
						</div>
					</Kudo>
				</Selos>
				<ImagesContainer>
					{brothers.map(brother => (
            <div key={brother.id}>
              <img src={brother.avatar_public_url} alt={brother.name} />
              <div>
                <span>Dê um kudo para</span>
                <h2>{brother.name}</h2>
                <KudoButtons>
                  <button onClick={() => handleSendKudo({
                    received_user: brother.id,
                    type: 'learned'
                  })}>
                    <Brooches src={LearnIcon} alt="learned" />
                  </button>
                  <button onClick={() => handleSendKudo({
                    received_user: brother.id,
                    type: 'was_awesome'
                  })}>
                    <Brooches src={AwesomeIcon} alt="was_awesome" />
                  </button>
                  <button onClick={() => handleSendKudo({
                    received_user: brother.id,
                    type: 'grateful'
                  })}>
                    <Brooches src={GratefulIcon} alt="grateful" />
                  </button>
                </KudoButtons>
              </div>
            </div>
          ))}
				</ImagesContainer>
			</Content>
      <Footer />
    </>
  )
}

export default Dashboard
