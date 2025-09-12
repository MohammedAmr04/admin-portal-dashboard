import type { ColumnsType } from 'antd/es/table'
import type { IOrganization } from '@/services/types/organization'

import { MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { Edit, Refresh, Trash } from 'iconsax-reactjs'
import { Link } from 'react-router'

import StatusTag from '@/components/organizations/tags/StatusTag'
import ProductTag from '@/components/organizations/tags/ProductTag'

/**
 * Generates Organization table columns with actions
 */
export const getOrganizationColumns = (
  handleDrawer: (action: 'OPEN' | 'CLOSE') => void,
  handleOrganization?: (id: number) => void,
  handleDelete?: (id: number) => void
): ColumnsType<IOrganization> => [
  {
    title: 'Organization',
    dataIndex: 'org',
    sorter: (a, b) => a.org.localeCompare(b.org),
    render: (org: string) => <Link to={`${org}`}>{org}</Link>,
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
    render: (status: IOrganization['status']) => <StatusTag status={status} />,
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
    fixed: 'right',
    title: (
      <div className="flex justify-center">
        <Refresh size="32" className="!text-primary" />
      </div>
    ),
    key: 'actions',
    render: (_: unknown, record: IOrganization) => (
      <div className="flex items-center justify-center gap-2">
        <Button
          type="text"
          icon={<Edit variant="Linear" size="20" />}
          onClick={() => {
            handleDrawer && handleDrawer('editOrganization')
            handleOrganization && handleOrganization(record.id)
          }}
        />
        <Dropdown
          menu={{
            items: [
              {
                key: '2',
                label: 'Delete',
                icon: <Trash size={24} />,
                onClick: () => handleDelete && handleDelete(record.id),
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
