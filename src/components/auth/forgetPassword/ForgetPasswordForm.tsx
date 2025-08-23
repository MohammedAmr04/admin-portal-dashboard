import { Button, Form, Input, Typography } from 'antd'
import { ArrowLeft } from 'iconsax-reactjs'
import { useNavigate } from 'react-router'

const ForgetPasswordForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  return (
    <div className=" md:p-8 p-5 col-span-1 h-screen flex relative  items-center  md:justify-center ">
      <div className="flex-1 max-w-md mx-auto relative z-10 w-full ">
        <div className="text-center pb-5 md:hidden">
          <h1 className="md:text-5xl text-3xl mb-2 !leading-16 text-text font-bold md:max-w-2xs ">
            Let's get you back <span className="text-primary">in.</span>
          </h1>
          <p className="text-text/60 font-normal !leading-5">
            We are still fine tuning the product and would love your help. Join
            our Beta to help contribute to the future of Leaks.
          </p>
        </div>

        <Button
          onClick={() => {
            navigate(-1)
          }}
          variant="text"
          color="default"
          className="pb-2 absolute -start-4"
        >
          <ArrowLeft size={24} className="text-text cursor-pointer pb-1" />
        </Button>

        <Typography.Title className="py-2.5 font-semibold" level={3}>
          Forget Password
        </Typography.Title>
        <Form layout="vertical" form={form}>
          <Form.Item label="Email">
            <Input type="email" size="large" placeholder="Enter Your Email" />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" className="font-bold w-full">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default ForgetPasswordForm
