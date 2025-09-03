import { Grid, Layout } from 'antd'
import { Outlet } from 'react-router'
import LayoutDrawer from '../mainLayout/Drawer/LayoutDrawer'
import LayoutProductsSider from '../mainLayout/Siders/LayoutProductsSider'
import LayoutHeader from '../mainLayout/Header/LayoutHeader'
import LayoutRoutesSider from '../mainLayout/Siders/LayoutRoutesSider'

const { Content } = Layout
const { useBreakpoint } = Grid

const MainLayout = () => {
  const screens = useBreakpoint()
  const isLg = screens.lg

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        {!isLg ? <LayoutDrawer /> : null}
        {isLg ? <LayoutProductsSider /> : null}
        {/* Main column: header fixed at top, inner area hidden overflow so only Content scrolls */}
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
          <LayoutHeader />
          {/* Row layout: sider (if any) fixed width, content flexes and scrolls */}
          <Layout className="px-4 py-6" style={{ height: '100%', overflow: 'hidden', minHeight: 0 }}>
            {isLg ? <LayoutRoutesSider /> : null}
            <Content style={{ padding: 16, flex: 1, overflow: 'auto', minHeight: 0 }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout
