import TicketDrawer from '@/components/support/drawers/TicketDrawer'
import HeaderSupport from '@/components/support/header/HeaderSupport'
import TableSupport from '@/components/support/tableSupport/TableSupport'
import { useEffect, useState } from 'react'

const SupportPage = () => {
  const [drawer, setDrawer] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<number | undefined>(
    undefined
  )
  const [view, setView] = useState<boolean>(false) // false for Table, true for Card

  const handleOpenTicket = (ticketID: number) => {
    setSelectedTicket(ticketID)
    setDrawer(true)
  }

  const handleClose = () => {
    setSelectedTicket(undefined)
    setDrawer(false)
  }

  const handleViewChange = () => {
    setView((prev) => !prev)
  }

  useEffect(() => {
    console.log(drawer)
    console.log(selectedTicket)
  }, [drawer, selectedTicket])

  return (
    <>
      <HeaderSupport />
      <TableSupport
        onOpenTicket={handleOpenTicket}
        onToggleView={handleViewChange}
        view={view}
      />
      {drawer && selectedTicket && (
        <TicketDrawer ticketID={selectedTicket} onClose={handleClose} />
      )}
    </>
  )
}

export default SupportPage
