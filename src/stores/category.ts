import create from 'zustand'
import { Category } from '../config/types'

type Store = {
  categories: Category[],
  setCategories: (payload: Category[]) => void
}

const categoryStore = create<Store>(set => ({
  categories: [],
  setCategories(payload) {
    set(() => ({
      categories: payload
    }))
  }
}))

export default categoryStore