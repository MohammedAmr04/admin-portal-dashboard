import { Button } from 'antd'
import { Setting5 } from 'iconsax-reactjs'

const ButtonFilter = () => {
  return (
    <Button className="!bg-background-card flex gap-7" size="large">
      <div className="flex gap-2">
        <Setting5 size="24" />
      </div>
    </Button>
  )
}

export default ButtonFilter
