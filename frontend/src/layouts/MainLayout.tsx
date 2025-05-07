import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { MainLayoutProps } from '../types/layout'
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen bg-shop-background bg-rajasthani-pattern'>
      <header className='bg-white shadow-md sticky top-0 z-50 border-b-4 border-shop-secondary'>
        <div className='container mx-auto py-6 px-4'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <h1 className='text-3xl font-bold text-shop-primary text-center md:text-left font-serif relative'>
              <span className='relative inline-block bg-gradient-to-r from-shop-secondary to-shop-primary bg-clip-text text-transparent'>
                SeeknShop
                <span className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-shop-secondary to-shop-primary rounded-full'></span>
              </span>
            </h1>
          </div>
        </div>
      </header>
      <main className='flex-grow'>{children}</main>
      <ToastContainer position='top-right' autoClose={3000} />
      <footer className='bg-shop-foreground text-white py-8 mt-16 border-t-4 border-shop-secondary'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-serif mb-4 text-shop-secondary'>
                SeeknShop
              </h3>
              <p className='text-sm text-shop-muted'>
                Your one-stop destination for handpicked, high-quality products
                made to inspire your everyday lifestyle.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-serif mb-4 text-shop-secondary'>
                Newsletter
              </h3>
              <p className='text-sm mb-2 text-shop-muted'>
                Subscribe to receive updates on new arrivals and special
                promotions.
              </p>
              <div className='flex'>
                <Input
                  placeholder='Email address'
                  className='rounded-r-none bg-white/10 border-shop-border focus:border-shop-secondary placeholder:text-white'
                />
                <Button className='rounded-l-none bg-shop-secondary hover:bg-shop-primary'>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className='border-t border-white/10 mt-8 pt-6 text-center text-sm text-shop-muted'>
            <p>© 2025 SeeknShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
