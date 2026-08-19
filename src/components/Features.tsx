import { SectionReveal } from './ui/SectionReveal'

const features = [
  {
    title: 'Application pipeline',
    description: 'Keep every opportunity visible from saved to offer.',
    visual: PipelineVisual,
  },
  {
    title: 'Interview workspace',
    description: 'Keep interview preparation and notes close to the application.',
    visual: InterviewVisual,
  },
  {
    title: 'Follow-up reminders',
    description: 'Make the next action visible instead of relying on memory.',
    visual: ReminderVisual,
  },
  {
    title: 'Focused dashboard',
    description: 'See what deserves attention without opening multiple spreadsheets.',
    visual: DashboardVisual,
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-border bg-surface" id="features">
      <div className="section-container">
        <SectionReveal className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for the way job searches actually work
          </h2>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <SectionReveal key={feature.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background transition-shadow duration-300 hover:shadow-[var(--shadow-md)]">
                <div className="border-b border-border bg-stone-50/50 p-5">
                  <feature.visual />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PipelineVisual() {
  const columns = [
    { label: 'Saved', count: 2, color: 'bg-stone-200' },
    { label: 'Applied', count: 3, color: 'bg-sky-200' },
    { label: 'Interview', count: 1, color: 'bg-amber-200' },
    { label: 'Offer', count: 1, color: 'bg-teal-200' },
  ]

  return (
    <div className="flex gap-2" aria-hidden="true">
      {columns.map((col) => (
        <div key={col.label} className="flex-1">
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-stone-400">
            {col.label}
          </div>
          <div className="space-y-1.5">
            {Array.from({ length: col.count }).map((_, i) => (
              <div
                key={i}
                className={`h-6 rounded ${col.color} ${i === 0 ? 'opacity-100' : 'opacity-60'}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function InterviewVisual() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-3">
        <div className="mb-2 text-[10px] font-semibold text-foreground">Software Engineer · Northstar</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-[9px] text-muted">Technical interview — Thu 2pm</span>
          </div>
          <div className="rounded bg-stone-100 px-2 py-1.5 text-[9px] text-stone-500">
            System design prep notes...
          </div>
        </div>
      </div>
    </div>
  )
}

function ReminderVisual() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {[
        { task: 'Follow up with Acme Labs', due: 'Today' },
        { task: 'Submit Orbit cover letter', due: 'In 3 days' },
      ].map((item) => (
        <div
          key={item.task}
          className="flex items-center justify-between rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-2"
        >
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded border border-stone-300" />
            <span className="text-[10px] font-medium text-foreground">{item.task}</span>
          </div>
          <span className="text-[9px] font-medium text-accent">{item.due}</span>
        </div>
      ))}
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="grid grid-cols-3 gap-2" aria-hidden="true">
      {[
        { label: 'Active', value: '7' },
        { label: 'Interviews', value: '2' },
        { label: 'Due today', value: '1' },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-[var(--radius-sm)] border border-border bg-surface p-2.5 text-center"
        >
          <div className="text-lg font-bold text-foreground">{stat.value}</div>
          <div className="text-[9px] text-muted">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
