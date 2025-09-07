import EditUserDrawer from '@/components/users/drawers/EditUserDrawer'
import NewUserDrawer from '@/components/users/drawers/NewUserDrawer'
import HeaderUsers from '@/components/users/header/HeaderUsers'
import TableUsers from '@/components/users/tableUsers/TableUsers'
import { useState } from 'react'

const UsersPage = () => {
  const [drawer, setDrawer] = useState('')
  const [userID, setUserID] = useState<number | undefined>(undefined)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const handleDrawer = (drawer: string) => {
    setDrawer(drawer)
  }

  const handleUser = (userID: number) => {
    setUserID(userID)
  }

  return (
    <>
      <HeaderUsers handleDrawer={handleDrawer} selectedUsers={selectedUsers} />
      <TableUsers
        handleDrawer={handleDrawer}
        handleUser={handleUser}
        onUserSelect={(id) => setSelectedUsers((prev) => [...prev, id])}
      />
      <NewUserDrawer
        open={drawer === 'newUser'}
        onClose={() => setDrawer('')}
      />
      <EditUserDrawer
        open={drawer === 'editUser'}
        onClose={() => setDrawer('')}
        userID={userID}
      />
    </>
  )
}

export default UsersPage
