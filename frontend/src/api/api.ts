import axios from 'axios'
import { Product } from '../types/product'
const url = import.meta.env.VITE_BACKEND_URL

export async function fetchProducts(
  searchTerm: string = ''
): Promise<Product[]> {
  try {
    const response = await axios.get(`${url}/products`, {
      params: searchTerm ? { search: searchTerm } : {},
    })
    return response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}

export async function getProduct(id: number): Promise<Product> {
  try {
    const response = await fetch(`${url}/products/${id}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Failed to get product ${id}:`, error)
    throw error
  }
}
