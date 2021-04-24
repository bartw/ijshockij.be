import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faPlusCircle,
  faTrashAlt,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Button, Card, CardHeader, Container, Layout } from "../components";

type TeeType = "KIDS" | "UNISEX";

type KidsTeeSize =
  | "98 - 104 cm"
  | "110 - 116 cm"
  | "122 - 128 cm"
  | "134 - 148 cm"
  | "152 - 164 cm";

type UnisexTeeSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

type Tee = {
  id: string;
  type?: TeeType;
  size?: KidsTeeSize | UnisexTeeSize;
};

type State = {
  tees: Tee[];
  kidsCaps: number;
  caps: number;
  name: string;
  email: string;
  newsletter: boolean;
};

const emptyTee = () => ({ id: uuid(), type: undefined, size: undefined });

const INITIAL_STATE: State = {
  tees: [emptyTee()],
  kidsCaps: 0,
  caps: 0,
  name: "",
  email: "",
  newsletter: false,
};

type SetTeeType = { action: "SET_TEE_TYPE"; id: string; type?: TeeType };
type SetTeeSize = {
  action: "SET_TEE_SIZE";
  id: string;
  size?: KidsTeeSize | UnisexTeeSize;
};
type AddTee = { action: "ADD_TEE" };
type RemoveTee = { action: "REMOVE_TEE"; id: string };
type SetKidsCaps = { action: "SET_KIDS_CAPS"; kidsCaps: number };
type SetCaps = { action: "SET_CAPS"; caps: number };
type SetName = { action: "SET_NAME"; name: string };
type SetEmail = { action: "SET_EMAIL"; email: string };
type SetNewsletter = { action: "SET_NEWSLETTER"; newsletter: boolean };

type Action =
  | SetTeeType
  | SetTeeSize
  | RemoveTee
  | AddTee
  | SetKidsCaps
  | SetCaps
  | SetName
  | SetEmail
  | SetNewsletter;

type Dispatch = (action: Action) => void;

const setTeeType = (dispatch: Dispatch, id: string, type?: TeeType) =>
  dispatch({ action: "SET_TEE_TYPE", id, type });
const setTeeSize = (
  dispatch: Dispatch,
  id: string,
  size?: KidsTeeSize | UnisexTeeSize
) => dispatch({ action: "SET_TEE_SIZE", id, size });
const addTee = (dispatch: Dispatch) => dispatch({ action: "ADD_TEE" });
const removeTee = (dispatch: Dispatch, id: string) =>
  dispatch({ action: "REMOVE_TEE", id });
const setKidsCaps = (dispatch: Dispatch, kidsCaps: number) =>
  dispatch({ action: "SET_KIDS_CAPS", kidsCaps });
const setCaps = (dispatch: Dispatch, caps: number) =>
  dispatch({ action: "SET_CAPS", caps });
const setName = (dispatch: Dispatch, name: string) =>
  dispatch({ action: "SET_NAME", name });
const setEmail = (dispatch: Dispatch, email: string) =>
  dispatch({ action: "SET_EMAIL", email });
const setNewsletter = (dispatch: Dispatch, newsletter: boolean) =>
  dispatch({ action: "SET_NEWSLETTER", newsletter });

const before = (tees: Tee[], index: number): Tee[] => {
  return tees.slice(0, index);
};

const after = (tees: Tee[], index: number): Tee[] => {
  return index < tees.length - 1 ? tees.slice(index + 1) : [];
};

const updateTees = (
  tees: Tee[],
  id: string,
  mutate: (tee: Tee) => Tee
): Tee[] => {
  const index = tees.findIndex((tee) => tee.id === id);
  return index === -1
    ? tees
    : [...before(tees, index), mutate(tees[index]), ...after(tees, index)];
};

const reducer = (state: State, action: Action): State => {
  switch (action.action) {
    case "SET_TEE_TYPE":
      return {
        ...state,
        tees: updateTees(state.tees, action.id, (tee) => ({
          ...tee,
          type: action.type,
          size: tee.type === action.type ? tee.size : undefined,
        })),
      };
    case "SET_TEE_SIZE":
      return {
        ...state,
        tees: updateTees(state.tees, action.id, (tee) => ({
          ...tee,
          size: action.size,
        })),
      };
    case "ADD_TEE":
      return { ...state, tees: [...state.tees, emptyTee()] };
    case "REMOVE_TEE":
      return {
        ...state,
        tees: state.tees.filter((tee) => tee.id !== action.id),
      };
    case "SET_KIDS_CAPS":
      return { ...state, kidsCaps: action.kidsCaps };
    case "SET_CAPS":
      return { ...state, caps: action.caps };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_NEWSLETTER":
      return { ...state, newsletter: action.newsletter };
    default:
      return state;
  }
};

const TYPES: TeeType[] = ["KIDS", "UNISEX"];

const KIDS: KidsTeeSize[] = [
  "98 - 104 cm",
  "110 - 116 cm",
  "122 - 128 cm",
  "134 - 148 cm",
  "152 - 164 cm",
];

const UNISEX: UnisexTeeSize[] = ["XS", "S", "M", "L", "XL", "XXL"];

const TeeTypeSelect = ({
  type,
  onSetType,
}: {
  type?: TeeType;
  onSetType: (type?: TeeType) => void;
}) => (
  <select
    value={type}
    onChange={(e) => {
      const typeToSelect = TYPES.find((t) => t === e.target.value) ?? undefined;
      onSetType(typeToSelect);
    }}
  >
    <option label="Selecteer" value={undefined} />
    {TYPES.map((t) => (
      <option key={t} label={t} value={t} />
    ))}
  </select>
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
  <select
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
    {type === "KIDS" && KIDS.map((s) => <option key={s} label={s} value={s} />)}
    {type === "UNISEX" &&
      UNISEX.map((s) => <option key={s} label={s} value={s} />)}
  </select>
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
  <li>
    <TeeTypeSelect type={type} onSetType={onSetType} />
    <TeeSizeSelect type={type} size={size} onSetSize={onSetSize} />
    {!isFirst && (
      <button type="button" onClick={onRemove} title="t-shirt verwijderen">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    )}
  </li>
);

const Home = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
      <section className="py-8 px-4">
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 auto-rows-auto gap-8">
              <Card>
                <CardHeader icon={faTshirt}>t-shirt</CardHeader>
                <div className="flex justify-center">
                  <img src="/tshirt.png" alt="t-shirt" />
                </div>
                <div>
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
                  <button
                    type="button"
                    onClick={() => addTee(dispatch)}
                    title="t-shirt toevoegen"
                  >
                    <FontAwesomeIcon icon={faPlusCircle} />
                  </button>
                </div>
              </Card>
              <Card>
                <CardHeader icon={faTshirt}>trucker cap</CardHeader>
                <div className="flex justify-center">
                  <img src="/trucker-cap.png" alt="trucker cap" />
                </div>
                <div>
                  <div>
                    <label>
                      Kinderen{" "}
                      <input
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
                    </label>
                  </div>
                  <div>
                    <label>
                      Volwassenen{" "}
                      <input
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
                    </label>
                  </div>
                </div>
              </Card>
            </div>
            <div className="mt-8">
              <Card>
                <CardHeader icon={faFileAlt}>gegevens</CardHeader>
                <div>
                  <div>
                    <label>
                      Name:
                      <input
                        type="text"
                        placeholder="naam"
                        required
                        value={state.name}
                        onChange={(e) => setName(dispatch, e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email:
                      <input
                        type="email"
                        placeholder="player@hockey.ice"
                        required
                        value={state.email}
                        onChange={(e) => setEmail(dispatch, e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={state.newsletter}
                        onChange={(e) =>
                          setNewsletter(dispatch, e.target.checked)
                        }
                      />
                      Inschrijven op onze nieuwsbrief?
                    </label>
                  </div>
                </div>
                <Button type="submit">Bestellen</Button>
              </Card>
            </div>
          </form>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
