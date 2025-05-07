export interface Product {
  id: number
  name: string
  description: string
  price: number
  stock: number
  brand: string
  category: string
  imageUrl: string
}

export interface ProductPaginationProps {
  currentPage: number
  totalPages: number
  paginate: (pageNumber: number) => void
}

export interface ProductsGridProps {
  products: Product[]
  animateCards: boolean
  searchTerm: string
  resetSearch: () => void
}

export interface ProductGalleryProps {
  imageUrl: string
  name: string
}

export interface ProductInfoProps {
  product: Product
}