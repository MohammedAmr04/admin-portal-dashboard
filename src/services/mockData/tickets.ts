import type { ITicket } from '../types/ticket'

export const ticketsData: ITicket[] = [
  {
    id: 1,
    title: 'Login button not responding',
    description:
      'Users report the login button on the homepage does nothing when clicked on Safari.',
    priority: 'high',
    status: 'pending',
    createdAt: '2025-08-20',
    updatedAt: '2025-08-21',
  },
  {
    id: 2,
    title: 'Typo in FAQ section',
    description: 'Misspelling of the word "organization" on the FAQ page.',
    priority: 'low',
    status: 'closed',
    createdAt: '2025-08-18',
    updatedAt: '2025-08-19',
  },
  {
    id: 3,
    title: 'Slow dashboard load',
    description:
      'Dashboard takes more than 8 seconds to load for some users in EU region.',
    priority: 'medium',
    status: 'pending',
    createdAt: '2025-08-22',
    updatedAt: '2025-08-23',
  },
  {
    id: 4,
    title: 'Notification badge count incorrect',
    description:
      'Badge shows unread notifications even after viewing all items.',
    priority: 'low',
    status: 'pending',
    createdAt: '2025-08-24',
    updatedAt: '2025-08-24',
  },
  {
    id: 5,
    title: 'Export to CSV fails',
    description:
      'Clicking export triggers an error for large datasets (>10k rows).',
    priority: 'high',
    status: 'pending',
    createdAt: '2025-08-25',
    updatedAt: '2025-08-26',
  },
  {
    id: 6,
    title: 'Avatar upload rotates image',
    description: 'Uploaded profile photos appear rotated 90 degrees on mobile.',
    priority: 'medium',
    status: 'closed',
    createdAt: '2025-08-17',
    updatedAt: '2025-08-20',
  },
  {
    id: 7,
    title: '2FA code email delayed',
    description:
      'Email with the 2FA code arrives after 5-10 minutes for some domains.',
    priority: 'medium',
    status: 'pending',
    createdAt: '2025-08-27',
    updatedAt: '2025-08-27',
  },
  {
    id: 8,
    title: 'Billing page 500 error',
    description:
      'Server returns 500 when opening Billing page for accounts with no payment method.',
    priority: 'high',
    status: 'pending',
    createdAt: '2025-08-28',
    updatedAt: '2025-08-28',
  },
  {
    id: 9,
    title: 'Search results pagination off by one',
    description:
      'Page 2 repeats the last items from page 1 and misses the last page.',
    priority: 'low',
    status: 'closed',
    createdAt: '2025-08-14',
    updatedAt: '2025-08-16',
  },
  {
    id: 10,
    title: 'Dark mode contrast issue',
    description:
      'Text in disabled inputs has insufficient contrast in dark mode.',
    priority: 'medium',
    status: 'pending',
    createdAt: '2025-08-29',
    updatedAt: '2025-08-30',
  },
]
