import EditUserDrawer from '@/components/users/drawers/EditUserDrawer'
import NewUserDrawer from '@/components/users/drawers/NewUserDrawer'
import HeaderUsers from '@/components/users/header/HeaderUsers'
import TableUsers from '@/components/users/tableUsers/TableUsers'
import { useState } from 'react'

const UsersPage = () => {
  const [drawer, setDrawer] = useState('')

  const handleDrawer = (drawer: string) => {
    setDrawer(drawer)
  }

  return (
    <>
      <HeaderUsers handleDrawer={handleDrawer} />
      <TableUsers handleDrawer={handleDrawer} />
      <NewUserDrawer
        open={drawer === 'newUser'}
        onClose={() => setDrawer('')}
      />
      <EditUserDrawer
        open={drawer === 'editUser'}
        onClose={() => setDrawer('')}
      />
    </>
  )
}

export default UsersPage
