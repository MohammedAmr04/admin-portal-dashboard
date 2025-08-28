import type { RuleObject } from 'antd/es/form'

export const validations = {
  required: (message: string = 'This field is required') => [
    { required: true, message },
  ],
  email: [
    { type: 'email', message: 'Please enter a valid email' },
    { required: true, message: 'Email is required' },
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters' },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      message:
        'Password must include uppercase, lowercase, number, and special character',
    },
  ],
  domain: [
    { required: true, message: 'Please enter number of domains' },
    {
      pattern: /^[0-9]+$/,
      message: 'Domains must be a number',
    },
    {
      validator: (_: RuleObject, value: number) =>
        value && value > 0
          ? Promise.resolve()
          : Promise.reject('Must be greater than 0'),
    },
  ],
}
