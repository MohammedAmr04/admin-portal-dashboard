import type { IOrganization } from '@/services/types/organization'
import CustomTable from '@/components/ui/table/CustomTable'
import { getOrganizationColumns } from '@/components/ui/table/organizationsColumns'

const data: IOrganization[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  org: ['CBRE', 'Google', 'Amazon', 'Microsoft', 'Tesla'][i % 5],
  owner: [
    'Morgan Bianchi',
    'Sasha Schmidt',
    'Ali Hassan',
    'John Doe',
    'Emma Watson',
  ][i % 5],
  products: [['DWM'], ['CTI'], ['DRP'], ['DWM', 'CTI'], ['CTI', 'DRP']][i % 5],
  status: ['Blocked', 'Approved', 'Pending'][i % 3] as IOrganization['status'],
  date: `Jan ${10 + i}, 2020`,
}))

type Props = {
  setData: React.Dispatch<React.SetStateAction<IOrganization[]>>
  onFinish: boolean
}
export default function TableOrganization({ setData, onFinish }: Props) {
  return (
    <div className="bg-background-dark py-4 rounded-lg">
      <CustomTable<IOrganization>
        data={data}
        columns={getOrganizationColumns()}
        setData={setData}
        onFinish={onFinish}
      />
    </div>
  )
}
