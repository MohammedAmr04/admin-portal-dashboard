import DynamicBreadcrumb from '@/components/ui/tabs/DynamicBreadcrumb'

const HeaderOrganizationProfile = ({ title }: { title: string }) => {
  return (
    <header className="pb-6">
      <DynamicBreadcrumb />
      <h1 className="font-medium mt-7 py-2.5 text-xl !leading-[140%] text-text">
        {title}
      </h1>
    </header>
  )
}

export default HeaderOrganizationProfile
