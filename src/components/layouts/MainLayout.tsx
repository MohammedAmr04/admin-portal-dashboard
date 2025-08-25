import { Grid, Layout } from 'antd'
import { Outlet } from 'react-router'
import LayoutDrawer from '../shared/LayoutDrawer'
import LayoutProductsSider from '../shared/LayoutProductsSider'
import LayoutHeader from '../shared/LayoutHeader'
import LayoutRoutesSider from '../shared/LayoutRoutesSider'

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
            <Content style={{ padding: 0 }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout
