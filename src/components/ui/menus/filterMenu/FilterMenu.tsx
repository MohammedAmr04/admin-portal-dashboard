import { Checkbox, Input, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useState } from 'react'
import './filtermenu.css'
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'
type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: 'status',
    label: 'Status',

    children: [
      {
        key: 'status-1',
        label: (
          <div>
            <Checkbox className="!px-2">Blocked</Checkbox>
          </div>
        ),
      },
      {
        key: 'status-2',
        label: (
          <>
            <Checkbox className="!px-2">Approved</Checkbox>
          </>
        ),
      },
      {
        key: 'status-3',
        label: (
          <>
            <Checkbox className="!px-2"> Pending</Checkbox>
          </>
        ),
      },
    ],
  },
  {
    key: 'products',
    label: 'Products',
    children: [
      {
        key: 'products-1',
        label: (
          <>
            <Checkbox className="!px-2">ASM</Checkbox>
          </>
        ),
      },
      {
        key: 'products-2',
        label: (
          <>
            <Checkbox className="!px-2">DRP</Checkbox>
          </>
        ),
      },
      {
        key: 'products-3',
        label: (
          <>
            <Checkbox className="!px-2">CTI</Checkbox>
          </>
        ),
      },
      {
        key: 'products-4',
        label: (
          <>
            <Checkbox className="!px-2">DWM</Checkbox>
          </>
        ),
      },
    ],
  },
  {
    key: 'creation-date',
    label: 'Creation Date',
    children: [
      { key: 'creation-1', label: 'Newest' },
      { key: 'creation-2', label: 'Oldest' },
      {
        key: 'apply-filter',
        label: (
          <div className="bg-primary text-text py-1 text-center px-2">
            Apply Filter
          </div>
        ),
      },
    ],
  },
  {
    key: 'users',
    label: 'Number Of Users',
    children: [
      {
        key: 'users-1',
        label: (
          <Input
            type="text"
            placeholder="From"
            className=" !px-2 custom-input !py-1 !h-fit !border-none !rounded-sm !text-xs text-text bg-background-dark text-center"
          />
        ),
      },
      {
        key: 'users-2',
        label: (
          <Input
            type="text"
            placeholder="To"
            className=" !px-2 custom-input !py-1 !h-fit !border-none !rounded-sm !text-xs text-text bg-background-dark text-center"
          />
        ),
      },
      {
        key: 'apply-filter',
        label: (
          <div className="bg-primary px-2 py-1 text-text text-center">
            Apply Filter
          </div>
        ),
      },
    ],
  },
]

const FilterMenu = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys)
  }

  return (
    <Menu
      mode="inline"
      expandIcon={({ isOpen }) =>
        !isOpen ? <ArrowDown2 size="24" /> : <ArrowUp2 size="24" />
      }
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
      className="!bg-[#12121F] filter-menu !w-50 rounded-lg filter-menu  !p-2 border !border-text/5 !text-text"
    />
  )
}

export default FilterMenu
