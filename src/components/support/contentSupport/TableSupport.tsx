import { Table, Select } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { ArrowDown2 } from 'iconsax-reactjs'
import { useState } from 'react'
import { ticketsData } from '@/services/mockData/tickets'
import type { ITicket } from '@/services/types/ticket'

export default function TableSupport({
  onOpenTicket,
}: {
  onOpenTicket: (ticketID: number) => void
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
    },
  }

  const [data, setData] = useState<ITicket[]>(ticketsData)

  const handlePriorityChange = (
    ticketID: number,
    value: ITicket['priority']
  ) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === ticketID ? { ...row, priority: value } : row
      )
    )
  }

  const handleStatusChange = (ticketID: number, value: ITicket['status']) => {
    setData((prev) =>
      prev.map((row) => (row.id === ticketID ? { ...row, status: value } : row))
    )
  }

  const columns: ColumnsType<ITicket> = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (_: ITicket['title'], record: ITicket) => (
        <p
          className="line-clamp-1 cursor-pointer"
          onClick={() => onOpenTicket(record.id)}
        >
          {record.title}
        </p>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (_: ITicket['description'], record: ITicket) => (
        <p className="line-clamp-1">{record.description}</p>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      sorter: (a, b) => a.priority.localeCompare(b.priority),
      render: (_: ITicket['priority'], record: ITicket) => {
        return (
          <Select
            value={record.priority}
            className={`priority-${record.priority}`}
            onChange={(val) =>
              handlePriorityChange(record.id, val as ITicket['priority'])
            }
            suffixIcon={<ArrowDown2 size={16} />}
            options={[
              { value: 'high', label: 'High' },
              {
                value: 'medium',
                label: 'Medium',
              },
              { value: 'low', label: 'Low' },
            ]}
          />
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (_: ITicket['status'], record: ITicket) => {
        return (
          <Select
            value={record.status}
            className="status"
            onChange={(val) =>
              handleStatusChange(record.id, val as ITicket['status'])
            }
            suffixIcon={<ArrowDown2 size={16} />}
            options={[
              { value: 'pending', label: 'Pending' },
              {
                value: 'closed',
                label: 'Closed',
              },
            ]}
          />
        )
      },
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      sorter: (a, b) => a.createdAt.localeCompare(b.createdAt),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      sorter: (a, b) => a.updatedAt.localeCompare(b.updatedAt),
    },
  ]

  return (
    <Table<ITicket>
      rowSelection={rowSelection}
      columns={columns}
      title={() => undefined}
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
  )
}
