export interface IOrganization {
  id: number
  org: string
  owner: string
  products: string[]
  status: 'Blocked' | 'Approved' | 'Pending'
  date: string
}
