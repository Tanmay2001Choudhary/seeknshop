import clsx from 'clsx' // Update path if needed
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Button } from './button'

type PaginationProps = React.ComponentProps<'nav'>

export const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={clsx('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

export const PaginationContent = forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={clsx('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

export const PaginationItem = forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={clsx(className)} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
  size?: 'default' | 'icon'
} & React.ComponentProps<typeof Button>

export const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  variant,
  ...props
}: PaginationLinkProps) => (
  <Button
    variant={isActive ? 'outline' : variant ?? 'ghost'}
    size={size}
    aria-current={isActive ? 'page' : undefined}
    className={clsx(
      isActive &&
        'border-2 border-shop-secondary bg-shop-primary text-white hover:bg-shop-primary/90 hover:text-white',
      'focus:ring-2 focus:ring-shop-secondary focus:ring-offset-2 transition-all duration-200 transform hover:scale-105',
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

export const PaginationPrevious = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={clsx(
      'gap-1 pl-2.5 border border-shop-border animate-fade-in hover:-translate-x-1',
      className
    )}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

export const PaginationNext = ({
  className,
  ...props
}: PaginationLinkProps) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={clsx(
      'gap-1 pr-2.5 border border-shop-border animate-fade-in hover:translate-x-1',
      className
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={clsx(
      'flex h-9 w-9 items-center justify-center text-shop-primary animate-pulse',
      className
    )}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'
