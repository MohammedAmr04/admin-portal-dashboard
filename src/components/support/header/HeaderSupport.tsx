import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'
import { Export } from 'iconsax-reactjs'

const HeaderSupport = () => {
  return (
    <>
      <DynamicBreadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="text-text text-xl font-medium">Support Tickets</h1>
        <div className="my-6">
          <ButtonSecondary
            leftIcon={<Export size={24} variant="Bulk" />}
            // onClick={() => {
            //   if (selectedUsers.length > 0) {
            //     setIsExportModalOpen(true)
            //   } else {
            //     message.warning('No users were selected to be exported!')
            //   }
            // }}
          >
            Export
          </ButtonSecondary>
        </div>
      </div>
    </>
  )
}

export default HeaderSupport
