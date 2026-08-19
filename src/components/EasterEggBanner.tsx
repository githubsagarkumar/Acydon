interface EasterEggBannerProps {
  visible: boolean
}

export function EasterEggBanner({ visible }: EasterEggBannerProps) {
  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-accent/30 bg-accent-muted px-5 py-2.5 text-sm font-medium text-accent shadow-[var(--shadow-md)]"
      role="status"
      aria-live="polite"
    >
      You found the easter egg. Good luck with your search.
    </div>
  )
}
