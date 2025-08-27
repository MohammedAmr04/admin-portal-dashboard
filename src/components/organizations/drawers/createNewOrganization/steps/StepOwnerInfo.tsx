import { Form, Input, Select } from 'antd'

export default function StepOwnerInfo({
  setData,
}: {
  setData: (field: string, value: any) => void
}) {
  return (
    <>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'First Name is required' }]}
      >
        <Input
          size="large"
          placeholder="Enter First Name"
          className=" "
          onChange={(e) => setData('firstName', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Last Name is required' }]}
      >
        <Input
          size="large"
          placeholder="Enter Last Name"
          className=" "
          onChange={(e) => setData('lastName', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Invalid Email' },
        ]}
      >
        <Input
          size="large"
          placeholder="Enter Your Email"
          onChange={(e) => setData('email', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phone"
        rules={[{ required: true, message: 'Phone is required' }]}
      >
        <Input
          size="large"
          addonBefore={
            <Select
              defaultValue="us"
              size="large"
              onChange={(value) => setData('country', value)}
            >
              <Select.Option value="us">🇬🇧</Select.Option>
              <Select.Option value="eg">🇪🇬</Select.Option>
            </Select>
          }
          placeholder="000 000 000"
          className=" !rounded-lg "
          onChange={(e) => setData('phone', e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Password is required' }]}
      >
        <Input.Password
          size="large"
          placeholder="Enter Password"
          className=" "
          onChange={(e) => setData('password', e.target.value)}
        />
      </Form.Item>

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
          className=" "
          onChange={(e) => setData('confirmPassword', e.target.value)}
        />
      </Form.Item>
    </>
  )
}
