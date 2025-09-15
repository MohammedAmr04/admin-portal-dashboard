import { CloseSquare, TickCircle, TickSquare, Trash } from 'iconsax-reactjs'
import React, { useState } from 'react'
import { usersData } from '../../../services/mockData/users'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import type { IUser } from '@/services/types/user'
import CustomTable from '@/components/ui/table/CustomTable'
import { getUsersColumns } from '@/components/ui/table/usersColumns'
interface TableUsersProps {
  handleDrawer: (type: 'EDIT' | 'NEW', action: 'OPEN' | 'CLOSE') => void
  handleUser: (user: IUser) => void
  onFinish: boolean
  isOrg?: boolean
  setUserSelected?: (userID: number) => void
  setExportedData: React.Dispatch<React.SetStateAction<React.Key[]>>
}

function TableUsers({
  handleDrawer,
  handleUser,
  onFinish,
  setExportedData,
}: TableUsersProps) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmedDelete, setConfirmedDelete] = useState(false)
  const [statusModal, setStatusModal] = useState<'activate' | 'suspend' | null>(
    null
  )
  const [confirmedStatus, setConfirmedStatus] = useState(false)

  const [data, setData] = useState<IUser[]>(usersData)

  const handleDelete = () => {
    setDeleteModal(true)
  }

  return (
    <>
      <div className="bg-background-dark py-4 rounded-lg">
        <CustomTable<IUser>
          columns={getUsersColumns(
            setData,
            setStatusModal,
            handleDrawer,
            handleUser,
            handleDelete
          )}
          key={'id'}
          onFinish={onFinish}
          setExportedData={setExportedData}
          dataSource={data}
        />
      </div>
      <ConfirmationModal
        visible={deleteModal}
        title="Are you sure that you want to delete this user?"
        icon={<Trash size={36} variant="Bulk" className="!text-danger" />}
        onCancel={() => setDeleteModal(false)}
        onConfirm={() => {
          setDeleteModal(false)
          setConfirmedDelete(true)
        }}
      />
      <SuccessModal
        visible={confirmedDelete}
        title="User deleted successfully!"
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setConfirmedDelete(false)
        }}
      />
      <ConfirmationModal
        visible={!!statusModal}
        title={
          statusModal === 'suspend'
            ? 'Are you sure you want to suspend this user?'
            : 'Are you sure you want to activate this user?'
        }
        icon={
          statusModal === 'suspend' ? (
            <CloseSquare size={36} variant="Bulk" className="!text-danger" />
          ) : (
            <TickSquare size={36} variant="Bulk" className="!text-success" />
          )
        }
        onCancel={() => setStatusModal(null)}
        onConfirm={() => {
          setConfirmedStatus(true)
        }}
      />
      <SuccessModal
        visible={confirmedStatus}
        title={
          statusModal === 'suspend'
            ? 'User suspended successfully!'
            : 'User activated successfully!'
        }
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setStatusModal(null)
          setConfirmedStatus(false)
        }}
      />
    </>
  )
}
export default React.memo(TableUsers)
