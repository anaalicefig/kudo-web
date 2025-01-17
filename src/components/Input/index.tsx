import React, { useState, InputHTMLAttributes, useEffect, useRef, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  ContainerStyle?: object
  icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, ContainerStyle, icon: Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  const  handleInputFocus = useCallback(() =>{
    setIsFocused(true)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  const  handleInputBlur = useCallback(() =>{
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container style={ContainerStyle} isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error &&
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20}/>
        </Error>
      }
    </Container>
  )
}

export default Input
