import { ticketsData, type TicketRow } from '@/services/mockData/tickets'
import { Drawer, Select } from 'antd'
import { ArrowDown2, CloseCircle, Export } from 'iconsax-reactjs'
import { useState } from 'react'

export default function TicketDrawer({
  ticketID,
  onClose,
}: {
  ticketID: number
  onClose: () => void
}) {
  const [ticket, setTicket] = useState<TicketRow | undefined>(
    ticketsData.find((ticket) => ticket.id === ticketID)
  )

  const handlePriorityChange = (value: TicketRow['priority']) => {
    setTicket((prev) => (prev ? { ...prev, priority: value } : prev))
  }

  const handleStatusChange = (value: TicketRow['status']) => {
    setTicket((prev) => (prev ? { ...prev, status: value } : prev))
  }

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">{ticket?.title}</span>
          <span className="flex gap-1">
            <Export size={24} variant="Linear" />
            <CloseCircle
              onClick={onClose}
              variant="Linear"
              size={24}
              className="cursor-pointer"
            />
          </span>
        </div>
      }
      closeIcon={false}
      open={true}
      styles={{
        content: { paddingInline: '16px', backgroundColor: '#12121f' },
        header: { border: 'none', paddingInline: '0px' },
      }}
      width={543}
      className="new-drawer"
    >
      <div className="space-y-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Priority</span>
            <Select
              value={ticket?.priority}
              className={`priority-${ticket?.priority}`}
              onChange={(val) =>
                handlePriorityChange(val as TicketRow['priority'])
              }
              options={[
                { value: 'high', label: 'High' },
                {
                  value: 'medium',
                  label: 'Medium',
                },
                { value: 'low', label: 'Low' },
              ]}
              suffixIcon={<ArrowDown2 size={16} />}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Status</span>
            <Select
              value={ticket?.status}
              className="status"
              onChange={(val) => handleStatusChange(val as TicketRow['status'])}
              options={[
                { value: 'pending', label: 'Pending' },
                {
                  value: 'closed',
                  label: 'Closed',
                },
              ]}
              suffixIcon={<ArrowDown2 size={16} />}
            />
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Description</p>
          <p className="input-like-div">{ticket?.description}</p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Organization</p>
          <p className="input-like-div">{ticket?.organization}</p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Notes</p>
          <p className="input-like-div">{ticket?.notes}</p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Created At</p>
          <p className="input-like-div">{ticket?.createdAt}</p>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Updated At</p>
          <p className="input-like-div">{ticket?.updatedAt}</p>
        </div>
      </div>
    </Drawer>
  )
}
