import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Card,
  CardHeader,
  Container,
  FormElement,
  Layout,
  Order,
  Select,
  useShoppingCart,
} from "../components";

type MerchItem = {
  label: string;
  size: string;
  unitPrice: number;
};

const TEES: MerchItem[] = [
  { label: "98 - 104 €15", size: "98 - 104", unitPrice: 15 },
  { label: "110 - 116 €15", size: "110 - 116", unitPrice: 15 },
  { label: "122 - 128 €15", size: "122 - 128", unitPrice: 15 },
  { label: "134 - 148 €15", size: "134 - 148", unitPrice: 15 },
  { label: "152 - 164 €15", size: "152 - 164", unitPrice: 15 },
  { label: "XS €20", size: "XS", unitPrice: 20 },
  { label: "S €20", size: "S", unitPrice: 20 },
  { label: "M €20", size: "M", unitPrice: 20 },
  { label: "L €20", size: "L", unitPrice: 20 },
  { label: "XL €20", size: "XL", unitPrice: 20 },
  { label: "XXL €20", size: "XXL", unitPrice: 20 },
];

const CAPS: MerchItem[] = [
  { label: "Kinderen €20", size: "Kinderen", unitPrice: 20 },
  { label: "Volwassenen €20", size: "Volwassenen", unitPrice: 20 },
];

const NO_VALUE = "NO_VALUE";

const MerchItems = ({
  name,
  merchItems,
}: {
  name: string;
  merchItems: MerchItem[];
}) => {
  const { addToCart } = useShoppingCart();
  const [merchItem, setMerchItem] = useState<MerchItem | undefined>(undefined);

  return (
    <div>
      <FormElement label="Maat">
        <Select
          value={merchItem?.size ?? NO_VALUE}
          onChange={(e) =>
            setMerchItem(merchItems.find((t) => t.size === e.target.value))
          }
        >
          <option label="Selecteer" value={NO_VALUE} />
          {merchItems.map((m) => (
            <option key={m.size} label={m.label} value={m.size} />
          ))}
        </Select>
      </FormElement>
      <Button
        type="button"
        disabled={!merchItem}
        onClick={() => {
          if (!merchItem) {
            return;
          }

          addToCart({
            id: uuid(),
            name,
            description: merchItem.size,
            amount: 1,
            unitPrice: merchItem.unitPrice,
          });

          setMerchItem(undefined);
        }}
      >
        In winkelwagen
      </Button>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <section className="bg-gray-50 pt-8 pb-8 md:pb-0">
        <Container>
          <div className="md:flex md:flex-row-reverse md:items-center">
            <div>
              <img src="/ijshockij.png" alt="ijshockij logo" />
            </div>
            <div className="mx-4 mt-4 md:mt-0">
              <h2 className="text-xl">
                Bestel jouw exclusieve ijshockij merchandise!
              </h2>
              <p>
                De opbrengst wordt integraal gebruikt voor de aankoop van
                materiaal om onze kampen nog beter te maken.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-8 px-4">
        <Container>
          <Order>
            <div className="grid md:grid-cols-2 auto-rows-auto gap-8">
              <Card>
                <CardHeader icon={faTshirt}>t-shirt</CardHeader>
                <div className="flex justify-center">
                  <img src="/tshirt.png" alt="t-shirt" />
                </div>
                <MerchItems name="t-shirt" merchItems={TEES} />
              </Card>
              <Card>
                <CardHeader icon={faTshirt}>trucker cap</CardHeader>
                <div className="flex justify-center">
                  <img src="/trucker-cap.png" alt="trucker cap" />
                </div>
                <MerchItems name="trucker cap" merchItems={CAPS} />
              </Card>
            </div>
          </Order>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
