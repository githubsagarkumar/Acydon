import { SectionReveal } from './ui/SectionReveal'
import { Button } from './ui/Button'

export function FinalCTA() {
  return (
    <section className="section-padding" id="cta">
      <div className="section-container">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-foreground px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.15),transparent_60%)]"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make the next application easier to manage.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-400">
                Keep the work in one place and spend less time figuring out what comes next.
              </p>
              <div className="mt-8">
                <Button
                  href="#"
                  className="bg-accent text-white hover:bg-accent-hover border-transparent px-6 py-3"
                >
                  Start organizing
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
