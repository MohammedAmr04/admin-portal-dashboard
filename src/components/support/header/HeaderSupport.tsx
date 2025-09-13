import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'
import type { ITicket } from '@/services/types/ticket'
import { message } from 'antd'
import { Export, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const HeaderSupport = ({
  selectedExportTickets,
}: {
  selectedExportTickets: ITicket[]
}) => {
  const [exportModalOpen, setExportModalOpen] = useState(false)
  const [exportConfirmed, setExportConfirmed] = useState(false)
  return (
    <>
      <DynamicBreadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="text-text text-xl font-medium">Support Tickets</h1>
        <div className="my-6">
          <ButtonSecondary
            leftIcon={<Export size={24} variant="Bulk" />}
            onClick={() => {
              if (selectedExportTickets.length > 0) {
                setExportModalOpen(true)
              } else {
                message.warning('No users were selected to be exported!')
              }
            }}
          >
            Export
          </ButtonSecondary>
        </div>
      </div>
      {selectedExportTickets.length > 0 && exportModalOpen && (
        <ConfirmationModal
          visible={exportModalOpen}
          title="Are you sure that you want to export these tickets?"
          icon={
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          }
          onCancel={() => setExportModalOpen(false)}
          onConfirm={() => {
            setExportModalOpen(false)
            setExportConfirmed(true)
          }}
        />
      )}
      <SuccessModal
        visible={exportConfirmed}
        title="Tickets exported successfully!"
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setExportConfirmed(false)
        }}
      />
    </>
  )
}

export default HeaderSupport
