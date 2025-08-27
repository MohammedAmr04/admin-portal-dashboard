import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import { Drawer, Button, Form, Input, Select, Checkbox } from 'antd'
import { CloseCircle, Export, TickCircle, TickSquare } from 'iconsax-reactjs'
import { useState } from 'react'

interface PropsInviteOwnerDrawer {
  open: boolean
  onClose: () => void
}

const { Option } = Select

export default function InviteOwnerDrawer({
  open,
  onClose,
}: PropsInviteOwnerDrawer) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [confirm, setConfirm] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const handleSubmit = async () => {
    handleOpenConfirm()
    try {
      const values = await form.validateFields()
      setLoading(true)

      // simulate API call
      setTimeout(() => {
        console.log('Form Submitted:', values)
        setLoading(false)
        form.resetFields()
        onClose()
      }, 1200)
    } catch (error) {
      console.log('Validation Failed:', error)
    }
  }
  function handleOpenConfirm() {
    setConfirm(true)
  }
  function handleCloseConfirm() {
    setConfirm(false)
  }
  function handleOpenSuccess() {
    setSuccess(true)
    setTimeout(() => {
      handleCloseSuccess()
    }, 3000)
  }
  function handleCloseSuccess() {
    setSuccess(false)
  }
  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        title={
          <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
            <span className="text-text text-lg font-medium">Invite owner </span>
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
          content: {
            paddingInline: '16px',
            paddingBottom: '50px',
            backgroundColor: '#12121f',
          },
          header: {
            border: 'none',
            paddingBottom: '21px',
            paddingInline: '0px',
          },
          body: {
            borderRadius: '12px',
            border: 'none',
            padding: '0 18px',
            overflow: 'visible',
          },
        }}
        width={543}
        className="drawer drawer-invite"
      >
        <div className="">
          <Form requiredMark={false} layout="vertical" form={form}>
            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter an email address' },
                { type: 'email', message: 'Invalid email format' },
              ]}
            >
              <Input size="large" placeholder="Ex.User@Domain.Com" />
            </Form.Item>

            {/* Number of Domains */}
            <Form.Item
              label="Number of Domains"
              name="domains"
              rules={[
                { required: true, message: 'Please enter number of domains' },
                {
                  pattern: /^[0-9]+$/,
                  message: 'Domains must be a number',
                },
                {
                  validator: (_, value) =>
                    value && value > 0
                      ? Promise.resolve()
                      : Promise.reject('Must be greater than 0'),
                },
              ]}
            >
              <Input type="number" size="large" placeholder="e.g. 22" />
            </Form.Item>

            {/* Select Package */}
            <Form.Item
              label="Select Package"
              name="package"
              rules={[{ required: true, message: 'Please select a package' }]}
            >
              <Select size="large" placeholder="Choose a package">
                <Option value="basic">Basic Package</Option>
                <Option value="standard">Standard Package</Option>
                <Option value="premium">Premium Package</Option>
              </Select>
            </Form.Item>

            {/* Assigned Products */}
            <Form.Item
              label="Assigned Products"
              name="products"
              rules={[
                {
                  required: true,
                  message: 'Please select at least one product',
                },
              ]}
            >
              <Checkbox.Group className="flex flex-col gap-2 text-text">
                <Checkbox value="productA">Product A</Checkbox>
                <Checkbox value="productB">Product B</Checkbox>
                <Checkbox value="productC">Product C</Checkbox>
                <Checkbox value="productD">Product D</Checkbox>
                <Checkbox value="productE">Product E</Checkbox>
              </Checkbox.Group>
            </Form.Item>

            {/* Actions */}
            <div className="flex justify-end gap-2 pb-6 mt-6">
              <Button
                type="primary"
                size="large"
                loading={loading}
                className="!bg-primary px-6"
                onClick={handleSubmit}
              >
                Invite
              </Button>
            </div>
          </Form>
        </div>
      </Drawer>
      <ConfirmationModal
        title="Are you sure you want to invite this owner?"
        visible={confirm}
        icon={<TickSquare size={36} className="!text-success" variant="Bulk" />}
        onConfirm={() => {
          setConfirm(false)
          handleOpenSuccess()
        }}
        onCancel={handleCloseConfirm}
      />
      <SuccessModal
        title="Invitation sent successfully."
        visible={success}
        icon={
          <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />
        }
      />
    </>
  )
}
