import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select' // Import our custom Select component

interface ProductListHeaderProps {
  searchTerm: string
  totalProducts: number
  productsPerPage: number
  handlePerPageChange: (value: string) => void
  availablePageSizes: number[]
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({
  searchTerm,
  totalProducts,
  productsPerPage,
  handlePerPageChange,
  availablePageSizes,
}) => {
  return (
    <div className='mb-8 relative'>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <h2 className='text-xl font-serif'>
          <span className='text-shop-foreground relative'>
            {searchTerm ? `Search results for "${searchTerm}"` : 'Our Products'}
            <span className='absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-shop-secondary to-shop-primary rounded'></span>
          </span>
        </h2>

        <div className='flex flex-row items-center gap-3 bg-white py-1.5 px-3 rounded-full border border-shop-border shadow-sm animate-fade-in'>
          <div className='flex items-center'>
            <span className='text-sm font-medium bg-shop-primary/10 text-shop-primary px-3 py-1 rounded-full'>
              {totalProducts} {totalProducts === 1 ? 'item' : 'items'}
            </span>
          </div>
          <div className='h-4 w-px bg-shop-primary/50'></div>

          <div className='flex items-center gap-2'>
            <span className='text-sm text-shop-foreground/70 font-medium'>
              Show:
            </span>
            <Select
              value={productsPerPage.toString()}
              onChange={handlePerPageChange}
            >
              <SelectTrigger className='h-8 w-[70px] border-shop-border/50 bg-transparent hover:bg-shop-muted/50 focus:ring-shop-secondary'>
                <SelectValue placeholder='20' />
              </SelectTrigger>
              <SelectContent className='bg-white border-shop-border'>
                <SelectGroup>
                  {availablePageSizes.map((size) => (
                    <SelectItem
                      key={size}
                      value={size.toString()}
                      className='cursor-pointer hover:bg-shop-muted'
                    >
                      {size}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListHeader
