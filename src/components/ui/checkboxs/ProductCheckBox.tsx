import { Checkbox } from 'antd'
import './styles.css'
const ProductCheckBox = ({
  value,
  label,
}: {
  value: string
  label: string | React.ReactNode
}) => {
  return (
    <Checkbox className="product-checkbox" value={value}>
      {label}
    </Checkbox>
  )
}

export default ProductCheckBox
