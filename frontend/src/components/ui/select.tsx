import { Check, ChevronDown } from 'lucide-react'
import React, { forwardRef, useEffect, useRef, useState } from 'react'

// Helper function to combine class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

export interface SelectOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface SelectGroupOption {
  label: string
  options: SelectOption[]
}

export interface SelectProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  placeholder?: string
  className?: string
  children?: React.ReactNode
}

export interface SelectTriggerProps {
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

export interface SelectContentProps {
  className?: string
  children?: React.ReactNode
  position?: 'popper' | 'item-aligned'
}

export interface SelectLabelProps {
  className?: string
  children?: React.ReactNode
}

export interface SelectItemProps {
  className?: string
  children?: React.ReactNode
  value: string
  disabled?: boolean
}

export interface SelectSeparatorProps {
  className?: string
}

// Main Select component
export const Select: React.FC<SelectProps> = ({
  value,
  defaultValue,
  onChange,
  disabled,
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    value || defaultValue
  )
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleSelect = (newValue: string) => {
    setSelectedValue(newValue)
    onChange?.(newValue)
    setIsOpen(false)
  }

  return (
    <SelectContext.Provider
      value={{
        selectedValue,
        handleSelect,
        isOpen,
        setIsOpen,
        disabled: disabled || false,
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

// Context to share state between components
interface SelectContextType {
  selectedValue?: string
  handleSelect: (value: string) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  disabled: boolean
}

const SelectContext = React.createContext<SelectContextType | undefined>(
  undefined
)

const useSelectContext = () => {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within a Select')
  }
  return context
}

export const SelectGroup: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div role='group'>{children}</div>
}

export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => {
  const { selectedValue } = useSelectContext()

  const findSelectedLabel = () => {
    return selectedValue || placeholder || 'Select an option'
  }

  return <span>{findSelectedLabel()}</span>
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen, disabled } = useSelectContext()

    return (
      <button
        type='button'
        ref={ref}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
          className
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <span className='pointer-events-none'>
          <ChevronDown
            className={`${isOpen ? '!rotate-180' : ''} transition-all duration-500 h-4 w-4 opacity-50`}
          />
        </span>
      </button>
    )
  }
)
SelectTrigger.displayName = 'SelectTrigger'
export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, position = 'popper', ...props }, ref) => {
    const { isOpen } = useSelectContext()
    const portalRef = useRef<HTMLDivElement>(null)

    if (!isOpen) return null

    return (
      <div ref={portalRef} className='relative'>
        <div
          ref={ref}
          className={cn(
            'absolute z-10 max-h-96 min-w-[8rem] overflow-y-scroll rounded-md border bg-popover top-5 right-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          {...props}
        >
          <div
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
SelectContent.displayName = 'SelectContent'

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...props}
    />
  )
)
SelectLabel.displayName = 'SelectLabel'

// Item component
export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, disabled, ...props }, ref) => {
    const { selectedValue, handleSelect } = useSelectContext()
    const isSelected = selectedValue === value

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          isSelected && 'bg-accent text-accent-foreground',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        onClick={() => !disabled && handleSelect(value)}
        role='option'
        aria-selected={isSelected}
        data-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
          {isSelected && <Check className='h-4 w-4' />}
        </span>
        <span>{children}</span>
      </div>
    )
  }
)
SelectItem.displayName = 'SelectItem'

// Separator component
export const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      role='separator'
      {...props}
    />
  )
)
SelectSeparator.displayName = 'SelectSeparator'
