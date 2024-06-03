import { CartItemType, CartStateType } from "@/lib/types";

const sumPrice = (items: CartItemType[]) => {
  const total = items
    .reduce(
      (total, product) => total + product.price * (product.quantity ?? 0),
      0
    )
    .toFixed(2);
  return total as string | number;
};

const sumQuantity = (items: CartItemType[]) => {
  const counter = items.reduce(
    (counter, product) => counter + (product.quantity ?? 0),
    0
  );
  return counter as number;
};

const productQuantity = (state: CartStateType, id: number) => {
  const index = state.cart.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.cart[index].quantity as number;
  }
};

const sumProducts = (items: CartItemType[]) => {
  const counter = items.reduce(
    (counter, product) => counter + (product.quantity ?? 0),
    0
  );
  const total = items
    .reduce(
      (total, product) => total + product.price * (product.quantity ?? 0),
      0
    )
    .toFixed(2);
  return { counter, total } as { counter: number; total: number | string };
};

export { sumPrice, sumQuantity, sumProducts, productQuantity };
