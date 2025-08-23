import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  Segmented,
  Select,
  type MenuProps,
} from 'antd'
import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router'
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from '@phosphor-icons/react'
import {
  Building,
  Headphone,
  Home,
  Moon,
  Profile2User,
  SearchNormal1,
  Sun1,
} from 'iconsax-reactjs'
import { useState } from 'react'

const { Header, Sider, Content } = Layout

const headerButtonsStyle = {
  padding: 8,
  backgroundColor: 'var(--c-background-dark)',
  height: 40,
  width: 40,
  fontSize: 18,
  border: 'none',
}

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const siderItems: MenuItem[] = [
  getItem('Dashboard', '1', <Home />),
  getItem('Users', '2', <Profile2User />),
  getItem('Organizations', '3', <Building />),
]

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
]

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          width={74}
          className="flex justify-center"
          style={{ backgroundColor: 'var(--c-background-dark)' }}
        >
          <img src="./dark-atlas.png" className="mt-4" />
          <div
            className="bg-white text-text rounded-full w-10 h-10 mt-6 flex items-center justify-center font-semibold text-xs"
            style={{
              background: 'linear-gradient(90deg, #832ee3 0%, #6140ea 100%)',
            }}
          >
            DW
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              background: 'transparent',
              paddingBlock: 52,
              paddingInline: 16,
              borderBottom: '1px solid var(--c-border)',
            }}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <Button style={headerButtonsStyle}>
                <Button
                  style={headerButtonsStyle}
                  onClick={() => setCollapsed((prev) => !prev)}
                >
                  {collapsed ? (
                    <CaretRightIcon size={16} />
                  ) : (
                    <CaretLeftIcon size={16} />
                  )}
                </Button>
              </Button>
              <Select
                options={[
                  { value: 'Paymob', label: <span>Paymob</span> },
                  { value: 'Fawry', label: <span>Fawry</span> },
                ]}
                defaultValue="Paymob"
                // style={{
                //   width: 132,
                //   height: 56,
                // }}
                size="large"
                classNames={{
                  root: 'header-select',
                  popup: { root: 'header-select-dropdown' },
                }}
                suffixIcon={<CaretDownIcon />}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button style={headerButtonsStyle}>
                <SearchNormal1 size={16} />
              </Button>
              <Segmented
                options={[
                  {
                    value: 'Light',
                    icon: (
                      <div className="flex items-center h-[40px]">
                        <Sun1 size={16} />
                      </div>
                    ),
                  },
                  {
                    value: 'Dark',
                    icon: (
                      <div className="flex items-center h-[40px]">
                        <Moon size={16} />
                      </div>
                    ),
                  },
                ]}
                className="flex items-center"
                defaultValue="Dark"
              />
              <Select
                options={[
                  {
                    value: 'en',
                    label: (
                      <img className="rounded-full w-5" src="./us-flag.png" />
                    ),
                  },
                  {
                    value: 'ar',
                    label: (
                      <img className="rounded-full w-5" src="./sa-flag.png" />
                    ),
                  },
                ]}
                defaultValue="en"
                classNames={{
                  root: 'header-select',
                  popup: { root: 'header-select-dropdown' },
                }}
                style={{
                  height: 40,
                }}
              />
              <Button style={headerButtonsStyle}>
                <Headphone size={16} />
              </Button>
              <Dropdown
                menu={{ items }}
                overlayClassName="header-select-dropdown"
              >
                <Button className="header-select" style={{ height: 40 }}>
                  <Avatar shape="square" size={28} icon={<UserOutlined />} />{' '}
                  Ahmed
                  <CaretDownIcon />
                </Button>
              </Dropdown>
            </div>
          </Header>
          <Layout className="px-4 py-6">
            <Sider
              style={{ backgroundColor: 'transparent', padding: 0 }}
              className="text-text"
              collapsed={collapsed}
              collapsedWidth={64}
              breakpoint="lg"
              onBreakpoint={(broken) => setCollapsed(broken)}
            >
              <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                items={siderItems}
                style={{ backgroundColor: 'transparent' }}
              />
            </Sider>
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
