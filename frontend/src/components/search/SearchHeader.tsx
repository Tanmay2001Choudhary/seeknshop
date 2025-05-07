import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Separator } from '../ui/separator'

interface SearchHeaderProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  handleSearch: (e: React.FormEvent) => void
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  return (
    <div className='container mx-auto py-6 px-4'>
      <form
        onSubmit={handleSearch}
        className='flex gap-3 max-w-2xl mx-auto md:mx-0'
      >
        <Input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex-1 border-shop-border focus:border-shop-secondary bg-shop-muted'
        />
        <Button
          type='submit'
          className='bg-shop-primary hover:bg-shop-accent text-white'
        >
          <Search className='mr-2 h-4 w-4' /> Search
        </Button>
      </form>
      <Separator className='my-6 py-0.5 rounded !bg-gradient-to-r from-shop-secondary to-shop-primary' />
    </div>
  )
}

export default SearchHeader
