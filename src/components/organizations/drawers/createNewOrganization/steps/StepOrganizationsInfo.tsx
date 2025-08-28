import { Form, Input } from 'antd'

export default function StepOrganizationInfo({
  setData,
}: {
  setData: (field: string, value: any) => void
}) {
  return (
    <>
      <Form.Item
        label="Company Name"
        name="companyName"
        rules={[{ required: true, message: 'Company Name is required' }]}
      >
        <Input
          size="large"
          placeholder="Enter Company Name"
          className=" "
          onChange={(e) => setData('companyName', e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Industry" name="industry">
        <Input
          size="large"
          placeholder="Enter Industry"
          className=" "
          onChange={(e) => setData('industry', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Domain URL"
        name="domainUrl"
        rules={[{ type: 'url', message: 'Invalid URL' }]}
      >
        <Input
          size="large"
          placeholder="ex.domain.com"
          className=" "
          onChange={(e) => setData('domainUrl', e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Domains Number" name="domainsNumber">
        <Input
          size="large"
          placeholder="Number Of Domains"
          className=" "
          onChange={(e) => setData('domainsNumber', e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Employees Size" name="employeesSize">
        <Input
          size="large"
          placeholder="Enter Employees Size"
          className=" "
          onChange={(e) => setData('employeesSize', e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Purpose Of Registration" name="purpose">
        <Input
          size="large"
          placeholder="Enter Purpose Of Registration"
          className=" "
          onChange={(e) => setData('purpose', e.target.value)}
        />
      </Form.Item>
    </>
  )
}
