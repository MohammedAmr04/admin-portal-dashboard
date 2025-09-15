import ButtonFilter from '@/components/ui/buttons/ButtonFilter'
import { SearchNormal } from 'iconsax-reactjs'
import { Input } from 'antd'

const ContentHeaderSupport = ({
  onOpenFilters,
}: {
  onOpenFilters: () => void
}) => {
  return (
    <div className="flex gap-2 content-header m-0">
      <Input
        placeholder="Search"
        size="large"
        prefix={<SearchNormal size={24} variant="Linear" />}
        className="mb-4 !bg-background-card !text-text"
      />
      <ButtonFilter onOpenFilters={onOpenFilters} />
    </div>
  )
}

export default ContentHeaderSupport
