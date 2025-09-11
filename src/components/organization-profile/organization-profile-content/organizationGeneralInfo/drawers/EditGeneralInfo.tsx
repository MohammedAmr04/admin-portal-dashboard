import { Button, Drawer, Form, Input, Select, type FormProps } from 'antd'
import {
  CloseCircle,
  Export,
  Trash,
  TickCircle,
  Information,
} from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import ConfirmationModal from '@/components/ui/models/ConfirmationModal'
import SuccessModal from '@/components/ui/models/SuccessModal'

interface PropsInfo {
  name: string
  email: string
  phone: string
  industry: string
  domain: string
  employeeSize: number
}
interface PropsEditGeneralInfo {
  open: boolean
  onClose: () => void
  info: PropsInfo
}
function LabelForm({ label }: { label: string }) {
  return <span className="font-semibold text-sm text-text/50">{label}</span>
}
export default function EditGeneralInfo({
  open,
  onClose,
  info,
}: PropsEditGeneralInfo) {
  const [form] = Form.useForm()

  useEffect(() => {
    if (info) {
      form.setFieldsValue(info)
      setFormData(info)
    }
  }, [info, form])

  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmedDelete, setConfirmedDelete] = useState(false)

  const [_, setFormData] = useState<Partial<PropsInfo>>({})

  const [saveModal, setSaveModal] = useState<{
    visible: boolean
    success: boolean | null
  }>({
    visible: false,
    success: null,
  })

  const onFinish: FormProps<PropsInfo>['onFinish'] = (values) => {
    console.log('Saving form data:', values)

    const saved = Math.random() > 0.5

    setSaveModal({ visible: true, success: saved })

    if (saved) {
      setFormData(values)
    }
  }

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">General Info</span>
          <span className="flex gap-2">
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
        content: { paddingInline: '16px', backgroundColor: '#12121f' },
        header: { border: 'none', paddingInline: '0px' },
        body: {
          borderRadius: '12px',
          border: 'none',
          overflow: 'visible',
        },
      }}
      width={543}
      className="new-drawer"
    >
      <div className="flex justify-between mb-6.5 items-center border border-text/5 rounded-xl h-[70px] py-6 px-4 bg-background-dark">
        <span className="text-text font-normal text-base">{info.name}</span>{' '}
        <Trash
          size={24}
          onClick={() => setDeleteModal(true)}
          className="!text-text/50 cursor-pointer"
        />
      </div>
      <Form
        name="generalInfo"
        layout="vertical"
        requiredMark={false}
        style={{ maxWidth: 600 }}
        form={form}
        onFinish={onFinish}
        onValuesChange={(_, allValues) => setFormData(allValues)}
        autoComplete="off"
        className="border-t border-text/5 !px-4.5 !py-3"
      >
        {/* Name */}
        <Form.Item
          name="name"
          label={<LabelForm label="Name" />}
          rules={[{ required: true, message: 'Please enter name' }]}
        >
          <Input
            size="large"
            placeholder="Enter Name"
            className="rounded-lg text-text"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label={<LabelForm label="Email" />}
          rules={[{ type: 'email', message: 'Invalid email' }]}
        >
          <Input
            size="large"
            placeholder="Ex.User@Domain.com"
            className="rounded-lg text-text"
          />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          name="phone"
          label={<LabelForm label="Phone Number" />}
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
              <Select defaultValue="us" size="large">
                <Select.Option value="us">🇬🇧</Select.Option>
                <Select.Option value="eg">🇪🇬</Select.Option>
              </Select>
            }
            placeholder="000 000 000"
          />
        </Form.Item>

        {/* Industry */}
        <Form.Item name="industry" label={<LabelForm label="Industry" />}>
          <Input
            size="large"
            placeholder="N/A"
            className="rounded-lg text-text"
          />
        </Form.Item>

        {/* Domain */}
        <Form.Item name="domain" label={<LabelForm label="Domain" />}>
          <Input
            size="large"
            type="url"
            placeholder="ex.domain.com"
            className="rounded-lg text-text"
          />
        </Form.Item>

        {/* Employees Size */}
        <Form.Item
          name="employeeSize"
          label={<LabelForm label="Employees Size" />}
        >
          <Input
            type="number"
            size="large"
            placeholder="Enter number"
            className="rounded-lg text-text"
          />
        </Form.Item>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </div>
      </Form>

      {/* Modals */}
      <ConfirmationModal
        visible={deleteModal}
        type="DELETE"
        title="Are you sure you want to delete this organization?"
        icon={<Trash size={36} className="!text-danger" />}
        onCancel={() => setDeleteModal(false)}
        onConfirm={() => {
          setDeleteModal(false)
          setConfirmedDelete(true)
        }}
      />

      <SuccessModal
        visible={confirmedDelete}
        title="Organization deleted successfully!"
        icon={<TickCircle size={36} variant="Bulk" className="!text-success" />}
        onClose={() => {
          setConfirmedDelete(false)
        }}
      />

      {/* Save Modal */}
      <SuccessModal
        visible={saveModal.visible}
        title={
          saveModal.success
            ? 'Changes updated successfully!'
            : 'Changes could not be updated successfully'
        }
        description={saveModal.success ? 'Thank you for the update' : ''}
        icon={
          saveModal.success ? (
            <TickCircle size={36} variant="Bulk" className="!text-success" />
          ) : (
            <Information size={36} variant="Bulk" className="!text-warning" />
          )
        }
        onClose={() => setSaveModal({ visible: false, success: null })}
      />
    </Drawer>
  )
}
