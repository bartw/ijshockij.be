import { FormEvent, ReactNode, useState } from "react";
import {
  addToCart,
  Item,
  removeFromCart,
  resetOrder,
  setEmail,
  setName,
  setNewsletter,
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
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);

    fetch("api/checkout", {
      method: "POST",
      body: JSON.stringify({ order }),
    }).finally(() => {
      resetOrder(dispatch);
      setIsPending(false);
    });
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
            isPending={isPending}
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
