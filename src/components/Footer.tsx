const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-base font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-white">
                AF
              </span>
              ApplyFlow
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              A focused workspace for managing your job search — applications,
              interviews, and follow-ups in one place.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} ApplyFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
