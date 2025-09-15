import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'
import { Button, message } from 'antd'
import { AddSquare, Export, TickCircle } from 'iconsax-reactjs'
import React, { useState } from 'react'

const HeaderUsers = ({
  handleDrawer,
  exportedUsers,
  setOnFinish,
}: {
  handleDrawer: (type: 'EDIT' | 'NEW', action: 'OPEN' | 'CLOSE') => void
  exportedUsers: React.Key[]
  setOnFinish: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [exportConfirmed, setExportConfirmed] = useState(false)

  return (
    <>
      <DynamicBreadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="text-text text-xl font-medium">Users</h1>
        <div className="flex my-6 justify-end gap-2.5 items-center">
          <ButtonSecondary
            leftIcon={<Export size={24} variant="Bulk" />}
            onClick={() => {
              if (exportedUsers.length > 0) {
                setIsExportModalOpen(true)
              } else {
                message.warning('No users were selected to be exported!')
              }
            }}
          >
            Export<span className="hidden lg:inline">Users</span>
          </ButtonSecondary>
          <Button
            type="primary"
            size="large"
            onClick={() => handleDrawer('NEW', 'OPEN')}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            <span className="hidden lg:inline">Add New User</span>
            <span className="lg:hidden">New User</span>
          </Button>
        </div>
      </div>
      {exportedUsers.length > 0 && isExportModalOpen && (
        <ConfirmationModal
          visible={isExportModalOpen}
          title="Are you sure that you want to export these users?"
          icon={
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          }
          onCancel={() => setIsExportModalOpen(false)}
          onConfirm={() => {
            setOnFinish(true)

            setIsExportModalOpen(false)

            setExportConfirmed(true)
          }}
        />
      )}
      <SuccessModal
        visible={exportConfirmed}
        title="Users exported successfully!"
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setExportConfirmed(false)
        }}
      />
    </>
  )
}

export default React.memo(HeaderUsers)
