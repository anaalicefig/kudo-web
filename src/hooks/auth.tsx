import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface UserData {
  id: string
  name: string
  email: string
  avatar_public_url: string
  grateful: number
  was_awesome: number
  learned: number
  updated_at: Date
}

interface AuthContextState {
  user: UserData
  signIn(credetials: SignInCredentials): Promise<void>
  signOut(): void
}

interface AuthState {
  token: string
  user: UserData
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@KudoApi:token')
    const user = localStorage.getItem('@KudoApi:user')

    if (token && user) {
      return { token, user: JSON.parse(user)}
    }

    return  {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@KudoApi:token', token)
    localStorage.setItem('@KudoApi:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@KudoApi:token')
    localStorage.removeItem('@KudoApi:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider ')
  }

  return context
}
