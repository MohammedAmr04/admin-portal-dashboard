import { Select } from 'antd'
import { ArrowDown2 } from 'iconsax-reactjs'

const LayoutLangToggle = () => {
  return (
    <Select
      options={[
        {
          value: 'en',
          label: <img className="rounded-full w-5" src="/us-flag.png" />,
        },
        {
          value: 'ar',
          label: <img className="rounded-full w-5" src="/sa-flag.png" />,
        },
      ]}
      defaultValue="en"
      classNames={{
        root: 'header-select flex !gap-2',
        popup: { root: 'header-select-dropdown' },
      }}
      style={{
        height: 40,
        display: 'flex',
        gap: '8px',
      }}
      suffixIcon={<ArrowDown2 size={16} />}
    />
  )
}

export default LayoutLangToggle
