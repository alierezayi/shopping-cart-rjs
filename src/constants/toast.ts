export const MESSAGES = {
  addToCart: {
    title: "Add to cart",
    description: (prodName: string) => `You added (${prodName}) to cart.`,
  },
  removeFromCart: {
    title: "Remove from cart",
    description: (prodName: string) => `You removed (${prodName}) from cart.`,
  },
};
