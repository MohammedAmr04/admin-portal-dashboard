import type { IUser } from '@/services/types/user'
import type { ColumnsType } from 'antd/es/table'
import { Switch, Button, Dropdown } from 'antd'
import { Edit, Trash } from 'iconsax-reactjs'
import { MoreOutlined } from '@ant-design/icons'

/**
 * Generates Users table columns with actions
 */
export const getUsersColumns = (
  setData: React.Dispatch<React.SetStateAction<IUser[]>>,
  setStatusModal: (value: 'activate' | 'suspend' | null) => void,
  handleDrawer: (type: 'EDIT' | 'NEW', action: 'OPEN' | 'CLOSE') => void,
  handleSetUser: (user: IUser) => void,
  handleDelete: (id: number) => void
): ColumnsType<IUser> => [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   sorter: (a, b) => a.id - b.id,
  // },
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
    sorter: (a, b) => (a.status || '').localeCompare(b.status || ''),
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
    render: (record: IUser) => (
      <div className="flex items-center justify-center gap-2">
        <Button
          type="text"
          icon={<Edit size="20" />}
          onClick={() => {
            handleDrawer('EDIT', 'OPEN')
            handleSetUser(record)
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
