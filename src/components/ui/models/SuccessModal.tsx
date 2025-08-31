import React, { type ReactNode } from 'react'
import { Modal } from 'antd'

interface SuccessModalProps {
  visible: boolean
  title: string
  icon: ReactNode
  onClose?: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  title,
  icon,
  onClose,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      closable={false}
      width={450}
      classNames={{
        content: '!bg-background-dark',
      }}
      className=" rounded-lg"
    >
      <div className="flex flex-col items-center justify-center py-15 ">
        <div className="bg-[#9147FF]/10 rounded-xl p-4 w-15 h-15 flex items-center justify-center mb-6">
          {icon}
        </div>
        <p className="text-text max-w-sm   w-full !leading-[160%] text-2xl align-middle font-semibold  text-center">
          {title}
        </p>
      </div>
    </Modal>
  )
}

export default SuccessModal
