import { createContext, ReactNode, useContext } from "react";

type Width = "narrow" | "default";

type Props = { width?: Width; children: ReactNode | ReactNode[] };

type CardContextType = { width: Width };

const CardContext = createContext<CardContextType>({ width: "default" });

export const useCardContext = (): CardContextType => useContext(CardContext);

export const Cards = ({ width = "default", children }: Props) => (
  <CardContext.Provider value={{ width }}>
    <div className="sm:flex sm:overflow-x-scroll">{children}</div>
  </CardContext.Provider>
);
