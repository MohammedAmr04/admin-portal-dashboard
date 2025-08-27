import { useState, type Key } from 'react'
// import NoOrganizationsFound from './../../components/organizations/noOrgainzations/NoOrganizationsFound'
import TableOrganization from './../../components/organizations/tableOrganizations/TableOrganization'
import { AddSquare, DocumentText, Export, TickCircle } from 'iconsax-reactjs'
import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import { Button } from 'antd'
import CreateOrganizationDrawer from '@/components/organizations/drawers/createNewOrganization/CreateOrganizationDrawer'
import InviteOwnerDrawer from '@/components/organizations/drawers/inviteOwner/InviteOwnerDrawer'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'

const OrganizationsPage = () => {
  const [openInvite, setOpenInvite] = useState<boolean>(false)
  const [openOrgDrawer, setOpenOrgDrawer] = useState<boolean>(false)
  const [openExport, setOpenExport] = useState<boolean>(false)
  const [rowsExported, setRowsExported] = useState<Key[]>([])
  const [success, setSuccess] = useState<boolean>(false)

  function handleOpenSuccess() {
    setSuccess(true)
    setTimeout(() => {
      handleCloseSuccess()
    }, 3000)
  }
  function handleCloseSuccess() {
    setSuccess(false)
  }
  function handleOpenExport() {
    if (rowsExported.length > 0) setOpenExport(true)
  }

  function handleCloseExport() {
    console.log(rowsExported)
    setOpenExport(false)
    setRowsExported([])
  }

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
    <main className="org">
      <>
        <header className="flex flex-col  md:flex-row pt-9 mb-6 justify-between gap-2.5 items-center">
          <h1 className="text-text text-xl">Organizations</h1>
          <div className="flex flex-col flex-wrap md:flex-row gap-2.5 items-center">
            {' '}
            <ButtonSecondary
              onClick={handleOpenExport}
              leftIcon={<Export size={24} variant="Bulk" />}
            >
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
        <CreateOrganizationDrawer
          open={openOrgDrawer}
          onClose={handleCloseOrg}
        />
        <InviteOwnerDrawer open={openInvite} onClose={handleCloseInvite} />
      </>
      {/* <HeaderOrganizations /> */}
      <TableOrganization setData={setRowsExported} />
      {/* <NoOrganizationsFound /> */}
      <ConfirmationModal
        title="Are You Sure You Want To Export the selected organizations?"
        visible={openExport}
        icon={
          <DocumentText size={36} className="!text-success" variant="Linear" />
        }
        onConfirm={() => {
          handleOpenSuccess()
          handleCloseExport()
        }}
        onCancel={() => setOpenExport(false)}
      />
      <SuccessModal
        title="organizations exported successfully"
        visible={success}
        icon={
          <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />
        }
      />
    </main>
  )
}

export default OrganizationsPage
