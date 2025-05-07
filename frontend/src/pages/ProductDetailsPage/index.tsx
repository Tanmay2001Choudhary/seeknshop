import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getProduct } from '../../api/api'
import LoadingSpinner from '../../components/LoadingSpinner'
import BackToSearchButton from '../../components/products/BackToSearchButton'
import ProductGallery from '../../components/products/ProductGallery'
import ProductInfo from '../../components/products/ProductInfo'
import ProductNotFound from '../../components/products/ProductNotFound'
import { Product } from '../../types/product'

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, _] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const fetchProduct = async () => {
      if (!id) return

      setIsLoading(true)
      try {
        const data = await getProduct(parseInt(id))
        setProduct(data)
      } catch (error) {
        toast('Failed to load product details. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id, toast])

  if (isLoading) {
    return (
      <div className='container mx-auto py-8 px-4'>
        <BackToSearchButton />
        <LoadingSpinner />
      </div>
    )
  }

  if (error || !product) {
    return <ProductNotFound />
  }

  return (
    <div className='min-h-screen bg-shop-background bg-rajasthani-pattern'>
      <div className='container mx-auto py-8 px-4'>
        <BackToSearchButton />

        <div className='grid md:grid-cols-2 gap-8 mt-8'>
          <ProductGallery imageUrl={product.imageUrl} name={product.name} />

          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
