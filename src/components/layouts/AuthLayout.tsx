import type { ReactNode } from 'react'

interface AuthProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthProps) => {
  return <>{children}</>
}

export default AuthLayout
