import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { Card, CardHeader } from "../card";
import { Item } from "./use-order";

type Props = {
  items: Item[];
  removeFromCart: (id: string) => void;
};

export const ShoppingCart = ({ items, removeFromCart }: Props) => {
  const totalPrice = items.reduce(
    (sum, { amount, unitPrice }) => sum + amount * unitPrice,
    0
  );

  return (
    <Card>
      <CardHeader icon={faShoppingCart}>winkelwagen</CardHeader>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="mt-4 flex justify-between items-end">
            <div>
              <div>
                <span className="uppercase font-semibold">{item.name}</span>
                <span className="ml-2 text-sm">{item.description}</span>
              </div>
              <div className="text-sm">
                <span>Aantal:</span>
                <span className="ml-2">{item.amount}</span>
              </div>
              <div className="text-sm">
                <span>Prijs:</span>
                <span className="ml-2">€ {item.unitPrice}</span>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => removeFromCart(item.id)}
              title="verwijderen"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <span>Totaal:</span>
        <span className="ml-2">€ {totalPrice}</span>
      </div>
    </Card>
  );
};
