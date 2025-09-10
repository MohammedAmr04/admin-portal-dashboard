import { useState } from 'react'
import TableOrganization from '@/components/organizations/tableOrganizations/TableOrganization'
import { AddSquare, DocumentText, Export, TickCircle } from 'iconsax-reactjs'
import { Button } from 'antd'
import CreateOrganizationDrawer from '@/components/organizations/drawers/createNewOrganization/CreateOrganizationDrawer'
import InviteOwnerDrawer from '@/components/organizations/drawers/inviteOwner/InviteOwnerDrawer'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'
import type { IOrganization } from '@/services/types/organization'

const OrganizationsPage = () => {
  const [rowsExported, setRowsExported] = useState<IOrganization[]>([])
  const [finishExport, setFinishExport] = useState<boolean>(false)
  const [modals, setModals] = useState({
    invite: false,
    org: false,
    export: false,
    success: false,
  })

  const toggleModal = (key: keyof typeof modals, value: boolean) => {
    console.log(modals)
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
      <DynamicBreadcrumb />
      <header className="flex flex-col  md:flex-row pt-9 mb-6 md:items-center md:justify-between gap-2.5 ">
        <h1 className="text-text text-xl flex-1 mb-3">Organizations</h1>
        <div className="flex flex-wrap gap-2.5 items-center">
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
            <span className="hidden lg:inline">Create</span>New
            <span className="hidden lg:inline">Organization</span>
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
