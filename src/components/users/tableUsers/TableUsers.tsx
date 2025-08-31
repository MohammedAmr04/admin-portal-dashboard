import { Table, Input, Dropdown, Button, Switch } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Edit, SearchNormal, Trash } from 'iconsax-reactjs'
import { useState } from 'react'
import { DownOutlined, SlidersOutlined, MoreOutlined } from '@ant-design/icons'
import { usersData, type UserRow } from '../../../services/mockData/users'

export default function TableUsers({
  handleDrawer,
  handleUser,
}: {
  handleDrawer: (drawer: string) => void
  handleUser: (userID: number) => void
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
      console.log('Selected rows:', keys)
    },
  }

  const [data, setData] = useState<UserRow[]>(usersData)

  const columns: ColumnsType<UserRow> = [
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
      render: (_: UserRow['status'], record) => {
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
      render: (_: unknown, record: UserRow) => (
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
              items: [{ key: '1', label: 'Delete', icon: <Trash size={24} /> }],
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
    <div className="bg-background-dark py-4 rounded-lg">
      <Table<UserRow>
        rowSelection={rowSelection}
        columns={columns}
        title={() => (
          <div className="flex px-5 gap-3">
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
              <Button className="!bg-background-card flex gap-7" size="large">
                <div className="flex gap-2">
                  <SlidersOutlined size={24} />
                  <span className="text-base">Add filter</span>
                </div>
                <DownOutlined />
              </Button>
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
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  )
}
