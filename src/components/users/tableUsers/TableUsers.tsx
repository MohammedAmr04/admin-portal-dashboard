import { Table, Input, Dropdown, Button, Switch } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  CloseSquare,
  Edit,
  SearchNormal,
  TickCircle,
  TickSquare,
  Trash,
} from 'iconsax-reactjs'
import { useState } from 'react'
import { MoreOutlined } from '@ant-design/icons'
import { usersData } from '../../../services/mockData/users'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import type { IUser } from '@/services/types/user'
import CustomTable from '@/components/ui/table/CustomTable'
import { getUsersColumns } from '@/components/ui/table/usersColumns'
import { set } from 'date-fns'

type TableUsersProps = {
  handleDrawer: (drawer: string) => void
  handleUser: (userID: number) => void
  onSelectionChange?: (
    selectedKeys: React.Key[],
    selectedUsers: IUser[]
  ) => void
  isOrg?: boolean
  onUserSelect: (userID: number) => void
}

export default function TableUsers({
  handleDrawer,
  handleUser,
  onSelectionChange,
  isOrg = false,
  onUserSelect,
}: TableUsersProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmedDelete, setConfirmedDelete] = useState(false)
  const [statusModal, setStatusModal] = useState<
    'activate' | 'suspend' | undefined
  >(undefined)
  const [confirmedStatus, setConfirmedStatus] = useState(false)

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
      const selectedUsers = data.filter((user) => keys.includes(user.id))
      onSelectionChange?.(keys, selectedUsers)
      keys.forEach((key) => onUserSelect(Number(key)))
    },
  }

  const [data, setData] = useState<IUser[]>(usersData)

  const handleDelete = (userID: number) => {
    setDeleteModal(true)
  }

  const columns: ColumnsType<IUser> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      sorter: (a, b) => a.role.localeCompare(b.role),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (_: IUser['status'], record) => {
        const checked = record.status === 'Active'
        return (
          <div className="flex items-center gap-2">
            <Switch
              checked={checked}
              onChange={(next) => {
                setData((prev) =>
                  prev.map((row) =>
                    row.id === record.id
                      ? { ...row, status: next ? 'Active' : 'Inactive' }
                      : row
                  )
                )
                setStatusModal(next ? 'activate' : 'suspend')
              }}
            />
            <span className={checked ? 'text-success' : 'text-text'}>
              {checked ? 'Active' : 'Inactive'}
            </span>
          </div>
        )
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      fixed: 'right',
      render: (_: unknown, record: IUser) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            type="text"
            icon={<Edit size="20" />}
            onClick={() => {
              handleDrawer('editUser')
              handleUser(record.id)
            }}
          />
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Delete',
                  icon: <Trash size={24} />,
                  onClick: () => handleDelete(record.id),
                },
              ],
            }}
            trigger={['click']}
          >
            <Button type="text" icon={<MoreOutlined size={20} />} />
          </Dropdown>
        </div>
      ),
    },
  ]

  return (
    <>
      <div className="bg-background-dark py-4 rounded-lg">
        {/* <Table<IUser>
          rowSelection={rowSelection}
          columns={columns}
          title={() => (
            <div className={`flex ${!isOrg && 'px-5'} gap-3`}>
              <Input
                placeholder="Search"
                size="large"
                prefix={<SearchNormal size={24} variant="Linear" />}
                className="mb-4 !bg-background-card !text-text "
              />
              <Dropdown
                menu={{
                  items: [
                    { key: '1', label: 'Filter by Status' },
                    { key: '2', label: 'Filter by Date' },
                  ],
                }}
                trigger={['click']}
              >
                <ButtonFilter />
              </Dropdown>
            </div>
          )}
          dataSource={data}
          rowKey="id"
          pagination={{
            position: ['bottomCenter'],
            pageSize: 5,
            className: 'table-user-pagination',
          }}
          className="table-organization !bg-transparent overflow-x-scroll lg:overflow-x-auto"
          rowClassName={(_, index) =>
            index % 2 === 0 ? 'even-row' : 'odd-row'
          }
        /> */}
        <CustomTable<IUser>
          columns={getUsersColumns(
            setData,
            setStatusModal,
            handleDrawer,
            handleUser,
            handleDelete
          )}
          onFinish={false}
          setData={setData}
          data={data}
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
        onCancel={() => setStatusModal(undefined)}
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
          setStatusModal(undefined)
          setConfirmedStatus(false)
        }}
      />
    </>
  )
}
