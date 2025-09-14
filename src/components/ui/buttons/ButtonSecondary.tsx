import { Button, type ButtonProps } from 'antd'
import type { ReactNode } from 'react'

interface PropsButtonSecondary extends ButtonProps {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  onClick?: () => void
}

const ButtonSecondary = ({
  children,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: PropsButtonSecondary) => {
  return (
    <Button
      size="large"
      className={`!bg-linear-to-r min-w-32 hover:!text-text from-[#281543] to-[#0E2248] ${className || ''}`}
      {...rest}
    >
      <div className="flex gap-1 !text-text items-center justify-center">
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </div>
    </Button>
  )
}

export default ButtonSecondary
