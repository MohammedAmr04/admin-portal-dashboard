import { Card } from 'antd'
import { Edit } from 'iconsax-reactjs'

interface InfoItem {
  label: string
  value: string | number | null
}

interface PropsCardInfo {
  title: string
  info: InfoItem[]
  onEdit?: () => void
}

const CardInfo = ({ title, info, onEdit }: PropsCardInfo) => {
  return (
    <section key={title} className="mb-4">
      <h2 className="text-text text-sm font-medium mb-4">{title}</h2>
      <Card className=" !bg-[#12121f] rounded-lg  shadow-md border !border-text/5 relative">
        <div className="grid grid-cols-2">
          <ul className="max-w-md ">
            {info.map((item) => (
              <li key={item.label} className="grid py-3 grid-cols-2">
                <span className="text-text/50 font-semibold  text-sm">
                  {item.label}
                </span>
                <span className="text-text text-sm">{item.value ?? 'N/A'}</span>
              </li>
            ))}
          </ul>
          {onEdit && (
            <Edit
              onClick={onEdit}
              className="!bg-primary/15 cursor-pointer rounded-md p-1 justify-self-end border border-text/5"
              size={28}
              role="button"
            />
          )}
        </div>
      </Card>
    </section>
  )
}

export default CardInfo
