import { Button, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useState } from 'react'
import './filtermenu.css'
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'

type MenuItem = Required<MenuProps>['items'][number]

const FilterMenu = ({ filters }: { filters: MenuItem[] }) => {
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys)
  }

  return (
    <div className="space-y-4 filters">
      <Button className="w-full !bg-primary !hover:text-white" size="small">
        Apply Filters
      </Button>
      <Menu
        mode="inline"
        expandIcon={({ isOpen }) =>
          !isOpen ? <ArrowDown2 size="24" /> : <ArrowUp2 size="24" />
        }
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={filters}
        className="!bg-[#12121F] filter-menu !w-50 rounded-lg !p-2 border !border-text/5 !text-text h-min"
      />
    </div>
  )
}

export default FilterMenu
