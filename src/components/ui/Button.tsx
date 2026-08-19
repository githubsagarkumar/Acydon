import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-sm border border-transparent',
  secondary:
    'bg-surface text-foreground border border-border hover:border-stone-300 hover:bg-stone-50 shadow-sm',
  ghost: 'text-muted hover:text-foreground hover:bg-stone-100 border border-transparent',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  const combined = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combined} {...props}>
      {children}
    </button>
  )
}
