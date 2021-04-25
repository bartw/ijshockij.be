import { createContext, ReactNode, useContext } from "react";
import { Item } from "./use-order";

type ShoppingCartContextType = { addToCart: (item: Item) => void };

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export const ShoppingCartProvider = ({
  value,
  children,
}: {
  value: ShoppingCartContextType;
  children: ReactNode;
}) => (
  <ShoppingCartContext.Provider value={value}>
    {children}
  </ShoppingCartContext.Provider>
);

export const useShoppingCart = (): ShoppingCartContextType => {
  const shoppingCartContext = useContext(ShoppingCartContext);

  if (!shoppingCartContext) {
    throw new Error(
      "useShoppingCart must be used within <ShoppingCartProvider>"
    );
  }

  return shoppingCartContext;
};
