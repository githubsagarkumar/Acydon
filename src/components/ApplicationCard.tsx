import { motion } from 'framer-motion'
import { type Application, getStatusColor } from '../data/applications'

interface ApplicationCardProps {
  application: Application
  interactive?: 'hover' | 'click' | 'none'
  isSelected?: boolean
  onClick?: () => void
  compact?: boolean
}

export function ApplicationCard({
  application,
  interactive = 'none',
  isSelected = false,
  onClick,
  compact = false,
}: ApplicationCardProps) {

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className={`truncate font-semibold text-foreground ${compact ? 'text-xs' : 'text-sm'}`}>
            {application.role}
          </p>
          <p className={`truncate text-muted ${compact ? 'text-[11px]' : 'text-xs'} mt-0.5`}>
            {application.company}
          </p>
        </div>
        {application.location && !compact && (
          <span className="shrink-0 text-[10px] text-stone-400" aria-hidden="true">
            <LocationIcon />
          </span>
        )}
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <span
          className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium ${getStatusColor(application.status)}`}
        >
          {application.statusLabel}
        </span>
        {application.appliedDate && (
          <span className="text-[10px] text-stone-400">{application.appliedDate}</span>
        )}
      </div>

      {application.nextStep && !compact && (
        <p className="mt-2 text-[10px] text-stone-400 line-clamp-1">
          Next: {application.nextStep}
        </p>
      )}
    </>
  )

  const baseClasses = `rounded-[var(--radius-sm)] border bg-surface p-3 text-left transition-all duration-200 ${
    compact ? 'p-2.5' : 'p-3'
  }`

  const stateClasses = isSelected
    ? 'border-accent shadow-md ring-1 ring-accent/20'
    : 'border-border shadow-[var(--shadow-card)]'

  if (interactive === 'hover') {
    return (
      <motion.div
        className={`${baseClasses} ${stateClasses} cursor-default`}
        whileHover={{
          y: -3,
          boxShadow: '0 8px 24px rgba(28, 25, 23, 0.1)',
          borderColor: 'rgba(13, 148, 136, 0.3)',
        }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    )
  }

  if (interactive === 'click') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isSelected}
        aria-label={`View details for ${application.role} at ${application.company}`}
        className={`${baseClasses} ${stateClasses} w-full cursor-pointer hover:border-stone-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        {cardContent}
      </button>
    )
  }

  return <div className={`${baseClasses} ${stateClasses}`}>{cardContent}</div>
}

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1a3 3 0 0 0-3 3c0 2.25 3 5.5 3 5.5s3-3.25 3-5.5a3 3 0 0 0-3-3Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="6" cy="4" r="1" fill="currentColor" />
    </svg>
  )
}
