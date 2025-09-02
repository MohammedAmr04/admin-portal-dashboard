import ButtonSecondary from '@/components/ui/buttons/buttons/ButtonSecondary'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import { Breadcrumb, Button, message, Modal } from 'antd'
import { AddSquare, ArrowRight2, Export, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const HeaderUsers = ({
  handleDrawer,
  selectedUsers,
}: {
  handleDrawer: (drawer: string) => void
  selectedUsers: number[]
}) => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false)
  const [exportConfirmed, setExportConfirmed] = useState(false)

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <a href="./dashboard">Dashboard</a>,
          },
          {
            title: 'Users',
          },
        ]}
        separator={<ArrowRight2 size={16} />}
      />
      <div className="flex justify-between items-center">
        <h1 className="text-text text-xl font-medium">Users</h1>
        <div className="flex my-6 justify-end gap-2.5 items-center">
          <ButtonSecondary
            leftIcon={<Export size={24} variant="Bulk" />}
            onClick={() => {
              if (selectedUsers.length > 0) {
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
            onClick={() => handleDrawer('newUser')}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            <span className="hidden lg:inline">Create</span>New
            <span className="hidden lg:inline">User</span>
          </Button>
        </div>
      </div>
      {selectedUsers.length > 0 && isExportModalOpen && (
        <ConfirmationModal
          visible={isExportModalOpen}
          title="Are you sure that you want to export these users?"
          icon={
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          }
          onCancel={() => setIsExportModalOpen(false)}
          onConfirm={() => {
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

export default HeaderUsers
