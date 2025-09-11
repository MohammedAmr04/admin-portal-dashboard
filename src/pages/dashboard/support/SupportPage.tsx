import TicketDrawer from '@/components/support/drawers/TicketDrawer'
import HeaderSupport from '@/components/support/header/HeaderSupport'
import { useState } from 'react'
import { ContentSupport } from '@/components/support/contentSupport/ContentSupport'

const SupportPage = () => {
  const [drawer, setDrawer] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<number | undefined>(
    undefined
  )

  const handleOpenTicket = (ticketID: number) => {
    setSelectedTicket(ticketID)
    setDrawer(true)
  }

  const handleCloseTicket = () => {
    setSelectedTicket(undefined)
    setDrawer(false)
  }

  return (
    <>
      <HeaderSupport />
      <ContentSupport onOpenTicket={handleOpenTicket} />
      {drawer && selectedTicket && (
        <TicketDrawer ticketID={selectedTicket} onClose={handleCloseTicket} />
      )}
    </>
  )
}

export default SupportPage
