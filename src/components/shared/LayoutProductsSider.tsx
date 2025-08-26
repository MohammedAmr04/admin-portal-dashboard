import Sider from 'antd/es/layout/Sider'
import LayoutProductSelect from './LayoutProductSelect'

const LayoutProductsSider = () => {
  return (
    <Sider
      width={74}
      className="flex justify-center space-y-4"
      style={{ backgroundColor: 'var(--c-background-dark)' }}
    >
      <img src="./dark-atlas.png" className="mt-4" />
      <LayoutProductSelect />
    </Sider>
  )
}

export default LayoutProductsSider
