import {
  Collapse,
  Select,
  Checkbox,
  type CollapseProps,
  Pagination,
} from 'antd'
import type { ITicket } from '@/services/types/ticket'
import { ticketsData } from '@/services/mockData/tickets'
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
  ArrowSquareDown,
  ArrowSquareUp,
} from 'iconsax-reactjs'
import { useState, type CSSProperties } from 'react'

export const CardSupport = ({
  onSelectExportTickets,
}: {
  onSelectExportTickets: (tickets: ITicket[]) => void
}) => {
  const [data, setData] = useState<ITicket[]>(ticketsData)
  const [selectedTickets, setSelectedTickets] = useState<React.Key[]>([])
  const [page, setPage] = useState<number>(1)

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

  const panelStyle: CSSProperties = {
    background: 'var(--color-background-dark)',
    borderRadius: 12,
    border: '1px solid var(--color-border)',
  }

  const collapseItems: CollapseProps['items'] = data
    .slice((page - 1) * 5, page * 5)
    .map((ticket) => ({
      key: String(ticket.id),
      extra: (
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center w-full">
          <p className="font-semibold">{ticket.title}</p>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-2 lg:flex-row lg:gap-4 items-center"
          >
            <div className="flex gap-2 lg:gap-4">
              <Select
                value={ticket.priority}
                className={`priority-${ticket.priority}`}
                suffixIcon={<ArrowDown2 size={16} />}
                onChange={(val) =>
                  handlePriorityChange(ticket.id, val as ITicket['priority'])
                }
                options={[
                  { value: 'high', label: 'High' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'low', label: 'Low' },
                ]}
                style={{ width: 100, textAlign: 'center' }}
              />
              <Select
                value={ticket.status}
                className="status"
                suffixIcon={<ArrowDown2 size={16} />}
                onChange={(val) =>
                  handleStatusChange(ticket.id, val as ITicket['status'])
                }
                options={[
                  { value: 'pending', label: 'Pending' },
                  { value: 'closed', label: 'Closed' },
                ]}
                style={{ width: 100, textAlign: 'center' }}
              />
            </div>
            <div className="flex gap-2 lg:gap-4">
              <div className="w-[100px]">
                <p className="text-xs text-[#ADB7BE]">Created:</p>
                <p className="text-sm">{ticket.createdAt}</p>
              </div>
              <div className="w-[100px]">
                <p className="text-xs text-[#ADB7BE]">Updated:</p>
                <p className="text-sm">{ticket.updatedAt}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className="bg-background p-3 rounded-xl space-y-3">
          <p className="font-medium text-sm">Description</p>
          <div className="bg-background-dark rounded-2xl p-4 flex justify-between gap-4">
            <p className="flex-3">{ticket.description}</p>
            <div className="flex-1">
              <p className="text-xs text-text/50">Organization</p>
              <p className="text-sm">{ticket.organization}</p>
            </div>
            <div className="flex-2">
              <p className="text-xs text-text/50">Notes</p>
              <p className="text-sm">{ticket.notes}</p>
            </div>
          </div>
        </div>
      ),
      style: panelStyle,
    }))

  return (
    <div className="space-y-4">
      <div className="p-3 bg-[#12121f] rounded-xl tickets-collapse">
        <Collapse
          bordered={false}
          expandIcon={(panelProps: any) => {
            const key = panelProps.panelKey as React.Key
            const checked = selectedTickets.includes(key)
            const handleToggleSelect = (k: React.Key, next: boolean) => {
              const nextKeys = next
                ? [...selectedTickets, k]
                : selectedTickets.filter((p) => p !== k)
              setSelectedTickets(nextKeys)
              const selected = data.filter((t) =>
                nextKeys.includes(String(t.id))
              )
              onSelectExportTickets(selected)
            }
            return (
              <span className="flex items-center gap-2 lg:gap-5 lg:ms-8">
                <Checkbox
                  checked={checked}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleToggleSelect(key, e.target.checked)}
                />
                {panelProps.isActive ? (
                  <ArrowSquareUp size="24" variant="Bulk" />
                ) : (
                  <ArrowSquareDown size="24" variant="Bulk" />
                )}
              </span>
            )
          }}
          style={{ background: '#12121f' }}
          items={collapseItems}
        />
      </div>
      <Pagination
        align="center"
        current={page}
        onChange={(p) => setPage(p)}
        total={data.length}
        pageSize={5}
        className="pagination"
        prevIcon={<ArrowLeft2 size="16" />}
        nextIcon={<ArrowRight2 size="16" />}
      />
    </div>
  )
}
