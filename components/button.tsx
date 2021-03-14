import { MouseEventHandler, ReactNode } from "react";

type Props = {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
};

export const Button = ({
  type = "button",
  disabled,
  onClick,
  children,
}: Props) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
