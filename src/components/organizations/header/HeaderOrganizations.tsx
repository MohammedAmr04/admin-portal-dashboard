import ButtonSecondary from '@/components/ui/ButtonSecondary'
import { Button } from 'antd'
import { AddSquare, Export } from 'iconsax-reactjs'

const HeaderOrganizations = () => {
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
          icon={<AddSquare size="24" variant="Bulk" />}
        >
          create new organization
        </Button>
      </div>
    </>
  )
}

export default HeaderOrganizations
