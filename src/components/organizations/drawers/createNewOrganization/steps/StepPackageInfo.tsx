import { Form, Select, DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'

interface OrganizationData {
  package?: string
  startDate?: Dayjs | null
  endDate?: Dayjs | null
  categories?: string[]
  products?: string[]
}

interface StepPackageInfoProps {
  setData: <K extends keyof OrganizationData>(
    field: K,
    value: OrganizationData[K]
  ) => void
}

export default function StepPackageInfo({ setData }: StepPackageInfoProps) {
  return (
    <div className="package">
      {/* Package */}
      <Form.Item
        label="Package"
        name="package"
        rules={[{ required: true, message: 'Package is required' }]}
      >
        <Select
          size="large"
          placeholder="Select Package"
          onChange={(value: string) => setData('package', value)}
        >
          <Select.Option value="basic">Basic</Select.Option>
          <Select.Option value="pro">Pro</Select.Option>
        </Select>
      </Form.Item>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true, message: 'Start Date is required' }]}
        >
          <DatePicker
            size="large"
            className="w-full"
            onChange={(date: Dayjs | null) => setData('startDate', date)}
          />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="endDate"
          dependencies={['startDate']}
          rules={[
            { required: true, message: 'End Date is required' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                const start = getFieldValue('startDate')
                if (!value || !start || value.isAfter(start)) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('End Date must be after Start Date')
                )
              },
            }),
          ]}
        >
          <DatePicker
            size="large"
            className="w-full"
            onChange={(date: Dayjs | null) => setData('endDate', date)}
          />
        </Form.Item>
      </div>

      {/* Categories */}
      <Form.Item
        label="Initial Categories"
        name="categories"
        // rules={[
        //   { required: true, message: 'Please select at least one category' },
        // ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Select Categories"
          onChange={(value: string[]) => setData('categories', value)}
        />
      </Form.Item>

      {/* Products */}
      <Form.Item
        label="Assigned Products"
        name="products"
        // rules={[
        //   { required: true, message: 'Please select at least one product' },
        // ]}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Select Products"
          onChange={(value: string[]) => setData('products', value)}
        />
      </Form.Item>
    </div>
  )
}
