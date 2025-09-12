import { Edit } from 'iconsax-reactjs'
import React, { useState } from 'react'
import DrawerEditPackages from './drawer/DrawerEditPackages'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg mb-3 border border-text/5 bg-[#12121F] p-3 pb-2">
      {children}
    </div>
  )
}
const OrganizationProducts = () => {
  const [editDrawer, setEditDrawer] = useState<boolean>(false)
  function handleEditDrawer(action: 'open' | 'close') {
    switch (action) {
      case 'open':
        setEditDrawer(true)
        break

      case 'close':
        setEditDrawer(false)
        break
    }
  }
  return (
    <>
      <Card>
        <header className="flex justify-between items-center">
          <h2>Current Package</h2>{' '}
          <Edit
            className="!bg-primary/15 cursor-pointer rounded-md p-1  border border-text/5"
            size={28}
            role="button"
            onClick={() => handleEditDrawer('open')}
          />
        </header>{' '}
        <p>
          standard <br />{' '}
          <span className="text-[#ADB7BE]">
            Secure your business and assets with a comprehensive security plan,
            advanced protection, and expert guidance.
          </span>
        </p>
        <p>
          Start date <span className="text-[#ADB7BE]">12/7/2024</span>
          <br /> End date <span className="text-[#ADB7BE]">12/7/2024</span>
        </p>
      </Card>
      <Card>
        <header className="flex justify-between items-center">
          <h2>Assigned products</h2>{' '}
          <Edit
            className="!bg-primary/15 cursor-pointer rounded-md p-1  border border-text/5"
            size={28}
            role="button"
            onClick={() => handleEditDrawer('open')}
          />
        </header>
        <ul>
          <li className="py-2.5 flex gap-2.5 items-center">
            <img src="/icons/check.svg" alt="check icon" />
            <span>Product A</span>
          </li>
          <li className="py-2.5 flex gap-2.5 items-center">
            <img src="/icons/check.svg" alt="check icon" />
            <span>Product A</span>
          </li>
          <li className="py-2.5 flex gap-2.5 items-center">
            <img src="/icons/check.svg" alt="check icon" />
            <span>Product A</span>
          </li>
          <li className="py-2.5 flex gap-2.5 items-center">
            <img src="/icons/check.svg" alt="check icon" />
            <span>Product A</span>
          </li>
        </ul>
      </Card>
      <DrawerEditPackages
        open={editDrawer}
        onClose={() => handleEditDrawer('close')}
      />
    </>
  )
}

export default OrganizationProducts
