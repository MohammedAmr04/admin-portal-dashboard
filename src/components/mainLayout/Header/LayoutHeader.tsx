import { useDrawerSider } from '@/services/context/DrawerSiderContext'
import { Avatar, Button, Dropdown, type MenuProps } from 'antd'
import { Header } from 'antd/es/layout/layout'
import {
  ArrowDown2,
  ArrowSquareLeft,
  ArrowSquareRight,
  HamburgerMenu,
  SearchNormal1,
} from 'iconsax-reactjs'
import LayoutProductDropdown from '../shared/LayoutProductDropdown'
import LayoutThemeToggle from '../shared/LayoutThemeToggle'
import LayoutLangToggle from '../shared/LayoutLangToggle'
import { SettingOutlined, UserOutlined } from '@ant-design/icons'

const headerButtonsStyle = {
  padding: 8,
  backgroundColor: 'var(--c-background-dark)',
  height: 40,
  width: 40,
  fontSize: 18,
  border: 'none',
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

const LayoutHeader = () => {
  const { toggleDrawer, sider, toggleSider } = useDrawerSider()

  return (
    <Header
      style={{
        background: 'transparent',
        // paddingBlock: 52,
        paddingInline: 8,
        borderBottom: '1px solid var(--c-border)',
      }}
      className="flex justify-between items-center p-8 !h-auto !py-4 !lg:py-6"
    >
      <div className="block lg:hidden">
        <Button style={headerButtonsStyle} onClick={toggleDrawer}>
          <HamburgerMenu size="16" />
        </Button>
      </div>
      <div className="hidden lg:flex items-center gap-2 lg:gap-2">
        <button onClick={toggleSider} className="cursor-pointer">
          {sider ? (
            <ArrowSquareRight size="24" variant="Bulk" />
          ) : (
            <ArrowSquareLeft size="24" variant="Bulk" />
          )}
        </button>
        <LayoutProductDropdown />
      </div>
      <div className="flex items-center gap-2">
        <Button style={headerButtonsStyle}>
          <SearchNormal1 size={16} />
        </Button>
        <div className="hidden lg:flex items-center gap-2">
          <LayoutThemeToggle />
          <LayoutLangToggle />
        </div>
        <Button style={headerButtonsStyle}>
          <img src="/icons/support.svg" width="24"></img>
        </Button>
        <Dropdown menu={{ items }} overlayClassName="header-select-dropdown">
          <Button
            className="header-select gap-1 lg:gap-2"
            style={{ height: 40, gap: '2px', paddingInline: '4px' }}
          >
            <Avatar shape="square" size={28} icon={<UserOutlined />} />{' '}
            <span className="hidden lg:block">Ahmed</span>
            <ArrowDown2 />
          </Button>
        </Dropdown>
      </div>
    </Header>
  )
}

export default LayoutHeader
