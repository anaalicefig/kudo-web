import React, { createContext, useCallback, useContext } from 'react'
import api from '../services/api'

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

interface ProfileContextState {
  getUserProfile(): Promise<UserData>
}

const ProfileContext = createContext<ProfileContextState>({} as ProfileContextState)

export const ProfileProvider: React.FC = ({ children }) => {

  const getUserProfile = useCallback(async () => {
    const response = await api.get('profile')
    return response.data.user
  }, [])

  return (
    <ProfileContext.Provider value={{ getUserProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile(): ProfileContextState {
  const context = useContext(ProfileContext)

  if(!context) {
    throw new Error('useProfile must be used within an KudoProvider ')
  }

  return context
}
