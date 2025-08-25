import { useDrawerSider } from '@/services/context/DrawerSiderContext'
import { Button, Drawer } from 'antd'
import LayoutMenu from './LayoutMenu'
import LayoutProductSelect from './LayoutProductSelect'
import LayoutLangToggle from './LayoutLangToggle'
import LayoutThemeToggle from './LayoutThemeToggle'
import LayoutProductDropdown from './LayoutProductDropdown'

const LayoutDrawer = () => {
  const { drawer, toggleDrawer } = useDrawerSider()

  return (
    <Drawer
      closable={{ 'aria-label': 'Close Button' }}
      onClose={toggleDrawer}
      open={drawer}
      placement={'left'}
      style={{ backgroundColor: 'var(--c-background)' }}
    >
      <div className="flex flex-col justify-between h-full">
        <LayoutMenu />
        <div className="space-y-2">
          <Button
            className="ant-menu-item w-full"
            style={{ backgroundColor: 'transparent' }}
          >
            <img src="./icons/support.svg" width="24"></img> Support
          </Button>
          <div className="flex justify-center w-full space-x-2">
            <LayoutProductSelect version="drawer" />
          </div>
          <div className="flex justify-center w-full space-x-2">
            <LayoutProductDropdown />
          </div>
          <div className="flex justify-center items-center gap-2 w-full">
            <LayoutThemeToggle />
            <LayoutLangToggle />
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default LayoutDrawer
