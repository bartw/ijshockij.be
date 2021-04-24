import classnames from "classnames";
import { MouseEventHandler, ReactNode } from "react";

export const Button = ({
  disabled,
  type,
  onClick,
  children,
}: {
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => (
  <button
    className={classnames(
      "mt-4 rounded bg-gray-800 hover:bg-gray-700 text-gray-50 px-4 py-2 w-full",
      { "cursor-not-allowed": disabled }
    )}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
