import { useState, type ReactNode } from 'react'
import {
  applications,
  STATUS_COLUMNS,
  getStatusColor,
  type Application,
} from '../data/applications'
import { ApplicationCard } from './ApplicationCard'
import { SectionReveal } from './ui/SectionReveal'

export function InteractiveBoard() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = applications.find((a) => a.id === selectedId) ?? null

  function handleSelect(app: Application) {
    setSelectedId(selectedId === app.id ? null : app.id)
  }

  function handleClose() {
    setSelectedId(null)
  }

  return (
    <section className="section-padding" id="demo">
      <div className="section-container">
        <SectionReveal className="mb-10 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Try it
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See your pipeline in action
          </h2>
          <p className="mt-3 text-base text-muted">
            Click any application to view its details. This is a live demo of the
            ApplyFlow workspace interface.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-lg)]">
            {/* Toolbar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
              <h3 className="text-sm font-semibold text-foreground">Application board</h3>
              <span className="text-xs text-muted">
                {applications.length} applications
              </span>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Board */}
              <div className="min-w-0 flex-1 overflow-x-auto p-4 sm:p-5">
                <div className="grid min-w-[280px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {STATUS_COLUMNS.map((column) => {
                    const columnApps = applications.filter((a) => a.status === column.id)
                    return (
                      <div key={column.id} className="min-w-0">
                        <div className="mb-2.5 flex items-center justify-between">
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                            {column.label}
                          </span>
                          <span className="text-[10px] font-medium text-stone-400">
                            {columnApps.length}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {columnApps.map((app) => (
                            <ApplicationCard
                              key={app.id}
                              application={app}
                              interactive="click"
                              isSelected={selectedId === app.id}
                              onClick={() => handleSelect(app)}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Details panel */}
              <aside
                className={`border-t border-border bg-stone-50/50 transition-all duration-300 lg:w-72 lg:shrink-0 lg:border-t-0 lg:border-l ${
                  selected ? 'block' : 'hidden lg:block'
                }`}
                aria-label="Application details"
              >
                {selected ? (
                  <DetailsPanel application={selected} onClose={handleClose} />
                ) : (
                  <div className="flex h-full min-h-[200px] flex-col items-center justify-center p-6 text-center lg:min-h-[320px]">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <rect x="3" y="3" width="12" height="12" rx="2" stroke="#A8A29E" strokeWidth="1.5" />
                        <path d="M6 7h6M6 10h4" stroke="#A8A29E" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-foreground">Select an application</p>
                    <p className="mt-1 text-xs text-muted">
                      Click a card to see role details, status, and next steps.
                    </p>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

function DetailsPanel({
  application,
  onClose,
}: {
  application: Application
  onClose: () => void
}) {
  return (
    <div className="p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h4 className="text-base font-bold text-foreground">{application.role}</h4>
          <p className="text-sm text-muted">{application.company}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-stone-400 hover:text-foreground lg:hidden"
          aria-label="Close details panel"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <dl className="space-y-3">
        <DetailRow label="Status">
          <span
            className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${getStatusColor(application.status)}`}
          >
            {application.statusLabel}
          </span>
        </DetailRow>

        {application.appliedDate && (
          <DetailRow label="Applied">{application.appliedDate}</DetailRow>
        )}

        {application.location && (
          <DetailRow label="Location">{application.location}</DetailRow>
        )}

        {application.nextStep && (
          <DetailRow label="Next step">{application.nextStep}</DetailRow>
        )}

        {application.notes && (
          <DetailRow label="Notes">
            <p className="text-sm leading-relaxed text-foreground">{application.notes}</p>
          </DetailRow>
        )}
      </dl>
    </div>
  )
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-stone-400">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{children}</dd>
    </div>
  )
}
