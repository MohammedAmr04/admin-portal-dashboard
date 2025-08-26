const NoOrganizationsFound = () => {
  return (
    <section className="py-17.5 w-full bg-background-dark border  border-[#9747FF] rounded-xl">
      <div className="text-center flex flex-col justify-center items-center">
        <img src="/organizations/magnifying.svg" alt="magnifying" />
        <h2 className="text-text mt-4 font-medium text-lg">
          No Organizations Found
        </h2>
        <p className="text-base mt-2 font-light text-text-dark ">
          Please add organization
        </p>
      </div>
    </section>
  )
}

export default NoOrganizationsFound
