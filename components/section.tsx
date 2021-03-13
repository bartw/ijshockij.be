import classNames from "classnames";
import { ReactNode } from "react";
import { Container } from "./container";

type Props = { className?: string; children: ReactNode | ReactNode[] };

export const Section = ({ className, children }: Props) => (
  <section className={classNames("py-8", className)}>
    <Container>{children}</Container>
  </section>
);
