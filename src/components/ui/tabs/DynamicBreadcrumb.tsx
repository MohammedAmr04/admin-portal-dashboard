import { Breadcrumb } from 'antd'
import { ArrowRight2 } from 'iconsax-reactjs'
import { Link, useLocation } from 'react-router'

export default function DynamicBreadcrumb() {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const isLast = index === pathSnippets.length - 1

    const label =
      index === 0
        ? 'Dashboard'
        : pathSnippets[index].charAt(0).toUpperCase() +
          pathSnippets[index].slice(1)

    return {
      title: isLast ? <span>{label}</span> : <Link to={url}>{label}</Link>,
    }
  })

  return (
    <Breadcrumb items={breadcrumbItems} separator={<ArrowRight2 size={16} />} />
  )
}
