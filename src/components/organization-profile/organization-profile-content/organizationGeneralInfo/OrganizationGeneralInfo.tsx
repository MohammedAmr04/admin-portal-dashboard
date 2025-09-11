import CardInfo from './cardInfo/CardInfo'

const OrganizationGeneralInfo = () => {
  return (
    <div>
      <CardInfo
        title="Organization Info"
        info={[
          { label: 'Industry', value: 'N/A' },
          { label: 'Domains URL', value: 'ex.domain.com' },
          { label: 'Domains Number', value: 6742 },
          { label: 'Employees Size', value: 63384 },
          { label: 'Creation Date', value: '11 / 30 / 2024' },
        ]}
      />
      <CardInfo
        title="Owner Info"
        info={[
          { label: 'Owner’s Full Name', value: 'John Doe' },
          { label: 'Owner’s Email', value: 'john@example.com' },
          { label: 'Owner’s Phone Number', value: '+123456789' },
          { label: 'Creation Date', value: '11 / 30 / 2024' },
          { label: 'Last Login', value: '09 / 07 / 2025' },
        ]}
      />
    </div>
  )
}

export default OrganizationGeneralInfo
