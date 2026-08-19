import { SectionReveal } from './ui/SectionReveal'

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Add an application and keep the important information together.',
    icon: CaptureIcon,
  },
  {
    number: '02',
    title: 'Track',
    description: 'Move applications through your pipeline as they progress.',
    icon: TrackIcon,
  },
  {
    number: '03',
    title: 'Prepare',
    description: 'Keep interviews, notes, and follow-ups connected to the opportunity.',
    icon: PrepareIcon,
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding" id="how-it-works">
      <div className="section-container">
        <SectionReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three steps to a clearer search
          </h2>
        </SectionReveal>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <SectionReveal key={step.number} delay={index * 0.1}>
              <div className="relative flex flex-col items-start">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-12 hidden h-px w-[calc(100%+1.5rem)] bg-border sm:block"
                    aria-hidden="true"
                  />
                )}

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface shadow-[var(--shadow-sm)]">
                  <step.icon />
                </div>

                <span className="mb-2 text-xs font-semibold tracking-wider text-accent">
                  Step {step.number}
                </span>
                <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaptureIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="#0D9488" strokeWidth="1.5" />
      <path d="M7 10h6M10 7v6" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TrackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 6h12M4 10h8M4 14h10" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="14" r="2" fill="#0D9488" />
    </svg>
  )
}

function PrepareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 4h10v12H5z"
        stroke="#0D9488"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 8h6M7 11h4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
