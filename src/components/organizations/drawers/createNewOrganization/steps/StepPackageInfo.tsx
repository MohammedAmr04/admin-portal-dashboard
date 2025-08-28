import { Form, Select, DatePicker } from 'antd'

export default function StepPackageInfo({
  setData,
}: {
  setData: (field: string, value: any) => void
}) {
  return (
    <div className="package">
      <Form.Item label="Package" name="package">
        <Select
          size="large"
          placeholder="Select Package"
          onChange={(value) => setData('package', value)}
          className=" "
        >
          <Select.Option value="basic">Basic</Select.Option>
          <Select.Option value="pro">Pro</Select.Option>
        </Select>
      </Form.Item>
      <div className="grid grid-cols-2 gap-4">
        <Form.Item label="Start Date" name="startDate">
          <DatePicker
            size="large"
            className="  w-full"
            onChange={(date) => setData('startDate', date)}
          />
        </Form.Item>

        <Form.Item label="End Date" name="endDate">
          <DatePicker
            size="large"
            className="  w-full"
            onChange={(date) => setData('endDate', date)}
          />
        </Form.Item>
      </div>
      <Form.Item label="Initial Categories" name="categories">
        <Select
          mode="multiple"
          size="large"
          placeholder="Select Categories"
          className=" "
          onChange={(value) => setData('categories', value)}
        />
      </Form.Item>
      <Form.Item label="Assigned Products" name="products">
        <Select
          mode="multiple"
          size="large"
          placeholder="Select Products"
          className=" "
          onChange={(value) => setData('products', value)}
        />
      </Form.Item>
    </div>
  )
}
