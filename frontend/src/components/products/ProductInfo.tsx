import React from 'react'
import { ProductInfoProps } from '../../types/product'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-shop-border relative'>
      <div className='absolute top-0 left-0 right-0 h-1 bg-shop-secondary'></div>
      <div className='flex flex-wrap gap-2 mb-4'>
        <Badge className='bg-shop-secondary !text-base px-6 text-white font-normal'>
          {product.category}
        </Badge>
      </div>

      <h1 className='text-3xl font-serif mb-3 text-shop-foreground'>
        {product.name}
      </h1>
      <Badge
        variant='outline'
        className='border-shop-primary !text-base px-6 bg-gradient-to-r from-shop-secondary to-shop-primary bg-clip-text text-transparent text-shop-primary'
      >
        {product.brand}
      </Badge>

      <Separator className='my-4 bg-shop-border' />

      <div className='flex items-end gap-3 mb-6'>
        <div className='text-3xl font-bold text-shop-primary font-serif'>
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div className='prose max-w-none mb-8'>
        <h3 className='text-lg font-medium mb-2 text-shop-foreground font-serif'>
          Description
        </h3>
        <p className='text-shop-foreground/80'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductInfo
