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
        <Layout>
          <LayoutHeader />
          <Layout className="px-4 py-6">
            {isLg ? <LayoutRoutesSider /> : null}
            <Content style={{ padding: 16 }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout
