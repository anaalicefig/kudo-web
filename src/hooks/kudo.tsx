import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface CreateKudoData {
  received_user: string
  type: 'was_awesome' | 'learned' | 'grateful'
}

interface GaveKudoUserData {
  id: string
  name: string
  email: string
  avatar_public_url: string
  grateful: number
  was_awesome: number
  learned: number
  updated_at: Date
}

interface KudoContextState {
  gaveKudoUser: GaveKudoUserData
  createSendKudo(data: CreateKudoData): Promise<GaveKudoUserData>
}

const KudoContext = createContext<KudoContextState>({} as KudoContextState)

export const KudoProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<GaveKudoUserData>({} as GaveKudoUserData)

  const createSendKudo = useCallback(async ({ received_user, type }: CreateKudoData) => {

    const response = await api.post('kudos', {
      received_user,
      type
    })

    return response.data
  }, [])

  return (
    <KudoContext.Provider value={{ gaveKudoUser: data, createSendKudo }}>
      {children}
    </KudoContext.Provider>
  )
}

export function useKudo(): KudoContextState {
  const context = useContext(KudoContext)

  if(!context) {
    throw new Error('useKudo must be used within an KudoProvider ')
  }

  return context
}
