export interface ITicket {
  id: number
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'closed'
  createdAt: string
  updatedAt: string
}
