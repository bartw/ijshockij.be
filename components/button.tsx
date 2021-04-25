import classnames from "classnames";
import { MouseEventHandler, ReactNode } from "react";

export const Button = ({
  disabled,
  type,
  title,
  className,
  onClick,
  children,
}: {
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  title?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) => (
  <button
    className={classnames(
      "mt-4 rounded bg-gray-800 hover:bg-gray-700 text-gray-50 px-4 py-2",
      { "cursor-not-allowed": disabled },
      className
    )}
    disabled={disabled}
    type={type}
    title={title}
    onClick={onClick}
  >
    {children}
  </button>
);
