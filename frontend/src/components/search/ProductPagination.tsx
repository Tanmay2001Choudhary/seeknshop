import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../components/ui/pagination'
import { ProductPaginationProps } from '../../types/product'

const ProductPagination: React.FC<ProductPaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    let pages = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (currentPage <= 3) {
        pages.push(2, 3, 4)
        pages.push('ellipsis')
        pages.push(totalPages)
      }
      else if (currentPage >= totalPages - 2) {
        pages.push('ellipsis')
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      }
      else {
        pages.push('ellipsis')
        pages.push(currentPage - 1, currentPage, currentPage + 1)
        pages.push('ellipsis')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className='mt-12 pb-4'>
      <Pagination>
        <PaginationContent className='flex-wrap p-2 bg-white/80 backdrop-blur-sm shadow-md rounded-lg border border-shop-border'>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              className={`${
                currentPage === 1
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              } bg-white border-shop-border text-shop-foreground hover:bg-shop-muted hover:text-shop-primary transition-colors`}
            />
          </PaginationItem>

          {getPageNumbers().map((page, index) =>
            page === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => paginate(page as number)}
                  isActive={currentPage === page}
                  className={`${
                    currentPage === page
                      ? 'bg-shop-primary text-white border-shop-primary transform scale-110'
                      : 'bg-white text-shop-foreground hover:bg-shop-muted hover:text-shop-primary'
                  } border border-shop-border transition-all duration-300`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              className={`${
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              } bg-white border-shop-border text-shop-foreground hover:bg-shop-muted hover:text-shop-primary transition-colors`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default ProductPagination
