import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import { Button } from 'antd'
import { AddSquare, Export } from 'iconsax-reactjs'
import CreateOrganizationDrawer from '../drawers/createNewOrganization/CreateOrganizationDrawer'
import { useState } from 'react'
import InviteOwnerDrawer from '../drawers/inviteOwner/InviteOwnerDrawer'

const HeaderOrganizations = () => {
  const [openInvite, setOpenInvite] = useState<boolean>(false)
  const [openOrgDrawer, setOpenOrgDrawer] = useState<boolean>(false)

  function handleOpenOrg() {
    setOpenOrgDrawer(true)
  }
  function handleCloseOrg() {
    setOpenOrgDrawer(false)
  }
  function handleOpenInvite() {
    setOpenInvite(true)
  }
  function handleCloseInvite() {
    setOpenInvite(false)
  }
  return (
    <>
      <header className="flex pt-9 mb-6 justify-between gap-2.5 items-center">
        <h1 className="text-text text-xl">Organizations</h1>
        <div className="flex gap-2.5 items-center">
          {' '}
          <ButtonSecondary leftIcon={<Export size={24} variant="Bulk" />}>
            Export
          </ButtonSecondary>
          <ButtonSecondary onClick={handleOpenInvite}>
            Invite Owner
          </ButtonSecondary>
          <Button
            type="primary"
            size="large"
            onClick={handleOpenOrg}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            create new organization
          </Button>
        </div>
      </header>
      <CreateOrganizationDrawer open={openOrgDrawer} onClose={handleCloseOrg} />
      <InviteOwnerDrawer open={openInvite} onClose={handleCloseInvite} />
    </>
  )
}

export default HeaderOrganizations
