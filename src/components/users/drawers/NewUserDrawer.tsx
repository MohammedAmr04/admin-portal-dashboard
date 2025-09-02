import {
  Drawer,
  Button,
  Form,
  type FormProps,
  Input,
  Select,
  Modal,
} from 'antd'
import { ArrowDown2, CloseCircle, Export, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'

interface PropsCreateOrganiationDrawer {
  open: boolean
  onClose: () => void
}
export default function NewUserDrawer({
  open,
  onClose,
}: PropsCreateOrganiationDrawer) {
  const [form] = Form.useForm()

  type FieldType = {
    firstName?: string
    lastName?: string
    email?: string
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    setIsModalOpen(true)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">Create New User</span>
          <div className="flex gap-1">
            <Export size={24} variant="Linear" />
            <CloseCircle
              onClick={onClose}
              variant="Linear"
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      }
      closeIcon={false}
      open={open}
      styles={{
        content: { paddingInline: '16px' },
        header: { border: 'none', paddingInline: '0px' },
        body: {
          borderRadius: '12px',
          backgroundColor: '#12121f',
          border: 'none',
        },
      }}
      width={543}
      className="!bg-background-dark drawer"
    >
      <Form
        name="basic"
        layout="vertical"
        requiredMark={false}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex gap-2">
          <Form.Item<FieldType>
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input the user's first name!",
              },
            ]}
            className="flex-1"
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input the user's last name!" },
            ]}
            className="flex-1"
          >
            <Input size="large" />
          </Form.Item>
        </div>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid email!' },
            { required: true, message: "Please input the user's email!" },
          ]}
          className="flex-1"
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[
            { required: true, message: "Please select the user's role!" },
          ]}
        >
          <Select suffixIcon={<ArrowDown2></ArrowDown2>} size="large">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Organization"
          name="organization"
          rules={[
            {
              required: true,
              message: "Please select the user's organization!",
            },
          ]}
        >
          <Select suffixIcon={<ArrowDown2></ArrowDown2>} size="large">
            <Select.Option value="microsoft">Microsoft</Select.Option>
            <Select.Option value="ibm">IBM</Select.Option>
          </Select>
        </Form.Item>

        <div className="flex justify-end gap-2">
          <Form.Item label={null}>
            <Button
              type="default"
              onClick={() => {
                form.resetFields()
                onClose()
              }}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Confirm
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="p-8 space-y-6 flex flex-col items-center">
          <TickCircle size="32" className="text-primary" variant="Bold" />
          <p className="text-2xl font-semibold">User Added Successfully!</p>
          <p>Thanks for your update.</p>
        </div>
      </Modal>
    </Drawer>
  )
}
