import AuthLayout from '@/components/layouts/AuthLayout'
import MainLayout from '@/components/layouts/MainLayout'
import DashboardPage from '@/pages/DashboardPage'
import OrganizationsPage from '@/pages/OrganizationsPage'
import UsersPage from '@/pages/UsersPage'
import LoginPage from './../pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import ForgetPasswordPage from '@/pages/ForgetPasswordPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'organizations', element: <OrganizationsPage /> },
    ],
  },
  {
    path: '/login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    ),
  },
  {
    path: '/forget-password',
    element: (
      <AuthLayout>
        <ForgetPasswordPage />
      </AuthLayout>
    ),
  },
])
