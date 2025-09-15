import React, { type ReactNode } from 'react'
import { Modal, Button } from 'antd'
import { Export, Trash } from 'iconsax-reactjs'

function getColor(type: 'SUCCESS' | 'EXPORT' | 'DELETE'): {
  color: string
  icon: React.ReactNode
} {
  switch (type) {
    case 'SUCCESS':
      return {
        color: 'bg-success/10',
        icon: <Export size={36} className="!text-success" variant="Linear" />,
      }
    case 'EXPORT':
      return {
        color: 'bg-primary/10',
        icon: <Export size={36} className="!text-primary" variant="Linear" />,
      }
    case 'DELETE':
      return {
        color: 'bg-danger/20',
        icon: <Trash size={36} className="!text-danger" />,
      }
    default:
      return {
        color: '',
        icon: null,
      }
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
  type = 'SUCCESS',
  onConfirm,
  titleDetails,
}) => {
  const { color, icon } = getColor(type)

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
