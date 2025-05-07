import * as React from 'react'
import { cn } from '../../lib/utils'

type SeparatorVariant = 'horizontal' | 'vertical'
type SeparatorAppearance = 'default' | 'subtle' | 'accent' | 'bold'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SeparatorVariant
  appearance?: SeparatorAppearance
  decorative?: boolean
}

const getSeparatorClasses = (
  variant: SeparatorVariant = 'horizontal',
  appearance: SeparatorAppearance = 'default',
  className?: string
): string => {
  const baseClasses = 'shrink-0'

  const variantClasses = {
    horizontal: 'h-[1px] w-full',
    vertical: 'h-full w-[1px]',
  }

  const appearanceClasses = {
    default: 'bg-border',
    subtle: 'bg-border/50',
    accent: 'bg-primary',
    bold: variant === 'horizontal' ? 'bg-border h-[2px]' : 'bg-border w-[2px]',
  }

  return cn(
    baseClasses,
    variantClasses[variant],
    appearanceClasses[appearance],
    className
  )
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      variant = 'horizontal',
      appearance = 'default',
      decorative = true,
      ...props
    },
    ref
  ) => {
    const ariaProps = !decorative
      ? { role: 'separator', 'aria-orientation': variant }
      : { role: 'presentation' }

    return (
      <div
        ref={ref}
        className={getSeparatorClasses(variant, appearance, className)}
        {...ariaProps}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'

export { Separator }
