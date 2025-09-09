import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'
import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'
import { Button } from 'antd'
import { AddSquare, Export } from 'iconsax-reactjs'

const HeaderOrganizationProfile = ({
  title,
  open,
}: {
  title: string
  open: boolean
}) => {
  return (
    <header className="pb-6">
      <DynamicBreadcrumb />
      <h1 className="font-medium mt-7 py-2.5 flex items-center justify-between text-xl !leading-[140%] text-text">
        {title}
        {open && (
          <div className="flex gap-2.5 items-center">
            <ButtonSecondary
              onClick={() => console.log('test')}
              leftIcon={<Export size={24} variant="Bulk" />}
            >
              Export Users
            </ButtonSecondary>
            <Button
              type="primary"
              size="large"
              onClick={() => console.log('test')}
              icon={<AddSquare size="24" variant="Bulk" />}
            >
              <span className="hidden lg:inline">Add New Users</span>
              <span className="lg:hidden">New User</span>
            </Button>
          </div>
        )}
      </h1>
    </header>
  )
}

export default HeaderOrganizationProfile
