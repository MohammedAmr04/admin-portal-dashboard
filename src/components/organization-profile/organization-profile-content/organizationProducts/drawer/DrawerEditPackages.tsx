import ProductCheckBox from '@/components/ui/checkboxs/ProductCheckBox'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'
import { Drawer, Button, Form, Select, Checkbox } from 'antd'
import { CloseCircle, Export, TickCircle, TickSquare } from 'iconsax-reactjs'
import { useState } from 'react'

interface PropsDrawerEditPackages {
  open: boolean
  onClose: () => void
}
const checkboxes = [
  'Product A',
  'Product B',
  'Product C',
  'Product D',
  'Product E',
]
const { Option } = Select

export default function DrawerEditPackages({
  open,
  onClose,
}: PropsDrawerEditPackages) {
  const [form] = Form.useForm()
  const [status, setStatus] = useState<
    'idle' | 'confirm' | 'loading' | 'success'
  >('idle')

  const handleSubmit = async () => {
    try {
      await form.validateFields()
      setStatus('confirm')
    } catch (error) {
      console.log('Validation Failed:', error)
    }
  }

  const handleConfirm = async () => {
    setStatus('loading')

    // simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', form.getFieldsValue())
      form.resetFields()
      setStatus('success')

      //   auto close after success
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2000)
    }, 1200)
  }

  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        title={
          <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
            <span className="text-text text-lg font-medium">Invite owner</span>
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
        <Form requiredMark={false} layout="vertical" form={form}>
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
              { required: true, message: 'Please select at least one product' },
            ]}
          >
            <Checkbox.Group className="flex flex-col gap-2 text-text">
              {checkboxes.map((c) => (
                <ProductCheckBox
                  key={c}
                  value={c.split(' ').join()}
                  label={c}
                />
              ))}
            </Checkbox.Group>
          </Form.Item>

          {/* Actions */}
          <div className="flex justify-end gap-2 pb-6 mt-6">
            <Button
              type="default"
              className="!bg-text  !text-[#1C122E]"
              onClick={() => {
                form.resetFields()
                onClose()
              }}
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              loading={status === 'loading'}
              className="!bg-primary px-6"
              onClick={handleSubmit}
            >
              Save Changes{' '}
            </Button>
          </div>
        </Form>
      </Drawer>

      {/* Confirmation */}
      <ConfirmationModal
        title="Are you sure you want to apply these changes?"
        visible={status === 'confirm'}
        titleDetails="text-base"
        icon={<TickSquare size={36} className="!text-success" variant="Bulk" />}
        onConfirm={handleConfirm}
        onCancel={() => setStatus('idle')}
      />

      {/* Success */}
      <SuccessModal
        title="Changes applied successfully"
        visible={status === 'success'}
        description="Thank you for the update"
        icon={
          <TickCircle size={32} variant="Bulk" className="!text-[#9147FF]" />
        }
      />
    </>
  )
}
