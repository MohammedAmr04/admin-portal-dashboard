import Sider from 'antd/es/layout/Sider'
import LayoutProductSelect from '../shared/LayoutProductSelect'

const LayoutProductsSider = () => {
  return (
    <Sider
      width={74}
      className="flex justify-center space-y-4"
      style={{ backgroundColor: 'var(--c-background-dark)' }}
    >
      <img src="/dark-atlas.png" className="mt-4" alt="Atlas Logo" />
      <LayoutProductSelect />
    </Sider>
  )
}

export default LayoutProductsSider
