import ForgetPasswordForm from '@/components/auth/forgetPassword/ForgetPasswordForm'
import ForgetPasswordSectionImage from '@/components/auth/forgetPassword/ForgetPasswordSectionImage'

const ForgetPasswordPage = () => {
  return (
    <main className="bg-background ">
      <div className="container-c grid max-w-64 md:grid-cols-2  grid-cols-1">
        <ForgetPasswordSectionImage />
        <ForgetPasswordForm />
      </div>
    </main>
  )
}

export default ForgetPasswordPage
