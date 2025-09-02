import { Select } from 'antd'

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
        root: 'header-select',
        popup: { root: 'header-select-dropdown' },
      }}
      style={{
        height: 40,
      }}
    />
  )
}

export default LayoutLangToggle
