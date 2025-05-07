import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'

const BackToSearchButton: React.FC = () => {
  return (
    <Link to='/'>
      <Button
        variant='outline'
        className='mb-4 border-shop-primary text-shop-primary hover:bg-shop-primary hover:text-white'
      >
        <ArrowLeft className='mr-2 h-4 w-4' /> Back to Search
      </Button>
    </Link>
  )
}

export default BackToSearchButton
