import { Avatar, Button, Dropdown, Layout, Select, type MenuProps } from 'antd'
import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router'
import {
  CaretDownIcon,
  CaretLeftIcon,
  HeadsetIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from '@phosphor-icons/react'

const { Header, Sider, Content } = Layout

const headerButtonsStyle = {
  padding: 8,
  backgroundColor: 'var(--c-background-dark)',
  height: 40,
  width: 40,
  fontSize: 18,
}

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
            style={{ background: 'transparent', padding: 16, height: 104 }}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <Button style={headerButtonsStyle}>
                <CaretLeftIcon size={16} />
              </Button>
              <Select
                options={[
                  { value: 'Paymob', label: <span>Paymob</span> },
                  { value: 'Fawry', label: <span>Fawry</span> },
                ]}
                defaultValue="Paymob"
                style={{
                  width: 132,
                  height: 56,
                }}
                classNames={{
                  root: 'header-select',
                  popup: { root: 'header-select-dropdown' },
                }}
                suffixIcon={<CaretDownIcon />}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button style={headerButtonsStyle}>
                <MagnifyingGlassIcon />
              </Button>
              <Button style={headerButtonsStyle}>
                <SunIcon />
              </Button>
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
                <HeadsetIcon />
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
          <Layout>
            <Sider
              width={226}
              style={{ backgroundColor: 'transparent', padding: 8 }}
              className="text-text"
            >
              Sider
            </Sider>
            <Content style={{ padding: 8 }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default MainLayout
