import { SectionReveal } from './ui/SectionReveal'

const problems = [
  'Applications spread across tabs, spreadsheets, and sticky notes',
  'Follow-ups are easy to forget once a week passes',
  'Interview preparation gets disconnected from the actual opportunity',
  'It becomes difficult to see what needs attention next',
]

export function ProblemSection() {
  return (
    <section className="section-padding border-t border-border bg-surface" id="product">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Job hunting gets messy fast.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              When every application lives in a different place, the mental overhead adds up.
              You spend more time remembering where things are than moving them forward.
            </p>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.15} className="mt-12">
          <ul className="mx-auto grid max-w-2xl gap-3 sm:gap-4">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-background px-4 py-3.5 sm:px-5 sm:py-4"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-400"
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-foreground sm:text-base">{problem}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            ApplyFlow keeps each opportunity in one place — from the first save to the final
            decision — so you always know where an application stands and what to do next.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
