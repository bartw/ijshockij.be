import { MouseEventHandler, ReactNode } from "react";

type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler;
  children: ReactNode;
};

export const Button = ({ type = "button", onClick, children }: Props) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
);
