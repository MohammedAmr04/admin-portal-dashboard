import { Breadcrumb } from 'antd'
import { ArrowRight2 } from 'iconsax-reactjs'
import { Link } from 'react-router'

const HeaderOrganizationProfile = ({ title }: { title: string }) => {
  return (
    <header className="pb-6">
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Dashboard</Link>,
          },
          {
            title: <Link to={`/dashboard/organizations`}>Organizations</Link>,
          },
          {
            title: title,
          },
        ]}
        separator={<ArrowRight2 size={16} />}
      />
      <h1 className="font-medium mt-7 py-2.5 text-xl !leading-[140%] text-text">
        {title}
      </h1>
    </header>
  )
}

export default HeaderOrganizationProfile
