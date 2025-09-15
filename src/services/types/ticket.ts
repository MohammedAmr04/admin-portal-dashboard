export interface ITicket {
  id: number
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'closed' | 'ignored'
  createdAt: string
  updatedAt: string
  organization: string
  notes: string
}
