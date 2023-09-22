export const createCartSlice = (set, get) => ({
  carts: [],
  priceCart: 0,
  addToCart: (product) => {
    const carts = get().carts;
    let priceCart = get().priceCart;
    const findProduct = carts.find(p => p.id === product.id);
    if (findProduct) {
        findProduct.quantity += 1;
        priceCart += findProduct.price
    } else {
        carts.push({ ...product, quantity: 1 });
        priceCart += product.price
    }
    set({ carts, priceCart });
  },
  removeFromCart: (product) => {
    const carts = get().carts;
    let priceCart = get().priceCart;
    const rest = carts.filter(p => p.id !== product.id);
    priceCart -= (product.price * product.quantity)
    set({ carts: rest, priceCart });
  },
})