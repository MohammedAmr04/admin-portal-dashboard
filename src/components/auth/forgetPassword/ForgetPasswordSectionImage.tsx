const ForgetPasswordSectionImage = () => {
  return (
    <div className="h-scree col-span-1  p-5  border-border border-e hidden md:block relative before:">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl !leading-16 text-text font-bold  ">
          Let's get you back <span className="text-primary">in.</span>
        </h1>
        <p className="text-text/60 !leading-5">
          We are still fine tuning the product and would love your help. Join
          our Beta to help contribute to the future of Leaks.
        </p>
        <div className="rounded-2xl w-[415] overflow-hidden aspect-[1.7/1] mt-10">
          <img
            src="/forgetPassword/image.png"
            className="w-full h-full object-cover"
            alt="details"
          />
        </div>
      </div>
    </div>
  )
}

export default ForgetPasswordSectionImage
