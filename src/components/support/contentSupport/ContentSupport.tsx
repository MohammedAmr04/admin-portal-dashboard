import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import { Button, Input } from 'antd'
import { SearchNormal } from 'iconsax-reactjs'
import TableSupport from './TableSupport'
import { useState } from 'react'
import { CardSupport } from './CardSupport'
import type { ITicket } from '@/services/types/ticket'

export const ContentSupport = ({
  onOpenTicket,
  onSelectExportTickets,
}: {
  onOpenTicket: (ticketID: number) => void
  onSelectExportTickets: (tickets: ITicket[]) => void
}) => {
  const [view, setView] = useState<'table' | 'card'>('card')

  const handleToggleView = () => {
    setView((prev) => (prev === 'table' ? 'card' : 'table'))
  }

  return (
    <div className="bg-none space-y-4">
      <div>
        <div className="flex gap-2">
          <Input
            placeholder="Search"
            size="large"
            prefix={<SearchNormal size={24} variant="Linear" />}
            className="!bg-background-card !text-text "
          />
          <ButtonFilter />
        </div>
      </div>
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
      {view === 'table' ? (
        <TableSupport
          onOpenTicket={onOpenTicket}
          onSelectExportTickets={onSelectExportTickets}
        />
      ) : (
        <CardSupport onSelectExportTickets={onSelectExportTickets} />
      )}
    </div>
  )
}
