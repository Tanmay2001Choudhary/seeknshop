const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-24 w-full'>
      <div className='relative'>
        <div className='animate-spin rounded-full h-16 w-16 border-4 border-t-shop-primary border-r-shop-secondary border-b-shop-accent border-l-shop-secondary'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-8 w-8 rounded-full bg-shop-background border-2 border-shop-border'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
