import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { fetchProducts } from '../../api/api'
import LoadingSpinner from '../../components/LoadingSpinner'
import ProductsGrid from '../../components/products/ProductsGrid'
import ProductListHeader from '../../components/search/ProductListHeader'
import ProductPagination from '../../components/search/ProductPagination'
import SearchHeader from '../../components/search/SearchHeader'
import { Product } from '../../types/product'

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [productsPerPage, setProductsPerPage] = useState(20)
  const [availablePageSizes] = useState([10, 20, 30])
  const [animateCards, setAnimateCards] = useState(false)
  useEffect(() => {
    fetchInitialProducts()
  }, [currentPage, productsPerPage])

  const fetchInitialProducts = async () => {
    setIsLoading(true)
    setAnimateCards(false)
    try {
      const allProducts = await fetchProducts()
      setTotalProducts(allProducts.length)
      const indexOfLastProduct = currentPage * productsPerPage
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage
      const currentProducts = allProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      )
      setProducts(currentProducts)
      setTimeout(() => {
        setAnimateCards(true)
      }, 100)
    } catch (error) {
      toast.error('Failed to fetch products. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) {
      fetchInitialProducts()
      return
    }

    setIsLoading(true)
    setAnimateCards(false)
    try {
      const data = await fetchProducts(searchTerm)
      setTotalProducts(data.length)

      setCurrentPage(1)

      const indexOfLastProduct = currentPage * productsPerPage
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage
      const currentProducts = data.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      )

      setProducts(currentProducts)

      setTimeout(() => {
        setAnimateCards(true)
      }, 100)
    } catch (error) {
      toast.error('Failed to search products. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const totalPages = Math.ceil(totalProducts / productsPerPage)

  const paginate = (pageNumber: number) => {
    setAnimateCards(false)
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePerPageChange = (value: string) => {
    setProductsPerPage(Number(value))
    setCurrentPage(1)
  }

  const resetSearch = () => {
    setSearchTerm('')
    setCurrentPage(1)
    fetchInitialProducts()
  }
  return (
    <>
      <SearchHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className='container mx-auto px-4'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <ProductListHeader
              searchTerm={searchTerm}
              totalProducts={totalProducts}
              productsPerPage={productsPerPage}
              handlePerPageChange={handlePerPageChange}
              availablePageSizes={availablePageSizes}
            />

            <ProductsGrid
              products={products}
              animateCards={animateCards}
              searchTerm={searchTerm}
              resetSearch={resetSearch}
            />
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </>
  )
}

export default LandingPage
