export default function BreadcrumbBar({ children }) {
  return (
    <div className="bg-sand">
      <div className="container-site py-3.5 md:py-4">
        <nav className="text-sm text-espresso/75" aria-label="Breadcrumb">
          {children}
        </nav>
      </div>
    </div>
  )
}
