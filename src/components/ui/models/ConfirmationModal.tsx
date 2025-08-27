import React, { type ReactNode } from 'react'
import { Modal, Button } from 'antd'

interface ConfirmationModalProps {
  visible: boolean
  title: string
  icon: ReactNode
  onCancel: () => void
  onConfirm: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onCancel,
  title,
  icon,
  onConfirm,
}) => {
  return (
    <Modal
      key={title}
      open={visible}
      onCancel={onCancel}
      styles={{ footer: { textAlign: 'center' } }}
      classNames={{
        content: '!bg-background-dark rounded-lg',
      }}
      footer={[
        <Button
          key={'cancel'}
          onClick={onCancel}
          className="!bg-text w-29  !text-[#1C122E]"
        >
          Cancel
        </Button>,
        <Button
          key="confirm"
          className="w-29"
          onClick={onConfirm}
          type="primary"
        >
          Yes
        </Button>,
      ]}
      centered
      closable={false}
      width={450}
    >
      <div className="flex flex-col items-center justify-center p-6">
        <div className="bg-success/10 rounded-xl p-3 w-15 h-15 flex items-center justify-center mb-4">
          {icon}
        </div>
        <p className="text-text text-center">{title} </p>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
