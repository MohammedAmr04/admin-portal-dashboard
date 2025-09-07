import { Segmented } from 'antd'
import { Moon, Sun1 } from 'iconsax-reactjs'
import { useDarkLightContext } from '@/services/context'

const LayoutThemeToggle = () => {
  const { theme, setTheme } = useDarkLightContext()

  return (
    <Segmented
      options={[
        {
          value: 'light',
          icon: (
            <div className="flex items-center h-[40px]">
              <Sun1 variant="Bulk" size={16} />
            </div>
          ),
        },
        {
          value: 'dark',
          icon: (
            <div className="flex items-center h-[40px]">
              <Moon variant="Bulk" size={16} />
            </div>
          ),
        },
      ]}
      className="flex items-center"
      value={theme}
      onChange={(val) => setTheme(val as 'light' | 'dark')}
    />
  )
}

export default LayoutThemeToggle
