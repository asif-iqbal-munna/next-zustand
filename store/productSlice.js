export const createProductSlice = (set) => ({
  products: [],
  getProducts: async () => {
    const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 84000 }})
    set({ products: await res.json() })
  },
})