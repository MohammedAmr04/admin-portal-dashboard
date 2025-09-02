import { Menu, type MenuProps } from 'antd'
import { Building, Home, Profile2User } from 'iconsax-reactjs'
import { useLocation, useNavigate } from 'react-router'

type MenuItem = Required<MenuProps>['items'][number]

const siderItems: MenuItem[] = [
  { key: '/dashboard', label: 'Dashboard', icon: <Home /> },
  { key: '/dashboard/users', label: 'Users', icon: <Profile2User /> },
  {
    key: '/dashboard/organizations',
    label: 'Organizations',
    icon: <Building />,
  },
]

const LayoutMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname
  const selected = [
    path.startsWith('/dashboard/organizations')
      ? '/dashboard/organizations'
      : path.startsWith('/dashboard/users')
        ? '/dashboard/users'
        : '/dashboard'
  ]

  return (
    <Menu
      theme="dark"
      style={{ backgroundColor: 'transparent' }}
      items={siderItems}
      
      selectedKeys={selected}
      onClick={({ key }) => navigate(key as string)}
    />
  )
}

export default LayoutMenu
