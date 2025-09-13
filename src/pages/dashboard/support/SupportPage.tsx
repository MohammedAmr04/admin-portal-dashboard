import TicketDrawer from '@/components/support/drawers/TicketDrawer'
import HeaderSupport from '@/components/support/header/HeaderSupport'
import { useState } from 'react'
import { ContentSupport } from '@/components/support/contentSupport/ContentSupport'
import type { ITicket } from '@/services/types/ticket'

const SupportPage = () => {
  const [drawer, setDrawer] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<number | undefined>(
    undefined
  )
  const [selectedExportTickets, setSelectedExportTickets] = useState<ITicket[]>(
    []
  )

  const handleOpenTicket = (ticketID: number) => {
    setSelectedTicket(ticketID)
    setDrawer(true)
  }

  const handleCloseTicket = () => {
    setSelectedTicket(undefined)
    setDrawer(false)
  }

  const handleExportTickets = (tickets: ITicket[]) => {
    setSelectedExportTickets(tickets)
  }

  return (
    <>
      <HeaderSupport selectedExportTickets={selectedExportTickets} />
      <ContentSupport
        onOpenTicket={handleOpenTicket}
        onSelectExportTickets={handleExportTickets}
      />
      {drawer && selectedTicket && (
        <TicketDrawer ticketID={selectedTicket} onClose={handleCloseTicket} />
      )}
    </>
  )
}

export default SupportPage
