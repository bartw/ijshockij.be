import { useReducer } from "react";
import { v4 as uuid } from "uuid";

export type TeeType = "KIDS" | "UNISEX";

export type KidsTeeSize =
  | "98 - 104"
  | "110 - 116"
  | "122 - 128"
  | "134 - 148"
  | "152 - 164";

export type UnisexTeeSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Tee = {
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

export const setTeeType = (dispatch: Dispatch, id: string, type?: TeeType) =>
  dispatch({ action: "SET_TEE_TYPE", id, type });
export const setTeeSize = (
  dispatch: Dispatch,
  id: string,
  size?: KidsTeeSize | UnisexTeeSize
) => dispatch({ action: "SET_TEE_SIZE", id, size });
export const addTee = (dispatch: Dispatch) => dispatch({ action: "ADD_TEE" });
export const removeTee = (dispatch: Dispatch, id: string) =>
  dispatch({ action: "REMOVE_TEE", id });
export const setKidsCaps = (dispatch: Dispatch, kidsCaps: number) =>
  dispatch({ action: "SET_KIDS_CAPS", kidsCaps });
export const setCaps = (dispatch: Dispatch, caps: number) =>
  dispatch({ action: "SET_CAPS", caps });
export const setName = (dispatch: Dispatch, name: string) =>
  dispatch({ action: "SET_NAME", name });
export const setEmail = (dispatch: Dispatch, email: string) =>
  dispatch({ action: "SET_EMAIL", email });
export const setNewsletter = (dispatch: Dispatch, newsletter: boolean) =>
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

export const useMerch = () => useReducer(reducer, INITIAL_STATE);
