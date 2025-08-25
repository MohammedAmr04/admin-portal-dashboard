import HeaderOrganizations from './../../components/organizations/header/HeaderOrganizations'
// import NoOrganizationsFound from './../../components/organizations/noOrgainzations/NoOrganizationsFound'
import TableOrganization from './../../components/organizations/tableOrganizations/TableOrganization'

const OrganizationsPage = () => {
  return (
    <main className="org">
      <HeaderOrganizations />
      <TableOrganization />
      {/* <NoOrganizationsFound /> */}
    </main>
  )
}

export default OrganizationsPage
