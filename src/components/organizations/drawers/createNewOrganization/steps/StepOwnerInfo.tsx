import { Form, Input, Select } from 'antd'

interface OrganizationData {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  country?: string
  password?: string
  confirmPassword?: string
}

interface StepOwnerInfoProps {
  setData: <K extends keyof OrganizationData>(
    field: K,
    value: OrganizationData[K]
  ) => void
}

export default function StepOwnerInfo({ setData }: StepOwnerInfoProps) {
  return (
    <>
      {/* First Name */}
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          { required: true, message: 'First Name is required' },
          { min: 2, message: 'First Name must be at least 2 characters' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter First Name"
          onChange={(e) => setData('firstName', e.target.value)}
        />
      </Form.Item>

      {/* Last Name */}
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          { required: true, message: 'Last Name is required' },
          { min: 2, message: 'Last Name must be at least 2 characters' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Last Name"
          onChange={(e) => setData('lastName', e.target.value)}
        />
      </Form.Item>

      {/* Email */}
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Your Email"
          onChange={(e) => setData('email', e.target.value)}
        />
      </Form.Item>

      {/* Phone Number */}
      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[
          { required: true, message: 'Phone is required' },
          {
            pattern: /^[0-9]{7,15}$/,
            message: 'Phone must be between 7 and 15 digits',
          },
        ]}
      >
        <Input
          size="large"
          addonBefore={
            <Select
              defaultValue="us"
              size="large"
              onChange={(value: string) => setData('country', value)}
            >
              <Select.Option value="us">🇬🇧</Select.Option>
              <Select.Option value="eg">🇪🇬</Select.Option>
            </Select>
          }
          placeholder="000 000 000"
          onChange={(e) => setData('phone', e.target.value)}
        />
      </Form.Item>

      {/* Password */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Password is required' },
          {
            min: 6,
            message: 'Password must be at least 6 characters long',
          },
          {
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
            message: 'Password must contain uppercase, lowercase, and a number',
          },
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Enter Password"
          onChange={(e) => setData('password', e.target.value)}
        />
      </Form.Item>

      {/* Confirm Password */}
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Passwords do not match'))
            },
          }),
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Confirm Password"
          onChange={(e) => setData('confirmPassword', e.target.value)}
        />
      </Form.Item>
    </>
  )
}
