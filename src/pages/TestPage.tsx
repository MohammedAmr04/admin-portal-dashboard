import CustomTable from '@/components/ui/table/CustomTable'
import { getOrganizationColumns } from '@/components/ui/table/organizationsColumns'
import type { IOrganization } from '@/services/types/organization'
import { useState } from 'react'
const dataO: IOrganization[] = Array.from({ length: 100 }, (_, i) => ({
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

const TestPage = () => {
  const [data, setData] = useState<IOrganization[]>([])
  console.log(data)
  return (
    <>
      <h1>TestPage</h1>
      <CustomTable<IOrganization>
        data={dataO}
        columns={getOrganizationColumns()}
        onFinish={false}
        setData={setData}
      />
    </>
  )
}

export default TestPage
