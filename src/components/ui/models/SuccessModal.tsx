import React, { type ReactNode } from 'react'
import { Modal } from 'antd'

interface SuccessModalProps {
  visible: boolean
  title: string
  icon: ReactNode
  description?: string
  onClose?: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  title,
  icon,
  description,
  onClose,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      closable={true}
      width={450}
      classNames={{
        content: '!bg-background-dark !p-9',
      }}
      className=" rounded-lg"
    >
      <div className="flex flex-col items-center justify-center  ">
        <div className="bg-[#9147FF]/10 rounded-xl p-4 w-15 h-15 flex items-center justify-center mb-6">
          {icon}
        </div>
        <p className="text-text    w-full !leading-[160%] text-2xl align-middle font-semibold  text-center">
          {title}
        </p>
        <p className="text-text/80 max-w-sm mt-6   w-full !leading-[150%] text-base align-middle font-normal  text-center">
          {description}
        </p>
      </div>
    </Modal>
  )
}

export default SuccessModal
