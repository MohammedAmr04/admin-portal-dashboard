import { Button } from 'antd'
import type { ReactNode } from 'react'

interface PropsButtonSecondary {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  onClick?: () => void
}

const ButtonSecondary = ({
  children,
  leftIcon,
  rightIcon,
  onClick,
}: PropsButtonSecondary) => {
  return (
    <Button
      size="large"
      className="!bg-linear-to-r hover:!text-text from-[#281543] to-[#0E2248]"
      onClick={onClick}
    >
      <div className="flex gap-1 !text-text items-center justify-center">
        <span>{leftIcon}</span>
        {children}
        <span>{rightIcon}</span>
      </div>
    </Button>
  )
}

export default ButtonSecondary
