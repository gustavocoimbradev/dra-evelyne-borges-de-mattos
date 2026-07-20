export default function BreadcrumbBar({ children }) {
  return (
    <div className="bg-clay">
      <div className="container-site py-3.5 md:py-4">
        <nav className="text-sm text-white/80" aria-label="Breadcrumb">
          {children}
        </nav>
      </div>
    </div>
  )
}
