import { Button } from 'antd'
import { Setting5 } from 'iconsax-reactjs'

const ButtonFilter = ({ onOpenFilters }: { onOpenFilters: () => void }) => {
  return (
    <div className="relative">
      <Button
        className="!bg-background-card !rounded-xl"
        size="large"
        onClick={onOpenFilters}
      >
        <Setting5 size="24" />
      </Button>
    </div>
  )
}

export default ButtonFilter
