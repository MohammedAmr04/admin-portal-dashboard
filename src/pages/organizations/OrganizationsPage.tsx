import { use, useState, type Key } from 'react'
import TableOrganization from '@/components/organizations/tableOrganizations/TableOrganization'
import { AddSquare, DocumentText, Export, TickCircle } from 'iconsax-reactjs'
import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import { Button } from 'antd'
import CreateOrganizationDrawer from '@/components/organizations/drawers/createNewOrganization/CreateOrganizationDrawer'
import InviteOwnerDrawer from '@/components/organizations/drawers/inviteOwner/InviteOwnerDrawer'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'

const OrganizationsPage = () => {
  const [rowsExported, setRowsExported] = useState<Key[]>([])
  const [finishExport, setFinishExport] = useState<boolean>(false)
  const [modals, setModals] = useState({
    invite: false,
    org: false,
    export: false,
    success: false,
  })

  const toggleModal = (key: keyof typeof modals, value: boolean) => {
    setModals((prev) => ({ ...prev, [key]: value }))
  }

  const handleExportConfirm = () => {
    toggleModal('success', true)
    toggleModal('export', false)
    setRowsExported([])
    setFinishExport(true)
    setTimeout(() => toggleModal('success', false), 3000)
  }

  return (
    <main className="org">
      <header className="flex flex-col md:flex-row pt-9 mb-6 justify-between gap-2.5 items-center">
        <h1 className="text-text text-xl">Organizations</h1>
        <div className="flex flex-col flex-wrap md:flex-row gap-2.5 items-center">
          <ButtonSecondary
            onClick={() => rowsExported.length && toggleModal('export', true)}
            leftIcon={<Export size={24} variant="Bulk" />}
          >
            Export
          </ButtonSecondary>
          <ButtonSecondary onClick={() => toggleModal('invite', true)}>
            Invite Owner
          </ButtonSecondary>
          <Button
            type="primary"
            size="large"
            onClick={() => toggleModal('org', true)}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            create new organization
          </Button>
        </div>
      </header>

      <TableOrganization onFinish={finishExport} setData={setRowsExported} />
      <CreateOrganizationDrawer
        open={modals.org}
        onClose={() => toggleModal('org', false)}
      />
      <InviteOwnerDrawer
        open={modals.invite}
        onClose={() => toggleModal('invite', false)}
      />
      <ConfirmationModal
        title="Are You Sure You Want To Export the selected organizations?"
        visible={modals.export}
        icon={
          <DocumentText size={36} className="!text-success" variant="Linear" />
        }
        onConfirm={handleExportConfirm}
        onCancel={() => toggleModal('export', false)}
      />

      <SuccessModal
        title="organizations exported successfully"
        visible={modals.success}
        icon={
          <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />
        }
      />
    </main>
  )
}

export default OrganizationsPage
