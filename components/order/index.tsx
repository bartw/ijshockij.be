import { FormEvent, ReactNode, useState } from "react";
import {
  addToCart,
  completeOrder,
  failOrder,
  Item,
  removeFromCart,
  setEmail,
  setName,
  setNewsletter,
  submitOrder,
  useOrder,
} from "./use-order";
import { Information } from "./information";
import { ShoppingCart } from "./shopping-cart";
import { ShoppingCartProvider, useShoppingCart } from "./shopping-cart-context";

export { useShoppingCart };

type Props = {
  children: ReactNode;
};

export const Order = ({ children }: Props) => {
  const [order, dispatch] = useOrder();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitOrder(dispatch);

    fetch("api/checkout", {
      method: "POST",
      body: JSON.stringify({ order }),
    })
      .then(() => completeOrder(dispatch))
      .catch(() => failOrder(dispatch));
  };

  return (
    <ShoppingCartProvider
      value={{ addToCart: (item: Item) => addToCart(dispatch, item) }}
    >
      <form onSubmit={handleSubmit}>
        {children}
        <div className="mt-8">
          <ShoppingCart
            items={order.cart}
            removeFromCart={(id: string) => removeFromCart(dispatch, id)}
          />
        </div>
        <div className="mt-8">
          <Information
            state={order.state}
            name={order.name}
            email={order.email}
            newsletter={order.newsletter}
            onChangeName={(name: string) => setName(dispatch, name)}
            onChangeEmail={(email: string) => setEmail(dispatch, email)}
            onChangeNewsletter={(newsletter: boolean) =>
              setNewsletter(dispatch, newsletter)
            }
          />
        </div>
      </form>
    </ShoppingCartProvider>
  );
};
