import { createContext, useContext, useState, type ReactNode } from 'react'

type SiderContextType = {
  drawer: boolean
  toggleDrawer: () => void
  sider: boolean
  toggleSider: () => void
  selectedTab: string
  changeTab: (tab: string) => void
}

const DrawerSiderContext = createContext<SiderContextType | undefined>(
  undefined
)

export const DrawerSiderProvider = ({ children }: { children: ReactNode }) => {
  const [drawer, setDrawer] = useState(false)
  const [sider, setSider] = useState(false)
  const [selectedTab, setSelectedTab] = useState('ASM')
  const toggleDrawer = () => setDrawer((prev) => !prev)
  const toggleSider = () => setSider((prev) => !prev)
  const changeTab = (tab: string) => setSelectedTab(tab)

  return (
    <DrawerSiderContext.Provider
      value={{
        drawer,
        toggleDrawer,
        sider,
        toggleSider,
        selectedTab,
        changeTab,
      }}
    >
      {children}
    </DrawerSiderContext.Provider>
  )
}

export function useDrawerSider() {
  const context = useContext(DrawerSiderContext)
  if (!context)
    throw new Error('useDrawerSider must be used within a SiderProvider')
  return context
}
