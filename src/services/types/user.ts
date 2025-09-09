export interface IUser {
  id: number
  name: string
  email: string
  phone: string
  role: 'Admin' | 'Manager'
  organization: 'Microsoft' | 'IBM'
  status: 'Active' | 'Inactive'
}
