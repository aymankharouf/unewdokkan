import create from 'zustand'
import { BasketPack } from '../config/types'

type Store = {
  basket: BasketPack[],
  setBasket: (payload: BasketPack[]) => void,
}

const basketStore = create<Store>(set => ({
  basket: [],
  setBasket(payload) {
    set(() => ({
      basket: payload
    }))
  }
}))

export default basketStore