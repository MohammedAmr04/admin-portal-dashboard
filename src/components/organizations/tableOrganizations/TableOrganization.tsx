import { Table, Input, Dropdown, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Edit, Refresh, SearchNormal, Trash } from 'iconsax-reactjs'
import { useState } from 'react'
import { DownOutlined, SlidersOutlined, MoreOutlined } from '@ant-design/icons'
import StatusTag from '../tags/StatusTag'
import ProductTag from '../tags/ProductTag'

type OrgRow = {
  key: number
  org: string
  owner: string
  products: string[]
  status:
    | 'Rejected'
    | 'In Negotiation'
    | 'Under Review'
    | 'Accepted'
    | 'Prospective'
  date: string
}

// داتا 15 صف
const data: OrgRow[] = Array.from({ length: 15 }, (_, i) => ({
  key: i + 1,
  org: ['CBRE', 'Google', 'Amazon', 'Microsoft', 'Tesla'][i % 5],
  owner: [
    'Morgan Bianchi',
    'Sasha Schmidt',
    'Ali Hassan',
    'John Doe',
    'Emma Watson',
  ][i % 5],
  products: [['DWM'], ['CTI'], ['DRP'], ['DWM', 'CTI'], ['CTI', 'DRP']][i % 5],
  status: [
    'Rejected',
    'Accepted',
    'Under Review',
    'In Negotiation',
    'Prospective',
  ][i % 5] as OrgRow['status'],
  date: `Jan ${10 + i}, 2020`,
}))

const columns: ColumnsType<OrgRow> = [
  {
    title: 'Organization',
    dataIndex: 'org',
    sorter: (a, b) => a.org.localeCompare(b.org),
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    sorter: (a, b) => a.owner.localeCompare(b.owner),
  },
  {
    title: 'Products',
    dataIndex: 'products',
    sorter: (a, b) => a.products.length - b.products.length,
    render: (products: string[]) => (
      <div className="flex justify-center gap-1">
        {products.map((p) => (
          <ProductTag key={p} product={p} />
        ))}
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status: OrgRow['status']) => {
      return <StatusTag status={status} />
    },
  },
  {
    title: 'Creation Date',
    dataIndex: 'date',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    render: (date: string) => (
      <div className="flex justify-center gap-1">{date}</div>
    ),
  },
  {
    title: (
      <div className="flex justify-center  ">
        <Refresh size="32" className="!text-primary" />
      </div>
    ),
    key: 'actions',
    render: () => (
      <div className="flex items-center justify-center gap-2">
        <Button type="text" icon={<Edit size="20" />} />
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'Impersonate',
                icon: <img src="/organizations/view_icon.svg" alt="view" />,
              },
              { key: '2', label: 'Delete', icon: <Trash size={24} /> },
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

export default function TableOrganization() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
      console.log('Selected rows:', keys)
    },
  }

  return (
    <div className="bg-background-dark py-4 rounded-lg">
      <Table<OrgRow>
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
        pagination={{ position: ['bottomCenter'], pageSize: 5 }}
        className="table-organization !bg-transparent"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  )
}
