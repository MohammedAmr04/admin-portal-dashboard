import type { ReactNode } from 'react'
import LoginSectionImage from '../auth/login/LoginSectionImage'

interface AuthProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthProps) => {
  return (
    <main className="grid  grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div>{children}</div>
      <div>{<LoginSectionImage />}</div>
    </main>
  )
}

export default AuthLayout
