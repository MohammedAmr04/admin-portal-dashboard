import Sider from 'antd/es/layout/Sider'
import LayoutMenu from './LayoutMenu'
import { useDrawerSider } from '@/services/context/DrawerSiderContext'

const LayoutRoutesSider = () => {
  const { sider } = useDrawerSider()

  return (
    <Sider
      style={{ backgroundColor: 'transparent', padding: 0 }}
      className="text-text hidden lg:block"
      collapsed={sider}
      collapsedWidth={64}
    >
      <LayoutMenu />
    </Sider>
  )
}

export default LayoutRoutesSider
