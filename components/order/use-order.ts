import { useReducer } from "react";

export type Item = {
  id: string;
  name: string;
  description: string;
  amount: number;
  unitPrice: number;
};

type Order = {
  cart: Item[];
  name: string;
  email: string;
  newsletter: boolean;
  state: "INITIAL" | "PENDING" | "ERROR" | "SUCCESS";
};

const INITIAL_ORDER: Order = {
  cart: [],
  name: "",
  email: "",
  newsletter: false,
  state: "INITIAL",
};

type Action =
  | { type: "ADD_TO_CART"; item: Item }
  | { type: "REMOVE_FROM_CART"; id: string }
  | { type: "SET_NAME"; name: string }
  | { type: "SET_EMAIL"; email: string }
  | { type: "SET_NEWSLETTER"; newsletter: boolean }
  | { type: "SUBMIT_ORDER" }
  | { type: "FAIL_ORDER" }
  | { type: "COMPLETE_ORDER" };

type Dispatch = (action: Action) => void;

export const addToCart = (dispatch: Dispatch, item: Item) =>
  dispatch({ type: "ADD_TO_CART", item });
export const removeFromCart = (dispatch: Dispatch, id: string) =>
  dispatch({ type: "REMOVE_FROM_CART", id });
export const setName = (dispatch: Dispatch, name: string) =>
  dispatch({ type: "SET_NAME", name });
export const setEmail = (dispatch: Dispatch, email: string) =>
  dispatch({ type: "SET_EMAIL", email });
export const setNewsletter = (dispatch: Dispatch, newsletter: boolean) =>
  dispatch({ type: "SET_NEWSLETTER", newsletter });
export const submitOrder = (dispatch: Dispatch) =>
  dispatch({ type: "SUBMIT_ORDER" });
export const failOrder = (dispatch: Dispatch) =>
  dispatch({ type: "FAIL_ORDER" });
export const completeOrder = (dispatch: Dispatch) =>
  dispatch({ type: "COMPLETE_ORDER" });

const reducer = (order: Order, action: Action): Order => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...order, cart: [...order.cart, action.item] };
    case "REMOVE_FROM_CART":
      return {
        ...order,
        cart: order.cart.filter((item) => item.id !== action.id),
      };
    case "SET_NAME":
      return { ...order, name: action.name };
    case "SET_EMAIL":
      return { ...order, email: action.email };
    case "SET_NEWSLETTER":
      return { ...order, newsletter: action.newsletter };
    case "SUBMIT_ORDER":
      return { ...order, state: "PENDING" };
    case "FAIL_ORDER":
      return { ...order, state: "ERROR" };
    case "COMPLETE_ORDER":
      return { ...INITIAL_ORDER, state: "SUCCESS" };
    default:
      return order;
  }
};

export const useOrder = () => useReducer(reducer, INITIAL_ORDER);
