import { Button } from 'antd'
import type { ReactNode } from 'react'

interface PropsButtonMain {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

const ButtonMain = ({ children, leftIcon, rightIcon }: PropsButtonMain) => {
  return (
    <Button
      size="large"
      className="!bg-linear-to-br hover:!text-text from-primary to-[#086EFC]"
    >
      <div className="flex gap-1 items-center justify-center">
        <span>{leftIcon}</span>
        {children}
        <span>{rightIcon}</span>
      </div>
    </Button>
  )
}

export default ButtonMain
