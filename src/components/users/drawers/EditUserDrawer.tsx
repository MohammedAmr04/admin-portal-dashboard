import { usersData } from '@/services/mockData/users'
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Modal,
  Select,
  Switch,
  theme,
  type FormProps,
} from 'antd'
import {
  ArrowDown2,
  ArrowRight,
  CloseCircle,
  Export,
  Trash,
} from 'iconsax-reactjs'
import { useEffect, useState, type CSSProperties } from 'react'
import { UserOutlined } from '@ant-design/icons'

interface PropsCreateOrganiationDrawer {
  open: boolean
  onClose: () => void
  userID: number | undefined
}

export default function EditUserDrawer({
  open,
  onClose,
  userID,
}: PropsCreateOrganiationDrawer) {
  const [form] = Form.useForm()
  const user = usersData.find((u) => u.id === userID)

  type FieldType = {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
  }

  useEffect(() => {
    const user = usersData.find((u) => u.id === userID)
    if (user) {
      setData(user)
    }
  }, [userID])
  const [data, setData] = useState(user)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [roleModalVisible, setRoleModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [deleteSuccessModalVisible, setDeleteSuccessModalVisible] =
    useState(false)
  const [selectedRole, setSelectedRole] = useState<string>()
  const { token } = theme.useToken()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    setIsModalOpen(true)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  const formLabelStyles = 'text-text-dark text-sm font-semibold'
  const inputStyle = '!p-4 !text-text-dark'
  const inputLikeDivStyle: CSSProperties = {
    background: token.colorBgContainer,
    border: `${token.lineWidth}px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
    paddingInline: 16,
    paddingBlock: 24,
    height: token.controlHeight,
    color: token.colorText,
    display: 'flex',
    alignItems: 'center',
  }

  console.log(data)

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">User Profile</span>
          <span className="flex">
            <Export size={24} variant="Linear" />
            <CloseCircle
              onClick={onClose}
              variant="Linear"
              size={24}
              className="cursor-pointer"
            />
          </span>
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
        <Form.Item>
          <div className={`${inputLikeDivStyle} flex justify-between`}>
            <div className="flex gap-2">
              <Avatar size={40} icon={<UserOutlined />} />
              <div>
                <p>{data?.name}</p>
                <p>{data?.role}</p>
                <a>
                  <span className="flex gap-2 text-primary text-sm items-center">
                    Send Reset Password <ArrowRight size={14} />
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-2 flex flex-col items-end">
              <Trash
                className="cursor-pointer"
                onClick={() => setDeleteModalVisible(true)}
              />
              <div className="flex gap-2 items-center">
                <Switch
                  checked={data?.status === 'Active'}
                  onChange={(checked) => {
                    setData((prev) => ({
                      ...prev!,
                      status: checked ? 'Active' : 'Inactive',
                    }))
                  }}
                />
                <span
                  className={
                    data?.status === 'Active' ? 'text-success' : 'text-text'
                  }
                >
                  {data?.status === 'Active' ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className={formLabelStyles}>Email</span>}
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid email!' },
            { required: true, message: "Please input the user's email!" },
          ]}
          initialValue={data?.email}
          className="flex-1"
        >
          <Input className={inputStyle} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className={formLabelStyles}>Phone</span>}
          name="phone"
          rules={[
            {
              pattern: /^01\d{9}$/,
              message: 'Phone must be in the format 01XXXXXXXXX',
            },
            {
              required: true,
              message: "Please input the user's phone number!",
            },
          ]}
          initialValue={data?.phone}
          className="flex-1"
        >
          <Input className={inputStyle} />
        </Form.Item>

        <Form.Item label={<span className={formLabelStyles}>Role</span>}>
          <Select
            size="large"
            suffixIcon={<ArrowDown2 />}
            value={data?.role}
            onChange={(value) => {
              setSelectedRole(value)
              setRoleModalVisible(true)
            }}
          >
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Manager">Manager</Select.Option>
          </Select>
        </Form.Item>

        <Modal
          open={roleModalVisible}
          onOk={() => {
            if (selectedRole && data) {
              setData({ ...data, role: selectedRole as 'Admin' | 'Manager' })
            }
            setRoleModalVisible(false)
          }}
          onCancel={() => setRoleModalVisible(false)}
          okText="Confirm"
          cancelText="Cancel"
          footer={null}
        >
          <div className="p-8 space-y-6 flex flex-col items-center">
            <p className="text-2xl font-semibold">Role updated successfully!</p>
            <p>Thanks for your update.</p>
          </div>
        </Modal>

        <Modal
          open={deleteModalVisible}
          onOk={() => {
            // Handle delete logic here
            console.log('Deleting user:', data?.id)
            setDeleteModalVisible(false)
            onClose()
          }}
          onCancel={() => setDeleteModalVisible(false)}
          footer={null}
        >
          <div className="p-6 space-y-6">
            <p className="text-text text-center">
              Are you sure you want to delete this user?
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button onClick={() => setDeleteModalVisible(false)}>
                Cancel
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  console.log('Deleting user:', data?.id)
                  setDeleteModalVisible(false)
                  setDeleteSuccessModalVisible(true)
                  // Add your actual delete API call here
                  // onDeleteUser(data?.id)
                }}
                className="px-6"
              >
                Yes
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          open={deleteSuccessModalVisible}
          onCancel={() => {
            setDeleteSuccessModalVisible(false)
            onClose()
          }}
          footer={null}
          centered
          closable={true}
        >
          <div className="p-8 space-y-6 flex flex-col items-center">
            <p className="text-2xl font-semibold">User deleted successfully</p>
            <p>Thank you for the update</p>
          </div>
        </Modal>

        <Form.Item
          label={<span className={formLabelStyles}>Organization</span>}
        >
          <Select size="large" suffixIcon={<ArrowDown2></ArrowDown2>}>
            <Select.Option value="admin">Microsoft</Select.Option>
            <Select.Option value="manager">IBM</Select.Option>
          </Select>
        </Form.Item>

        <p className="font-semibold text-[1rem] mb-2">Details</p>

        <Divider style={{ borderTopColor: 'var(--c-border)' }} />

        <Form.Item
          label={<span className={formLabelStyles}>Organization Details</span>}
        >
          <div style={inputLikeDivStyle}>Hello</div>
        </Form.Item>

        <Form.Item
          label={<span className={formLabelStyles}>Last Login Details</span>}
        >
          <div style={inputLikeDivStyle}>Last Login: 31st Aug, 2025</div>
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
    </Drawer>
  )
}
