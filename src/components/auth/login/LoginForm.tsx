import { ArrowRightIcon } from '@phosphor-icons/react'
import { Button, Form, Input, Typography } from 'antd'
import { Link } from 'react-router'

const LoginForm = () => {
  const [form] = Form.useForm()

  return (
    <div className="py-5 h-screen flex items-center  justify-center relative bg-background">
      <img
        src="/login/artwork.png"
        className="absolute z-0 w-full top-0 start-0"
        alt="login art work"
      />
      <div className="container  min-w-[350px] relative z-10 px-8 max-w-[400px] mx-auto">
        <Typography.Title className="py-2.5 font-semibold" level={3}>
          Let's get you back <span className="text-primary">in.</span>
        </Typography.Title>
        <Form layout="vertical" form={form}>
          <Form.Item
            rules={[
              { required: true, message: 'Email is required' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
            label="Email"
          >
            <Input type="email" size="large" placeholder="Enter Your Email" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: 'Password is required' },
              { min: 8, message: 'Password must be at least 8 characters' },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  'Password must contain uppercase, lowercase, number, and special character',
              },
            ]}
            label="Password"
          >
            <Input.Password size="large" placeholder="Enter Your Password" />
          </Form.Item>
          <p className="text-primary hover:text-primary-dark duration-300 font-normal text-lg ">
            <Link to={'/forget-password'}>Forget Password?</Link>
          </p>
          <Form.Item className="!mt-10">
            <Button size="large" type="primary" className=" w-full">
              <span className="font-semibold">Continue</span>
              <ArrowRightIcon className="ms-.5" size={24} />
            </Button>
          </Form.Item>
          <p className=" font-normal ">
            <Link to={''}>
              Not Subscribed yet?
              <span className="text-primary hover:text-primary-dark duration-300">
                {' '}
                Subscribe
              </span>
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
