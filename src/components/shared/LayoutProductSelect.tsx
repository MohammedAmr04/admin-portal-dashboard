import { useDrawerSider } from '@/services/context/DrawerSiderContext'

const products = ['ASM', 'DW']

const LayoutProductSelect = ({ version }: { version?: string }) => {
  const { selectedTab, changeTab } = useDrawerSider()

  return (
    <div
      className={
        version === 'drawer' ? 'flex gap-2' : 'flex flex-col gap-4 mt-4'
      }
    >
      {/* احتمال تعمل مشكله قدام في ريندر بسبب inedex */}
      {products.map((p, i) => (
        <div
          className="text-text rounded-full w-10 h-10 flex items-center justify-center font-semibold text-xs cursor-pointer"
          style={{
            background:
              selectedTab === p
                ? 'linear-gradient(90deg, #832ee3 0%, #6140ea 100%)'
                : 'transparent',
            border: '1px solid var(--c-border)',
          }}
          onClick={() => changeTab(p)}
          key={i}
        >
          {p}
        </div>
      ))}
    </div>
  )
}

export default LayoutProductSelect
