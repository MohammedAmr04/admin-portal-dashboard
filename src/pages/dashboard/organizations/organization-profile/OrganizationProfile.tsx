import HeaderOrganizationProfile from '@/components/organization-profile/headerOrganizationProfile/HeaderOrganizationProfile'
import OrganizationGeneralInfo from '@/components/organization-profile/organization-profile-content/organizationGeneralInfo/OrganizationGeneralInfo'
import OrganizationProducts from '@/components/organization-profile/organization-profile-content/organizationProducts/OrganizationProducts'
import EditUserDrawer from '@/components/users/drawers/EditUserDrawer'
import NewUserDrawer from '@/components/users/drawers/NewUserDrawer'
import TableUsers from '@/components/users/tableUsers/TableUsers'
import { Tabs, type TabsProps } from 'antd'
import { useState } from 'react'
import { useParams } from 'react-router'

const OrganizationProfile = () => {
  const { name } = useParams()
  const [drawer, setDrawer] = useState('')
  const [userID, setUserID] = useState<number | undefined>(undefined)
  const [_, setSelectedUsers] = useState<number[]>([])

  const handleDrawer = (drawer: string) => {
    setDrawer(drawer)
  }

  const handleUser = (userID: number) => {
    setUserID(userID)
  }

  const items: TabsProps['items'] = [
    {
      key: 'general info',
      label: (
        <div className="text-[##ADB7BE] font-medium text-base leading-[140%]">
          General Info
        </div>
      ),
      children: <OrganizationGeneralInfo />,
    },
    {
      key: 'users',
      label: (
        <div className="text-[##ADB7BE] font-medium text-base leading-[140%]">
          Users
        </div>
      ),
      children: (
        <>
          {' '}
          <TableUsers
            isOrg={true}
            handleDrawer={handleDrawer}
            handleUser={handleUser}
            onUserSelect={(id) => setSelectedUsers((prev) => [...prev, id])}
          />
          <NewUserDrawer
            open={drawer === 'newUser'}
            onClose={() => setDrawer('')}
          />
          <EditUserDrawer
            open={drawer === 'editUser'}
            onClose={() => setDrawer('')}
            userID={userID}
          />
        </>
      ),
    },
    {
      key: 'products',
      label: (
        <div className="text-[##ADB7BE] font-medium text-base leading-[140%]">
          Products
        </div>
      ),
      children: <OrganizationProducts />,
    },
  ]

  return (
    <>
      <HeaderOrganizationProfile title={name || ''} />
      <section className="p-4 rounded-xl border border-text/5 bg-background-dark">
        <Tabs
          defaultActiveKey="general info"
          className="border-none"
          items={items}
        />
      </section>
    </>
  )
}

export default OrganizationProfile
