import ButtonMain from '@/components/ui/ButtonMain'
import ButtonSecondary from '@/components/ui/ButtonSecondary'
import { AddSquare } from 'iconsax-reactjs'

const HeaderOrganizations = () => {
  return (
    <>
      <h1 className="text-text">Organizations</h1>
      <div className="flex pt-9 mb-6 justify-end gap-2.5 items-center">
        <ButtonSecondary>Invite Owner</ButtonSecondary>
        <ButtonMain leftIcon={<AddSquare size="24" variant="Bulk" />}>
          create new organization
        </ButtonMain>
      </div>
    </>
  )
}

export default HeaderOrganizations
