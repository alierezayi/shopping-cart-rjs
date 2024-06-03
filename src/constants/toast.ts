export const MESSAGES = {
  cart: {
    addToCart: {
      type: "success",
      title: "Add to cart",
      desc: `You added 1 item to cart successfully.`,
    },
    removeFromCart: {
      type: "success",
      title: "Remove from cart",
      desc: `You removed 1 item from cart successfully.`,
    },
  },
  error: {
    networkConnection: {
      type: "error",
      title: "Network Error",
      desc: "Please check your internet status!",
    },
    unexpectedError: {
      type: "error",
      title: "Uh oh! Something went wrong.",
      desc: "Sorry, an unexpected error occurred!",
    },
  },
};
