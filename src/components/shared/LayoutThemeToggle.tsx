import { Segmented } from 'antd'
import { Moon, Sun1 } from 'iconsax-reactjs'

const LayoutThemeToggle = () => {
  return (
    <Segmented
      options={[
        {
          value: 'Light',
          icon: (
            <div className="flex items-center h-[40px]">
              <Sun1 variant="Bulk" size={16} />
            </div>
          ),
        },
        {
          value: 'Dark',
          icon: (
            <div className="flex items-center h-[40px]">
              <Moon variant="Bulk" size={16} />
            </div>
          ),
        },
      ]}
      className="flex items-center"
      defaultValue="Dark"
    />
  )
}

export default LayoutThemeToggle
