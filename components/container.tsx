import { ReactNode } from "react";

type Props = { children: ReactNode };

export const Container = ({ children }: Props) => (
  <div className="mx-auto px-4 max-w-screen-lg">{children}</div>
);
