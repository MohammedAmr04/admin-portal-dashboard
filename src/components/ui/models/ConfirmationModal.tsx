import React, { type ReactNode } from 'react'
import { Modal, Button } from 'antd'

function getColor(type: 'SUCCESS' | 'DELETE') {
  switch (type) {
    case 'SUCCESS':
      return 'bg-success/10'

    case 'DELETE':
      return 'bg-danger/20'
  }
}
interface ConfirmationModalProps {
  visible: boolean
  title: string
  icon: ReactNode
  titleDetails?: string
  onCancel: () => void
  onConfirm: () => void
  type?: 'SUCCESS' | 'DELETE'
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onCancel,
  title,
  icon,
  type = 'SUCCESS',
  onConfirm,
  titleDetails,
}) => {
  let color = getColor(type)
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
        <div
          className={`${color} rounded-xl p-3 w-15 h-15 flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <p className={`text-text text-center ${titleDetails} `}>{title} </p>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
