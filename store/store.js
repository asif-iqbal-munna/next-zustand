import { create } from 'zustand'
import { createProductSlice } from './productSlice'
import { createCartSlice } from './cartSlice'
import { persist, createJSONStorage  } from 'zustand/middleware'

export const useBoundStore = create(persist((...a) => ({
  ...createProductSlice(...a),
  ...createCartSlice(...a),
}),
{
  name: 'e-com',
  storage: createJSONStorage(() => sessionStorage),
}))