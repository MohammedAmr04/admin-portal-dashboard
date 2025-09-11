import React, { type ReactNode } from 'react'
import { Modal } from 'antd'

interface SuccessModalProps {
  visible: boolean
  title: string
  icon: ReactNode
  type?: 'PRIMARY' | 'WARNING'
  description?: string
  onClose?: () => void
}

function getColor(type: 'PRIMARY' | 'WARNING') {
  switch (type) {
    case 'PRIMARY':
      return 'bg-[#9147FF]/10'

    case 'WARNING':
      return 'bg-warning/20'
  }
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  title,
  icon,
  description,
  type = 'PRIMARY',
  onClose,
}) => {
  let color = getColor(type)
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      closable={true}
      width={450}
      classNames={{
        content: '!bg-background-dark ',
      }}
      className=" rounded-lg"
    >
      <div className="flex flex-col items-center justify-center  ">
        <div
          className={`${color} rounded-xl p-4 w-15 h-15 flex items-center justify-center mb-6`}
        >
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
