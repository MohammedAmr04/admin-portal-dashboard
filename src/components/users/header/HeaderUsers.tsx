import ButtonSecondary from '@/components/ui/ButtonSecondary'
import { Breadcrumb, Button } from 'antd'
import { AddSquare, ArrowRight2, Export } from 'iconsax-reactjs'

const HeaderOrganizations = ({
  handleDrawer,
}: {
  handleDrawer: (drawer: string) => void
}) => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <a href="./dashboard">Dashboard</a>,
          },
          {
            title: 'Users',
          },
        ]}
        separator={<ArrowRight2 size={16} />}
      />
      <div className="flex justify-between items-center">
        <h1 className="text-text text-xl font-medium">Users</h1>
        <div className="flex my-6 justify-end gap-2.5 items-center">
          <ButtonSecondary leftIcon={<Export size={24} variant="Bulk" />}>
            Export<span className="hidden lg:inline">Users</span>
          </ButtonSecondary>
          <Button
            type="primary"
            size="large"
            onClick={() => handleDrawer('newUser')}
            icon={<AddSquare size="24" variant="Bulk" />}
          >
            <span className="hidden lg:inline">Create</span>New
            <span className="hidden lg:inline">User</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default HeaderOrganizations
