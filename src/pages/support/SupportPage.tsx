import TicketDrawer from '@/components/support/drawers/TicketDrawer'
import HeaderSupport from '@/components/support/header/HeaderSupport'
import TableSupport from '@/components/support/tableSupport/TableSupport'
import { useEffect, useState } from 'react'

const SupportPage = () => {
  const [drawer, setDrawer] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<number | undefined>(
    undefined
  )

  const handleOpenTicket = (ticketID: number) => {
    setSelectedTicket(ticketID)
    setDrawer(true)
  }

  const handleClose = () => {
    setSelectedTicket(undefined)
    setDrawer(false)
  }

  useEffect(() => {
    console.log(drawer)
    console.log(selectedTicket)
  }, [drawer, selectedTicket])

  return (
    <>
      <HeaderSupport />
      <TableSupport onOpenTicket={handleOpenTicket} />
      {drawer && selectedTicket && (
        <TicketDrawer ticketID={selectedTicket} onClose={handleClose} />
      )}
    </>
  )
}

export default SupportPage
