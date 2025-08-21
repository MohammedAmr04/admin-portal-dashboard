const LoginSectionImage = () => {
  return (
    <div className="h-screen hidden md:block bg-[url('/loginBackground.jpg')] pt-24 relative">
      <div className="absolute top-0 start-0 h-full z-1 w-full bg-overlay"></div>
      <div className="left-4 lg:left-36 absolute  ">
        <h1 className="font-semibold leading-1.5 text-2xl  z-2 relative pb-6  text-text max-w-[400px]">
          We Protect you to the <span className="text-primary">limits</span>!
        </h1>
        <p className="text-text text-base  font-normal ">
          Dark Atlas is an AI-powered eXtended Cyber Intelligence (XCI) Platform
          that protects you against cyber threats with actionable &
          contextualized intelligence.
        </p>
      </div>
      <img
        className="absolute z-10 lg:start-36 start-10 -rotate-8 top-70 lg:top-60"
        src="/loginDash.png"
        alt="login-dash"
      />
    </div>
  )
}

export default LoginSectionImage
