import { Table, Input, Button, Select } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  ArrowDown2,
  CloseSquare,
  SearchNormal,
  TickCircle,
  TickSquare,
  Trash,
} from 'iconsax-reactjs'
import { useState } from 'react'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import { ticketsData, type TicketRow } from '@/services/mockData/tickets'

// type TableUsersProps = {
//   handleDrawer: (drawer: string) => void
//   handleUser: (userID: number) => void
//   onSelectionChange?: (
//     selectedKeys: React.Key[],
//     selectedUsers: UserRow[]
//   ) => void
//   onUserSelect: (userID: number) => void
// }

export default function TableSupport({
  onOpenTicket,
  onToggleView,
  view,
}: {
  onOpenTicket: (ticketID: number) => void
  onToggleView: () => void
  view: boolean
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmedDelete, setConfirmedDelete] = useState(false)
  const [statusModal, setStatusModal] = useState<undefined | string>(undefined)
  const [confirmedStatus, setConfirmedStatus] = useState(false)

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
      // const selectedTickets = data.filter((ticket) => keys.includes(ticket.id))
      // onSelectionChange?.(keys, selectedTickets)
      // keys.forEach((key) => onUserSelect(Number(key)))
    },
  }

  const [data, setData] = useState<TicketRow[]>(ticketsData)

  const handlePriorityChange = (
    ticketID: number,
    value: TicketRow['priority']
  ) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === ticketID ? { ...row, priority: value } : row
      )
    )
  }

  const handleStatusChange = (ticketID: number, value: TicketRow['status']) => {
    setData((prev) =>
      prev.map((row) => (row.id === ticketID ? { ...row, status: value } : row))
    )
  }

  const columns: ColumnsType<TicketRow> = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (_: TicketRow['title'], record: TicketRow) => (
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
      render: (_: TicketRow['description'], record: TicketRow) => (
        <p className="line-clamp-1">{record.description}</p>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      sorter: (a, b) => a.priority.localeCompare(b.priority),
      render: (_: TicketRow['priority'], record: TicketRow) => {
        return (
          <Select
            value={record.priority}
            className={`priority-${record.priority}`}
            onChange={(val) =>
              handlePriorityChange(record.id, val as TicketRow['priority'])
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
      render: (_: TicketRow['status'], record: TicketRow) => {
        return (
          <Select
            value={record.status}
            className="status"
            onChange={(val) =>
              handleStatusChange(record.id, val as TicketRow['status'])
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
    <>
      <div className="bg-none py-4 rounded-lg space-y-4">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search"
              size="large"
              prefix={<SearchNormal size={24} variant="Linear" />}
              className="!bg-background-card !text-text "
            />
            <ButtonFilter />
          </div>
          <div className="">
            <Button
              className="!bg-background-card !p-2 !border-[#FFFFFF66] !border-2"
              onClick={onToggleView}
            >
              {view ? (
                <img src="/supportPage/table-view.png" className="w-4 h-4" />
              ) : (
                <img src="/supportPage/card-view.png" className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <Table<TicketRow>
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
          rowClassName={(_, index) =>
            index % 2 === 0 ? 'even-row' : 'odd-row'
          }
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
