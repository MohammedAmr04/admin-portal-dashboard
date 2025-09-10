import AuthLayout from '@/components/layouts/AuthLayout'
import MainLayout from '@/components/layouts/MainLayout'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import OrganizationsPage from '@/pages/dashboard/organizations/OrganizationsPage'
import UsersPage from '@/pages/dashboard/users/UsersPage'
import LoginPage from '../pages/auth/LoginPage'
import SignUpPage from '@/pages/auth/SignUpPage'
import ForgetPasswordPage from '@/pages/auth/ForgetPasswordPage'
import { createBrowserRouter } from 'react-router'
import OrganizationProfile from '@/pages/dashboard/organizations/organization-profile/OrganizationProfile'
import SupportPage from '@/pages/support/SupportPage'
import TestPage from '@/pages/TestPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'dashboard/users', element: <UsersPage /> },
      { path: 'dashboard/organizations', element: <OrganizationsPage /> },
      {
        path: 'dashboard/organizations/:name',
        element: <OrganizationProfile />,
      },
      { path: 'dashboard/support', element: <SupportPage /> },
      { path: 'test', element: <TestPage /> },
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
