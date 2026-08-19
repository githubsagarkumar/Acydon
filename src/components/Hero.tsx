import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { ProductPreview } from './ProductPreview'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Your job search, organized
            </motion.p>

            <motion.h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              Turn your job search into a system.
            </motion.h1>

            <motion.p
              className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              ApplyFlow brings your applications, interviews, follow-ups, and preparation
              into one focused workspace.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <Button href="#cta" className="w-full sm:w-auto">
                Start organizing
              </Button>
              <Button variant="secondary" href="#how-it-works" className="w-full sm:w-auto">
                See how it works
              </Button>
            </motion.div>
          </div>

          {/* Product preview */}
          <motion.div
            className="relative min-w-0"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductPreview variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent-muted opacity-60 blur-3xl"
        aria-hidden="true"
      />
    </section>
  )
}
