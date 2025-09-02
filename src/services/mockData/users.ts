export type UserRow = {
  id: number
  name: string
  email: string
  phone: string
  role: 'Admin' | 'Manager'
  organization: 'Microsoft' | 'IBM'
  status: 'Active' | 'Inactive'
}

export const usersData: UserRow[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    phone: '01012345678',
    role: 'Admin',
    organization: 'Microsoft',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Noah Johnson',
    email: 'noah.johnson@example.com',
    phone: '01123456789',
    role: 'Manager',
    organization: 'IBM',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Ava Thompson',
    email: 'ava.thompson@example.com',
    phone: '01234567890',
    role: 'Admin',
    organization: 'Microsoft',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Liam Davis',
    email: 'liam.davis@example.com',
    phone: '01512345678',
    role: 'Manager',
    organization: 'IBM',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    phone: '01098765432',
    role: 'Admin',
    organization: 'Microsoft',
    status: 'Inactive',
  },
  {
    id: 6,
    name: 'Mason Brown',
    email: 'mason.brown@example.com',
    phone: '01187654321',
    role: 'Manager',
    organization: 'IBM',
    status: 'Active',
  },
  {
    id: 7,
    name: 'Sophia Clark',
    email: 'sophia.clark@example.com',
    phone: '01209876543',
    role: 'Admin',
    organization: 'Microsoft',
    status: 'Active',
  },
  {
    id: 8,
    name: 'James Lewis',
    email: 'james.lewis@example.com',
    phone: '01598765012',
    role: 'Manager',
    organization: 'IBM',
    status: 'Inactive',
  },
  {
    id: 9,
    name: 'Isabella Young',
    email: 'isabella.young@example.com',
    phone: '01045678901',
    role: 'Admin',
    organization: 'Microsoft',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Ethan Hall',
    email: 'ethan.hall@example.com',
    phone: '01145678012',
    role: 'Manager',
    organization: 'IBM',
    status: 'Active',
  },
]
