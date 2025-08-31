const NoUsersFound = () => {
  return (
    <section className="py-17.5 w-full bg-background-dark border  border-[#9747FF] rounded-xl">
      <div className="text-center flex flex-col justify-center items-center">
        <img src="/organizations/magnifying.svg" alt="magnifying" />
        <h2 className="text-text mt-4 font-medium text-lg">No Users Found</h2>
        <p className="text-base mt-2 font-light text-text-dark ">
          Start by adding your first user.
        </p>
      </div>
    </section>
  )
}

export default NoUsersFound
