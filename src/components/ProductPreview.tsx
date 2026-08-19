import {
  applications,
  STATUS_COLUMNS,
  getApplicationsByStatus,
  type ApplicationStatus,
} from '../data/applications'
import { ApplicationCard } from './ApplicationCard'

interface ProductPreviewProps {
  variant?: 'hero' | 'compact'
}

export function ProductPreview({ variant = 'hero' }: ProductPreviewProps) {
  const isHero = variant === 'hero'

  const displayColumns = isHero
    ? STATUS_COLUMNS
    : STATUS_COLUMNS.slice(0, 3)

  const heroApps = applications.filter((a) =>
    ['1', '2', '3', '6'].includes(a.id),
  )

  function getColumnApps(status: ApplicationStatus) {
    if (isHero) {
      return heroApps.filter((a) => a.status === status)
    }
    return getApplicationsByStatus(status).slice(0, 2)
  }

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-lg)] ${
        isHero ? '' : 'shadow-[var(--shadow-md)]'
      }`}
      role="img"
      aria-label="ApplyFlow application dashboard preview showing job applications organized in pipeline columns"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-stone-50/80 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
        </div>
        <span className="text-xs font-medium text-muted">ApplyFlow</span>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-3 py-2.5 sm:px-4 sm:py-3">
        <h3 className="mr-auto text-sm font-semibold text-foreground">Applications</h3>

        <div className="flex items-center gap-1.5">
          <div
            className="hidden items-center gap-1.5 rounded-[var(--radius-sm)] border border-border bg-stone-50 px-2.5 py-1.5 sm:flex"
            aria-hidden="true"
          >
            <SearchIcon />
            <span className="text-xs text-stone-400">Search...</span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1 rounded-[var(--radius-sm)] border border-border px-2 py-1.5 text-[11px] font-medium text-muted"
            aria-label="Filter applications"
            tabIndex={-1}
          >
            <FilterIcon />
            <span className="hidden sm:inline">Filter</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1 rounded-[var(--radius-sm)] bg-accent px-2.5 py-1.5 text-[11px] font-semibold text-white"
            aria-label="Add application"
            tabIndex={-1}
          >
            <PlusIcon />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Kanban board */}
      <div
        className={`grid gap-2 p-3 sm:gap-3 sm:p-4 ${
          isHero
            ? 'grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 sm:grid-cols-3'
        }`}
      >
        {displayColumns.map((column) => {
          const columnApps = getColumnApps(column.id)
          return (
            <div key={column.id} className="min-w-0">
              <div className="mb-2 flex items-center justify-between px-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                  {column.label}
                </span>
                <span className="flex h-4 min-w-4 items-center justify-center rounded bg-stone-100 px-1 text-[10px] font-medium text-stone-500">
                  {columnApps.length}
                </span>
              </div>
              <div className="space-y-2">
                {columnApps.map((app) => (
                  <ApplicationCard
                    key={app.id}
                    application={app}
                    interactive={isHero ? 'hover' : 'none'}
                    compact={!isHero}
                  />
                ))}
                {columnApps.length === 0 && (
                  <div className="rounded-[var(--radius-sm)] border border-dashed border-stone-200 p-3 text-center text-[10px] text-stone-400">
                    No applications
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1" />
      <path d="M8 8l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 3h8M3.5 6h5M5 9h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
