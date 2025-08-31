import { Form, Input } from 'antd'

interface OrganizationData {
  companyName?: string
  industry?: string
  domainUrl?: string
  domainsNumber?: number
  employeesSize?: string
  purpose?: string
}

interface StepOrganizationInfoProps {
  setData: <K extends keyof OrganizationData>(
    field: K,
    value: OrganizationData[K]
  ) => void
}

export default function StepOrganizationInfo({
  setData,
}: StepOrganizationInfoProps) {
  return (
    <>
      {/* Company Name */}
      <Form.Item
        label="Company Name"
        name="companyName"
        rules={[
          { required: true, message: 'Company Name is required' },
          { min: 2, message: 'Company Name must be at least 2 characters' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Company Name"
          onChange={(e) => setData('companyName', e.target.value)}
        />
      </Form.Item>

      {/* Industry */}
      <Form.Item
        label="Industry"
        name="industry"
        rules={[
          { required: true, message: 'Industry is required' },
          { min: 2, message: 'Industry must be at least 2 characters' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Industry"
          onChange={(e) => setData('industry', e.target.value)}
        />
      </Form.Item>

      {/* Domain URL */}
      <Form.Item
        label="Domain URL"
        name="domainUrl"
        rules={[
          { required: true, message: 'Domain URL is required' },
          { type: 'url', message: 'Please enter a valid URL' },
        ]}
      >
        <Input
          size="large"
          placeholder="ex.domain.com"
          onChange={(e) => setData('domainUrl', e.target.value)}
        />
      </Form.Item>

      {/* Domains Number */}
      <Form.Item
        label="Domains Number"
        name="domainsNumber"
        rules={[
          { required: true, message: 'Number of Domains is required' },
          {
            type: 'number',
            min: 1,
            message: 'Domains Number must be greater than 0',
            transform: (value) => Number(value),
          },
        ]}
      >
        <Input
          size="large"
          placeholder="Number Of Domains"
          type="number"
          onChange={(e) => setData('domainsNumber', Number(e.target.value))}
        />
      </Form.Item>

      {/* Employees Size */}
      <Form.Item
        label="Employees Size"
        name="employeesSize"
        rules={[
          { required: true, message: 'Employees Size is required' },
          { min: 1, message: 'Employees Size must be at least 1 character' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Employees Size"
          onChange={(e) => setData('employeesSize', e.target.value)}
        />
      </Form.Item>

      {/* Purpose Of Registration */}
      <Form.Item
        label="Purpose Of Registration"
        name="purpose"
        rules={[
          { required: true, message: 'Purpose is required' },
          { min: 5, message: 'Purpose must be at least 5 characters' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Purpose Of Registration"
          onChange={(e) => setData('purpose', e.target.value)}
        />
      </Form.Item>
    </>
  )
}
