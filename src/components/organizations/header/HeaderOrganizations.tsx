import ButtonSecondary from '@/components/ui/ButtonSecondary'
import { Button } from 'antd'
import { AddSquare, Export } from 'iconsax-reactjs'
import CreateOrganizationDrawer from '../drawers/CreateOrganizationDrawer'
import { useState } from 'react'

const HeaderOrganizations = () => {
  const [open, setOpen] = useState<boolean>(false)
  function handleCreateNewOrganization() {
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }
  return (
    <>
      <h1 className="text-text">Organizations</h1>
      <div className="flex pt-9 mb-6 justify-end gap-2.5 items-center">
        <ButtonSecondary leftIcon={<Export size={24} variant="Bulk" />}>
          Export
        </ButtonSecondary>
        <ButtonSecondary>Invite Owner</ButtonSecondary>
        <Button
          type="primary"
          size="large"
          onClick={handleCreateNewOrganization}
          icon={<AddSquare size="24" variant="Bulk" />}
        >
          create new organization
        </Button>
      </div>
      <CreateOrganizationDrawer open={open} onClose={handleClose} />
    </>
  )
}

export default HeaderOrganizations
