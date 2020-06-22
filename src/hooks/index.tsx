import React from 'react'

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'
import { KudoProvider } from './kudo'
import { ProfileProvider } from './profile'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProfileProvider>
      <KudoProvider>
        <ToastProvider>{children}</ToastProvider>
      </KudoProvider>
    </ProfileProvider>
  </AuthProvider>
)

export default AppProvider
