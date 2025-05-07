import React from 'react'
import BackToSearchButton from './BackToSearchButton'

const ProductNotFound: React.FC = () => {
  return (
    <div className='container mx-auto py-12 px-4 text-center'>
      <h1 className='text-2xl font-bold mb-4'>Product not found</h1>
      <BackToSearchButton />
    </div>
  )
}

export default ProductNotFound
