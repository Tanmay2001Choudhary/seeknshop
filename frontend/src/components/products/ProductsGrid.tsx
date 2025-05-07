import React from 'react'
import { Product } from '../../types/product'
import ProductCard from '../ProductCard'

interface ProductsGridProps {
  products: Product[]
  animateCards: boolean
  searchTerm: string
  resetSearch: () => void
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  animateCards,
  resetSearch,
}) => {
  if (products.length === 0) {
    return (
      <div className='text-center py-16 bg-white rounded-lg border border-shop-border shadow-sm'>
        <p className='text-lg text-shop-foreground mb-4'>No products found.</p>
        <button
          onClick={resetSearch}
          className='px-4 py-2 border border-shop-primary text-shop-primary rounded-md hover:bg-shop-primary hover:text-white transition-colors'
        >
          View all products
        </button>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`transform transition-all duration-500 ${
            animateCards
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductsGrid
