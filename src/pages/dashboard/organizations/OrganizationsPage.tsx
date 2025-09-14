import { useState } from 'react'
import TableOrganization from '@/components/organizations/tableOrganizations/TableOrganization'
import { AddSquare, Export, TickCircle, Trash } from 'iconsax-reactjs'
import { Button } from 'antd'
import CreateOrganizationDrawer from '@/components/organizations/drawers/createNewOrganization/CreateOrganizationDrawer'
import InviteOwnerDrawer from '@/components/organizations/drawers/inviteOwner/InviteOwnerDrawer'
import SuccessModal from '@/components/ui/models/SuccessModal'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'

const confirmationContent = {
  export: {
    title: 'Are You Sure You Want To Export the selected organizations?',
    icon: <Export size={36} className="!text-success" variant="Linear" />,
  },
  deleteOrg: {
    title: 'Are you sure you want to delete this organization ?',
    icon: <Trash size={36} className="!text-danger" />,
  },
}

const modelsContent = {
  success: {
    title: 'Organizations exported successfully',
    icon: <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />,
  },
  delete: {
    title: 'Organization deleted successfully',
    icon: <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />,
  },
}

const OrganizationsPage = () => {
  const [rowsExported, setRowsExported] = useState<React.Key[]>([])
  const [finishExport, setFinishExport] = useState<boolean>(false)
  const [activeModal, setActiveModal] = useState<
    null | 'invite' | 'org' | 'deleteOrg' | 'export' | 'success' | 'delete'
  >(null)

  const handleExportConfirm = () => {
    setActiveModal('success')
    setRowsExported([])
    setFinishExport(true)
    setTimeout(() => setActiveModal(null), 3000)
  }

  function handleDelete(id: number) {
    console.log(id)
    setActiveModal('deleteOrg')
  }

  return (
    <main className="org">
      <DynamicBreadcrumb />
      <header className="flex flex-col  md:flex-row pt-9 mb-6 md:items-center md:justify-between gap-2.5 ">
        <h1 className="text-text text-xl flex-1 mb-3">Organizations</h1>
        <div className="flex flex-wrap gap-2.5 items-center">
          <ButtonSecondary
            onClick={() => rowsExported.length && setActiveModal('export')}
            leftIcon={<Export size={24} variant="Bulk" />}
          >
            Export
          </ButtonSecondary>
          <ButtonSecondary onClick={() => setActiveModal('invite')}>
            Invite Owner
          </ButtonSecondary>
          {rowsExported.length > 1 && (
            <>
              <ButtonSecondary onClick={() => setActiveModal('deleteOrg')}>
                Delete
              </ButtonSecondary>
            </>
          )}
          <Button
            type="primary"
            size="large"
            onClick={() => setActiveModal('org')}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            <span className="hidden lg:inline">Create</span>New
            <span className="hidden lg:inline">Organization</span>
          </Button>
        </div>
      </header>

      <TableOrganization
        onFinish={finishExport}
        handleDelete={handleDelete}
        setData={setRowsExported}
      />

      <CreateOrganizationDrawer
        open={activeModal === 'org'}
        onClose={() => setActiveModal(null)}
      />
      <InviteOwnerDrawer
        open={activeModal === 'invite'}
        onClose={() => setActiveModal(null)}
      />

      {/* Confirmation Modal */}
      {(activeModal === 'export' || activeModal === 'deleteOrg') && (
        <ConfirmationModal
          title={confirmationContent[activeModal].title}
          visible={true}
          icon={confirmationContent[activeModal].icon}
          onConfirm={
            activeModal === 'export'
              ? handleExportConfirm
              : () => {
                  console.log('Organization deleted')
                  setActiveModal('delete')
                  setTimeout(() => setActiveModal(null), 3000)
                }
          }
          onCancel={() => setActiveModal(null)}
        />
      )}

      {/* Success Modal */}
      {(activeModal === 'success' || activeModal === 'delete') && (
        <SuccessModal
          title={
            activeModal === 'success'
              ? modelsContent.success.title
              : modelsContent.delete.title
          }
          visible={true}
          onClose={() => setActiveModal(null)}
          icon={
            activeModal === 'success'
              ? modelsContent.success.icon
              : modelsContent.delete.icon
          }
        />
      )}
    </main>
  )
}

export default OrganizationsPage
