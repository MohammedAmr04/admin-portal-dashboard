import { Button, Checkbox, type MenuProps } from 'antd'
import TableSupport from './TableSupport'
import { useState } from 'react'
import { CardSupport } from './CardSupport'
import type { ITicket } from '@/services/types/ticket'
import ContentHeaderSupport from '../header/ContentHeaderSupport'
import FilterMenu from '@/components/ui/menus/filterMenu/FilterMenu'

type MenuItem = Required<MenuProps>['items'][number]

export const ContentSupport = ({
  onOpenTicket,
  onSelectExportTickets,
}: {
  onOpenTicket: (ticketID: number) => void
  onSelectExportTickets: (tickets: ITicket[]) => void
}) => {
  const [view, setView] = useState<'table' | 'card'>('card')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const handleToggleView = () => {
    setView((prev) => (prev === 'table' ? 'card' : 'table'))
  }

  const handleFiltersOpen = () => {
    setFiltersOpen((prev) => !prev)
  }

  const filters: MenuItem[] = [
    {
      key: 'organization',
      label: 'Organization',
      children: ['Paymob', 'Fawry'].map((org) => ({
        key: org,
        label: <Checkbox className="!px-2">{org}</Checkbox>,
      })),
    },
    {
      key: 'priority',
      label: 'Priority',
      children: ['High', 'Medium', 'Low'].map((priority) => ({
        key: priority,
        label: <Checkbox className="!px-2">{priority}</Checkbox>,
      })),
    },
    {
      key: 'status',
      label: 'Status',
      children: ['Pending', 'In Progress', 'Closed', 'Ignored'].map(
        (status) => ({
          key: status,
          label: <Checkbox className="!px-2">{status}</Checkbox>,
        })
      ),
    },
  ]

  return (
    <div className="bg-none space-y-4">
      <ContentHeaderSupport onOpenFilters={handleFiltersOpen} />
      <Button
        className="!bg-background-card !p-3 !border-text/50 !border-2"
        onClick={handleToggleView}
      >
        {view === 'table' ? (
          <img src="/supportPage/table-view.png" className="w-4 h-4" />
        ) : (
          <img src="/supportPage/card-view.png" className="w-4 h-4" />
        )}
      </Button>
      <div className="flex gap-2">
        <div className="flex-1">
          {view === 'table' ? (
            <TableSupport
              onOpenTicket={onOpenTicket}
              onSelectExportTickets={onSelectExportTickets}
            />
          ) : (
            <CardSupport onSelectExportTickets={onSelectExportTickets} />
          )}
        </div>
        {filtersOpen && <FilterMenu filters={filters} />}
      </div>
    </div>
  )
}
