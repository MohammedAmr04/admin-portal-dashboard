import { Select } from 'antd'
import { ArrowDown2 } from 'iconsax-reactjs'

const LayoutProductDropdown = () => {
  return (
    <Select
      options={[
        { value: 'Paymob', label: <span>Paymob</span> },
        { value: 'Fawry', label: <span>Fawry</span> },
      ]}
      defaultValue="Paymob"
      size="large"
      classNames={{
        root: 'header-select',
        popup: { root: 'header-select-dropdown' },
      }}
      suffixIcon={<ArrowDown2 size={16} />}
    />
  )
}

export default LayoutProductDropdown
