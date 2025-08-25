import { createContext, useContext, useState, type ReactNode } from 'react'

type SiderContextType = {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
  toggleCollapsed: () => void
}

const SiderContext = createContext<SiderContextType | undefined>(undefined)

export const SiderProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => setCollapsed((prev) => !prev)
  return (
    <SiderContext.Provider value={{ collapsed, setCollapsed, toggleCollapsed }}>
      {children}
    </SiderContext.Provider>
  )
}

export function useSider() {
  const context = useContext(SiderContext)
  if (!context) throw new Error('useSider must be used within a SiderProvider')
  return context
}
