import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import { SearchNormal } from 'iconsax-reactjs'
import { Input, Dropdown } from 'antd'
const items = [
  {
    key: '1',
    label: 'Filter by Status',
    children: [
      {
        key: '1-1',
        label: 'Active',
      },
      {
        key: '1-2',
        label: 'Inactive',
      },
    ],
  },
  {
    key: '2',
    label: 'Filter by Date',
    children: [
      {
        key: '2-1',
        label: 'Newest',
      },
      {
        key: '2-2',
        label: 'Oldest',
      },
    ],
  },
]
const HeaderTableOrganizations = () => {
  const handleMenuClick = ({ key }: { key: string }) => {
    console.log('Selected filter:', key)
  }
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
          items,
          onClick: handleMenuClick,
          triggerSubMenuAction: 'click',
        }}
        trigger={['click']}
      >
        <span>
          <ButtonFilter />
        </span>
      </Dropdown>
    </div>
  )
}

export default HeaderTableOrganizations
