import { Drawer, Steps, Button, Form } from 'antd'
import { useState } from 'react'
import { UserOutlined, BankOutlined, InboxOutlined } from '@ant-design/icons'

import { CloseCircle, Export } from 'iconsax-reactjs'
import ButtonSecondary from '@/components/ui/ButtonSecondary'

interface PropsCreateOrganiationDrawer {
  open: boolean
  onClose: () => void
}
export default function NewUserDrawer({
  open,
  onClose,
}: PropsCreateOrganiationDrawer) {
  const [form] = Form.useForm()

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">Create New User</span>
          <div className="flex gap-1">
            <Export size={24} variant="Linear" />
            <CloseCircle
              onClick={onClose}
              variant="Linear"
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      }
      closeIcon={false}
      open={open}
      styles={{
        content: { paddingInline: '16px' },
        header: { border: 'none', paddingInline: '0px' },
        body: {
          borderRadius: '12px',
          backgroundColor: '#12121f',
          border: 'none',
        },
      }}
      width={543}
      className="!bg-background-dark drawer"
    >
      <div className="px-4"></div>
    </Drawer>
  )
}
