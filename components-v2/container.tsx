import { ReactNode } from "react";

type Props = { children: ReactNode };

export const Container = ({ children }: Props) => (
  <div className="mx-auto max-w-screen-lg">{children}</div>
);
