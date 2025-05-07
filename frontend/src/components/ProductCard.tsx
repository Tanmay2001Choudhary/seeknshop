import { Link } from 'react-router-dom'
import { Product } from '../types/product'
import { Card, CardContent } from './ui/card'
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className='h-full hover:shadow-xl transition-all duration-300 overflow-hidden border-shop-border group bg-white relative'>
        <div className='absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-shop-secondary  to-shop-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10'></div>

        <div className='aspect-square overflow-hidden bg-shop-muted relative'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
          />
        </div>
        <CardContent className='pt-4'>
          <h3 className='font-medium text-lg mb-1 truncate group-hover:text-shop-primary transition-colors font-serif'>
            {product.name}
          </h3>
          <p className='text-sm text-shop-foreground/70 mb-2 truncate'>
            {product.brand}
          </p>
          <div className='flex items-center justify-between'>
            <div className='inline-flex items-center px-2 py-1 rounded-full bg-shop-muted text-xs border border-shop-border'>
              {product.category}
            </div>
            <p className='text-right font-bold text-shop-primary text-lg font-serif'>
              ${product.price.toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
