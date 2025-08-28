import { Drawer, Steps, Button, Form } from 'antd'
import { useState } from 'react'
import type { Dayjs } from 'dayjs'

import { Box, Building, CloseCircle, Export, User } from 'iconsax-reactjs'
import StepOwnerInfo from './steps/StepOwnerInfo'
import StepOrganizationInfo from './steps/StepOrganizationsInfo'
import StepPackageInfo from './steps/StepPackageInfo'
import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary'

interface PropsCreateOrganiationDrawer {
  open: boolean
  onClose: () => void
}

export interface OrganizationData {
  // owner
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  country?: string
  password?: string
  confirmPassword?: string

  // organization
  companyName?: string
  industry?: string
  domainUrl?: string
  domainsNumber?: number
  employeesSize?: string
  purpose?: string

  // package
  package?: string
  startDate?: Dayjs | null
  endDate?: Dayjs | null
  categories?: string[]
  products?: string[]
}

interface StepConfig {
  title: string
  icon: React.ReactNode
  fields: (keyof OrganizationData)[]
  content: React.ReactNode
}

export default function CreateOrganizationDrawer({
  open,
  onClose,
}: PropsCreateOrganiationDrawer) {
  const [current, setCurrent] = useState<number>(0)
  const [organizationData, setOrganizationData] = useState<OrganizationData>({})
  const [form] = Form.useForm()

  const setData = <K extends keyof OrganizationData>(
    fieldName: K,
    value: OrganizationData[K]
  ) => {
    setOrganizationData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const steps: StepConfig[] = [
    {
      title: 'Owner Info',
      icon: <User size={24} />,
      fields: [
        'firstName',
        'lastName',
        'email',
        'phone',
        'country',
        'password',
        'confirmPassword',
      ],
      content: <StepOwnerInfo setData={setData} />,
    },
    {
      title: 'Organization Info',
      icon: <Building size={24} />,
      fields: [
        'companyName',
        'industry',
        'domainUrl',
        'domainsNumber',
        'employeesSize',
        'purpose',
      ],
      content: <StepOrganizationInfo setData={setData} />,
    },
    {
      title: 'Package Info',
      icon: <Box size={24} />,
      fields: ['package', 'startDate', 'endDate', 'categories', 'products'],
      content: <StepPackageInfo setData={setData} />,
    },
  ]

  const next = async () => {
    try {
      const stepFields = steps[current].fields as string[]
      await form.validateFields(stepFields)
      setCurrent(current + 1)
    } catch (error) {
      console.log('Validation failed:', error)
    }
  }

  const prev = () => setCurrent(current - 1)

  return (
    <Drawer
      placement="right"
      closable={false}
      title={
        <div className="flex items-center border-b border-text/5 py-3.5 justify-between w-full">
          <span className="text-text text-lg font-medium">
            Create New Organization
          </span>
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
        header: { border: 'none', paddingInline: '0px' },
        body: {
          borderRadius: '12px',
          border: 'none',
          overflow: 'visible',
        },
      }}
      width={543}
      className="drawer"
    >
      <div className="px-4">
        <Steps current={current} className="mb-6 drawer-steps" items={steps} />
        <Form
          requiredMark={false}
          layout="vertical"
          form={form}
          onFinish={(_) => console.log('Org values:', organizationData)}
        >
          {steps[current].content}

          <div className="flex justify-end gap-2 pb-6 mt-6">
            {current > 0 && (
              <ButtonSecondary>
                <div onClick={prev}>Previous</div>
              </ButtonSecondary>
            )}
            {current < steps.length - 1 && (
              <Button
                type="primary"
                onClick={next}
                size="large"
                className="!bg-primary px-6"
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                onClick={() => form.submit()}
                className="!bg-primary px-6"
              >
                Create Organization
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Drawer>
  )
}
