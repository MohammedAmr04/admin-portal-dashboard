import EditUserDrawer from '@/components/users/drawers/EditUserDrawer'
import NewUserDrawer from '@/components/users/drawers/NewUserDrawer'
import HeaderUsers from '@/components/users/header/HeaderUsers'
import TableUsers from '@/components/users/tableUsers/TableUsers'
import type { IUser } from '@/services/types/user'
import { useState, useCallback } from 'react'

const UsersPage = () => {
  const [drawer, setDrawer] = useState<{ editUser: boolean; newUser: boolean }>(
    { editUser: false, newUser: false }
  )
  const [user, setUser] = useState<IUser | null>(null)
  const [exportedUsers, setExportedUsers] = useState<React.Key[]>([])
  const [onFinish, setOnFinsih] = useState<boolean>(false)
  const handleDrawer = useCallback(
    (type: 'EDIT' | 'NEW', action: 'OPEN' | 'CLOSE') => {
      setDrawer((prev) => {
        switch (type) {
          case 'EDIT':
            return { ...prev, editUser: action === 'OPEN' }
          case 'NEW':
            return { ...prev, newUser: action === 'OPEN' }
          default:
            return prev
        }
      })
    },
    []
  )

  const handleUser = useCallback((user: IUser) => {
    setUser(user)
  }, [])

  return (
    <>
      <HeaderUsers
        setOnFinish={setOnFinsih}
        handleDrawer={handleDrawer}
        exportedUsers={exportedUsers}
      />
      <TableUsers
        handleDrawer={handleDrawer}
        handleUser={handleUser}
        onFinish={onFinish}
        setExportedData={setExportedUsers}
      />
      <NewUserDrawer
        open={drawer.newUser}
        onClose={() => handleDrawer('NEW', 'CLOSE')}
      />
      <EditUserDrawer
        open={drawer.editUser}
        onClose={() => handleDrawer('EDIT', 'CLOSE')}
        user={user}
      />
    </>
  )
}

export default UsersPage
