import { usersData } from '@/services/mockData/users'
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Select,
  Switch,
  theme,
  type FormProps,
} from 'antd'
import {
  ArrowDown2,
  ArrowRight,
  CloseCircle,
  CloseSquare,
  Export,
  TickCircle,
  TickSquare,
  Trash,
} from 'iconsax-reactjs'
import { useEffect, useState, type CSSProperties } from 'react'
import { UserOutlined } from '@ant-design/icons'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'

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

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        email: data.email,
        phone: data.phone,
        role: data.role,
        organization: data.organization,
      })
    }
  }, [data, form])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [roleModal, setRoleModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmedDelete, setConfirmedDelete] = useState(false)
  const [statusModal, setStatusModal] = useState<undefined | string>(undefined)
  const [confirmedStatus, setConfirmedStatus] = useState(false)

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
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <div
            style={inputLikeDivStyle}
            className="flex justify-between !py-12"
          >
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
                onClick={() => setDeleteModal(true)}
              />
              <div className="flex gap-2 items-center">
                <Switch
                  checked={data?.status === 'Active'}
                  onChange={(next) => {
                    setData((prev) => ({
                      ...prev!,
                      status: next ? 'Active' : 'Inactive',
                    }))
                    setStatusModal(next ? 'activate' : 'suspend')
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
          className="flex-1"
        >
          <Input className={inputStyle} size="large" />
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
          className="flex-1"
        >
          <Input className={inputStyle} />
        </Form.Item>

        <Form.Item label={<span className={formLabelStyles}>Role</span>}>
          <Select
            size="large"
            suffixIcon={<ArrowDown2 />}
            value={data?.role}
            onChange={() => {
              setRoleModal(true)
            }}
          >
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Manager">Manager</Select.Option>
          </Select>
        </Form.Item>

        <SuccessModal
          visible={roleModal}
          title="Role updated successfully!"
          icon={
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          }
          onClose={() => {
            setRoleModal(false)
          }}
        />

        <ConfirmationModal
          visible={deleteModal}
          title="Are you sure that you want to delete this user?"
          icon={<Trash size={36} variant="Bulk" className="!text-danger" />}
          onCancel={() => setDeleteModal(false)}
          onConfirm={() => {
            setDeleteModal(false)
            setConfirmedDelete(true)
          }}
        />

        <SuccessModal
          visible={confirmedDelete}
          title="User deleted successfully!"
          icon={
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          }
          onClose={() => {
            setConfirmedDelete(false)
          }}
        />

        <Form.Item
          label={<span className={formLabelStyles}>Organization</span>}
        >
          <Select
            size="large"
            value={data?.organization}
            suffixIcon={<ArrowDown2></ArrowDown2>}
          >
            <Select.Option value="Microsoft">Microsoft</Select.Option>
            <Select.Option value="IBM">IBM</Select.Option>
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

      <ConfirmationModal
        visible={!!statusModal}
        title={
          statusModal === 'suspend'
            ? 'Are you sure you want to suspend this user?'
            : 'Are you sure you want to activate this user?'
        }
        icon={
          statusModal === 'suspend' ? (
            <CloseSquare size={36} variant="Bulk" className="!text-danger" />
          ) : (
            <TickSquare size={36} variant="Bulk" className="!text-success" />
          )
        }
        onCancel={() => setStatusModal(undefined)}
        onConfirm={() => {
          setConfirmedStatus(true)
        }}
      />
      <SuccessModal
        visible={confirmedStatus}
        title={
          statusModal === 'suspend'
            ? 'User suspended successfully!'
            : 'User activated successfully!'
        }
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setStatusModal(undefined)
          setConfirmedStatus(false)
        }}
      />
    </Drawer>
  )
}
