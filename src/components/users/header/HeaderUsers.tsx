import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import { Breadcrumb, Button, Modal } from 'antd'
import { AddSquare, ArrowRight2, Export } from 'iconsax-reactjs'
import { useState } from 'react'

const HeaderOrganizations = ({
  handleDrawer,
}: {
  handleDrawer: (drawer: string) => void
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

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
            onClick={() => setIsModalOpen(true)}
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
      <Modal
        closable
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="p-8 space-y-6 flex flex-col items-center">
          <p className="text-2xl font-semibold">User Added Successfully!</p>
          <p>Thanks for your update.</p>
        </div>
      </Modal>
    </>
  )
}

export default HeaderOrganizations
