import { ReactNode } from "react";
import { Container } from "./container";

export const Hero = ({
  children: [image, title, content],
}: {
  children: [ReactNode, ReactNode, ReactNode];
}) => (
  <section className="bg-gray-50 pt-8 pb-8 md:pb-0">
    <Container>
      <div className="md:flex md:flex-row-reverse md:items-center">
        <div>{image}</div>
        <div className="mx-4 mt-4 md:mt-0">
          <h2 className="text-xl">{title}</h2>
          <div className="mt-2">{content}</div>
        </div>
      </div>
    </Container>
  </section>
);
