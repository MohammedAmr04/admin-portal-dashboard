import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'
import { useEffect, useState } from 'react'
import './styles.css'
type Props<T extends { id: React.Key }> = {
  setExportedData: React.Dispatch<React.SetStateAction<React.Key[]>>
  onFinish: boolean
  dataSource: T[]
  columns: ColumnsType<T>
}

export default function CustomTable<T extends { id: React.Key }>({
  setExportedData,
  onFinish,
  dataSource,
  columns,
}: Props<T>) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const rowSelection: TableRowSelection<T> = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys)
      setExportedData(keys)
    },
  }

  useEffect(() => {
    if (onFinish) {
      setSelectedRowKeys([])
      setExportedData([])
    }
  }, [onFinish])

  return (
    <div className="bg-background-dark py-4 rounded-lg">
      <Table<T>
        rowKey={'id'}
        rowSelection={rowSelection}
        columns={columns}
        scroll={{ x: true }}
        dataSource={dataSource}
        pagination={{ position: ['bottomCenter'], pageSize: 5 }}
        className="table-organization !bg-transparent overflow-x-scroll lg:overflow-x-auto"
        rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  )
}
