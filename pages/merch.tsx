import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faPlusCircle,
  faTrashAlt,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { FormEvent } from "react";
import {
  Button,
  Card,
  CardHeader,
  Container,
  FormElement,
  Input,
  Layout,
  Select,
} from "../components";
import {
  addTee,
  KidsTeeSize,
  removeTee,
  setCaps,
  setEmail,
  setKidsCaps,
  setName,
  setNewsletter,
  setTeeSize,
  setTeeType,
  TeeType,
  UnisexTeeSize,
  useMerch,
} from "../hooks";

const TYPES: TeeType[] = ["KIDS", "UNISEX"];

const KIDS: KidsTeeSize[] = [
  "98 - 104",
  "110 - 116",
  "122 - 128",
  "134 - 148",
  "152 - 164",
];

const UNISEX: UnisexTeeSize[] = ["XS", "S", "M", "L", "XL", "XXL"];

const TeeTypeSelect = ({
  type,
  onSetType,
}: {
  type?: TeeType;
  onSetType: (type?: TeeType) => void;
}) => (
  <FormElement label="Type">
    <Select
      value={type}
      onChange={(e) => {
        const typeToSelect =
          TYPES.find((t) => t === e.target.value) ?? undefined;
        onSetType(typeToSelect);
      }}
    >
      <option label="Selecteer" value={undefined} />
      {TYPES.map((t) => (
        <option key={t} label={t} value={t} />
      ))}
    </Select>
  </FormElement>
);

const TeeSizeSelect = ({
  type,
  size,
  onSetSize,
}: {
  type?: TeeType;
  size?: KidsTeeSize | UnisexTeeSize;
  onSetSize: (size?: KidsTeeSize | UnisexTeeSize) => void;
}) => (
  <FormElement label="Maat">
    <Select
      disabled={!type}
      value={size}
      onChange={(e) => {
        const sizeToSelect = (() => {
          if (type === "KIDS") {
            return KIDS.find((t) => t === e.target.value) ?? undefined;
          }
          if (type === "UNISEX") {
            return UNISEX.find((t) => t === e.target.value) ?? undefined;
          }
          return undefined;
        })();
        onSetSize(sizeToSelect);
      }}
    >
      <option label="Selecteer" value={undefined} />
      {type === "KIDS" &&
        KIDS.map((s) => <option key={s} label={s} value={s} />)}
      {type === "UNISEX" &&
        UNISEX.map((s) => <option key={s} label={s} value={s} />)}
    </Select>
  </FormElement>
);

const TeeItem = ({
  isFirst,
  type,
  size,
  onSetType,
  onSetSize,
  onRemove,
}: {
  isFirst: boolean;
  type?: TeeType;
  size?: KidsTeeSize | UnisexTeeSize;
  onSetType: (type?: TeeType) => void;
  onSetSize: (size?: KidsTeeSize | UnisexTeeSize) => void;
  onRemove: () => void;
}) => (
  <li className="flex justify-between items-end">
    <TeeTypeSelect type={type} onSetType={onSetType} />
    <div className="ml-2">
      <TeeSizeSelect type={type} size={size} onSetSize={onSetSize} />
    </div>
    <div className="ml-2">
      <button
        type="button"
        onClick={onRemove}
        title="t-shirt verwijderen"
        className="text-2xl"
        disabled={isFirst}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  </li>
);

const Home = () => {
  const [state, dispatch] = useMerch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("api/order", {
      method: "POST",
      body: JSON.stringify({
        ...state,
        tees: state.tees
          .filter((tee) => tee.type && tee.size)
          .map(({ type, size }) => ({ type, size })),
      }),
    });
  };

  return (
    <Layout>
      <section className="mt-4 py-8 px-4">
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 auto-rows-auto gap-8">
              <Card>
                <CardHeader icon={faTshirt}>t-shirt</CardHeader>
                <div className="flex justify-center">
                  <img src="/tshirt.png" alt="t-shirt" />
                </div>
                <div className="inline-block">
                  <ul>
                    {state.tees.map((tee, index) => (
                      <TeeItem
                        key={tee.id}
                        isFirst={index === 0}
                        type={tee.type}
                        size={tee.size}
                        onSetType={(type) => setTeeType(dispatch, tee.id, type)}
                        onSetSize={(size) => setTeeSize(dispatch, tee.id, size)}
                        onRemove={() => removeTee(dispatch, tee.id)}
                      />
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => addTee(dispatch)}
                      title="t-shirt toevoegen"
                      className="text-2xl"
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                  </div>
                </div>
              </Card>
              <Card>
                <CardHeader icon={faTshirt}>trucker cap</CardHeader>
                <div className="flex justify-center">
                  <img src="/trucker-cap.png" alt="trucker cap" />
                </div>
                <div>
                  <FormElement label="Kinderen:">
                    <Input
                      type="number"
                      value={state.kidsCaps}
                      min={0}
                      onChange={(e) => {
                        if (!e.target.value.length) {
                          setKidsCaps(dispatch, 0);
                        }
                        const int = parseInt(e.target.value);
                        if (isNaN(int)) {
                          return;
                        }
                        setKidsCaps(dispatch, int);
                      }}
                    />
                  </FormElement>
                  <FormElement label="Volwassenen:">
                    <Input
                      type="number"
                      value={state.caps}
                      min={0}
                      onChange={(e) => {
                        if (!e.target.value.length) {
                          setCaps(dispatch, 0);
                        }
                        const int = parseInt(e.target.value);
                        if (isNaN(int)) {
                          return;
                        }
                        setCaps(dispatch, int);
                      }}
                    />
                  </FormElement>
                </div>
              </Card>
            </div>
            <div className="mt-8">
              <Card>
                <CardHeader icon={faFileAlt}>gegevens</CardHeader>
                <div>
                  <FormElement label="Naam:">
                    <Input
                      type="text"
                      placeholder="hockey player"
                      required
                      value={state.name}
                      onChange={(e) => setName(dispatch, e.target.value)}
                    />
                  </FormElement>
                  <FormElement label="Email:">
                    <Input
                      type="email"
                      placeholder="player@hockey.ice"
                      required
                      value={state.email}
                      onChange={(e) => setEmail(dispatch, e.target.value)}
                    />
                  </FormElement>
                  <div className="mt-4">
                    <label>
                      <input
                        type="checkbox"
                        checked={state.newsletter}
                        onChange={(e) =>
                          setNewsletter(dispatch, e.target.checked)
                        }
                      />
                      <span className="ml-2">
                        Inschrijven op onze nieuwsbrief?
                      </span>
                    </label>
                  </div>
                </div>
                <div className="text-right">
                  <Button type="submit">Bestellen</Button>
                </div>
              </Card>
            </div>
          </form>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
