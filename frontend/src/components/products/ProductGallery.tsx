import { ProductGalleryProps } from "../../types/product"

const ProductGallery: React.FC<ProductGalleryProps> = ({ imageUrl, name }) => {
  return (
    <div className='space-y-4'>
      <div className='bg-white rounded-lg overflow-hidden aspect-square border border-shop-border shadow-lg'>
        <img
          src={imageUrl}
          alt={name}
          className='w-full h-full object-contain p-4'
        />
      </div>
    </div>
  )
}

export default ProductGallery
