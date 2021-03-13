import classNames from "classnames";
import { ReactNode } from "react";
import { useCardContext } from "./cards";

type Props = { children: ReactNode };

export const Card = ({ children }: Props) => {
  const { width } = useCardContext();

  const cardClassName = classNames("m-2 sm:m-0 sm:flex-shrink-0", {
    "sm:w-2/5 md:w-1/5": width === "narrow",
    "sm:w-3/5 md:w-2/5": width === "default",
  });

  return <div className={cardClassName}>{children}</div>;
};
