import { sumProducts } from "@/lib/helpers";
import { CartStateType, ProductType } from "@/lib/types";
import { createContext, Dispatch, useContext, useReducer } from "react";

type CartContextType = {
  state: CartStateType;
  dispatch: Dispatch<ActionType>;
};

type CartProviderType = {
  children: React.ReactNode;
};

type ActionType =
  | { type: "ADD_TO_CART"; payload: ProductType }
  | { type: "REMOVE_FROM_CART"; payload: ProductType }
  | { type: "INCREMENT"; payload: ProductType }
  | { type: "DECREMENT"; payload: ProductType }
  | { type: "CHECKOUT" };

const CartContext = createContext<CartContextType | null>(null);

const initialState: CartStateType = {
  cart: [],
  counter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state: CartStateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (!existInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      return {
        cart: [...state.cart],
        ...sumProducts(state.cart),
        checkout: false,
      };

    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...newCart],
        ...sumProducts(newCart),
      };

    case "INCREMENT":
      const increaseIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (increaseIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === increaseIndex
            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          ...sumProducts(updatedCart),
        };
      }
      return state;

    case "DECREMENT":
      const decreaseIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (
        decreaseIndex !== -1 &&
        (state.cart[decreaseIndex].quantity ?? 0) > 0
      ) {
        const updatedCart = state.cart.map((item, index) =>
          index === decreaseIndex
            ? { ...item, quantity: (item.quantity ?? 0) - 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
          ...sumProducts(updatedCart),
        };
      }
      return state;

    case "CHECKOUT":
      return {
        cart: [],
        counter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw new Error("Invalid Action");
  }
};

function CartProvider({ children }: CartProviderType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within an CartProvider");
  }

  const { state, dispatch } = context;
  return [state, dispatch] as [CartStateType, Dispatch<ActionType>];
}
