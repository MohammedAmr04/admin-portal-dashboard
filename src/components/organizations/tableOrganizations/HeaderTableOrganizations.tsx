import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import { SearchNormal } from 'iconsax-reactjs'
import { Input, Dropdown } from 'antd'

const HeaderTableOrganizations = () => {
  return (
    <div className="flex px-5 gap-3">
      <Input
        placeholder="Search"
        size="large"
        prefix={<SearchNormal size={24} variant="Linear" />}
        className="mb-4 !bg-background-card !text-text "
      />
      <Dropdown
        menu={{
          items: [
            { key: '1', label: 'Filter by Status' },
            { key: '2', label: 'Filter by Date' },
          ],
        }}
        trigger={['click']}
      >
        <ButtonFilter />
      </Dropdown>
    </div>
  )
}

export default HeaderTableOrganizations
