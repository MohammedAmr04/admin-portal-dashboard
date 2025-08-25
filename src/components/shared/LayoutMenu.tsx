import { Menu, type MenuProps } from 'antd'
import { Building, Home, Profile2User } from 'iconsax-reactjs'

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
const LayoutMenu = () => {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      style={{ backgroundColor: 'transparent' }}
      items={siderItems}
    />
  )
}

export default LayoutMenu
