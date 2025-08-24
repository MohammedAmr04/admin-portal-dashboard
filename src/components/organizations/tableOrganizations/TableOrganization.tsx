import { Table, Input, Dropdown, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Edit, Refresh, SearchNormal, Trash } from 'iconsax-reactjs'
import { useState } from 'react'
import { DownOutlined, SlidersOutlined, MoreOutlined } from '@ant-design/icons'

type Tstatus = 'Rejected' | 'Accepted' | 'In Negotiation' | 'Prospective'

type OrgRow = {
  key: number
  org: string
  owner: string
  products: string[]
  status: Tstatus

  date: string
}

const tagColor: Record<Tstatus, string> = {
  Rejected: 'text-danger bg-danger/20',
  Accepted: 'text-success bg-success/20',
  'In Negotiation': 'text-warning bg-warning/20',
  Prospective: 'text-success bg-success/20',
}
const data: OrgRow[] = [
  {
    key: 1,
    org: 'CBRE',
    owner: 'Morgan Bianchi',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Rejected',
    date: 'Jan 24, 2020',
  },
  {
    key: 2,
    org: 'Google',
    owner: 'Sasha Schmidt',
    products: ['DWM', 'CTI', 'DRP'],
    status: 'Accepted',
    date: 'Jan 19, 2020',
  },
]

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
      <div className="flex gap-1">
        {products.map((p) => (
          <span
            key={p}
            className="px-2 py-1 rounded-md bg-purple-900 text-white text-xs"
          >
            {p}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status: OrgRow['status']) => {
      const color = tagColor[status]
      return (
        <span className={`px-2 py-1 rounded-md text-xs ${color}`}>
          {status}
        </span>
      )
    },
  },
  {
    title: 'Creation Date',
    dataIndex: 'date',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
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
                label: 'impersonate',
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
    <div className="bg-background-dark p-4 rounded-lg">
      <Table<OrgRow>
        rowSelection={rowSelection}
        columns={columns}
        title={() => (
          <div className="flex gap-3">
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
                  <SlidersOutlined size={20} />
                  <span className="text-base">Add filter</span>
                </div>
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        )}
        // showHeader={false}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
        className="custom-table !bg-transparent"
      />
    </div>
  )
}
