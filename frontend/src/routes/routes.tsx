import LandingPage from '../pages/LandingPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'

export const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetailsPage />,
  },
]
