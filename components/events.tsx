import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { Container } from "./container";
import { ExternalLinkButton, LinkButton } from "./link-button";

const Card = ({
  children: [header, content, footer],
}: {
  children: [ReactNode, ReactNode, ReactNode];
}) => (
  <div className="flex flex-col">
    <div className="bg-gray-800 flex items-center justify-between p-4 text-gray-50 rounded-t">
      {header}
    </div>
    <div className="p-4 bg-gray-50 rounded-b flex-1 flex flex-col">
      <div className="flex-1">{content}</div>
      <div>{footer}</div>
    </div>
  </div>
);

const CardHeader = ({
  icon,
  children,
}: {
  icon: IconDefinition;
  children: ReactNode;
}) => (
  <>
    <h3 className="uppercase">{children}</h3>
    <FontAwesomeIcon icon={icon} />
  </>
);

export const Events = () => (
  <section className="py-8 px-4">
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8">
        <Card>
          <CardHeader icon={faTshirt}>t-shirt</CardHeader>
          <div className="flex justify-center">
            <img src="/tshirt.png" alt="t-shirt" />
          </div>
          <LinkButton href="/merch">Bestellen</LinkButton>
        </Card>
        <Card>
          <CardHeader icon={faTshirt}>trucker cap</CardHeader>
          <div className="flex justify-center">
            <img src="/trucker-cap.png" alt="trucker cap" />
          </div>
          <LinkButton href="/merch">Bestellen</LinkButton>
        </Card>
        <Card>
          <CardHeader icon={faCalendarCheck}>paaskamp</CardHeader>
          <ul>
            <li>09 april 13:00 - 17:30</li>
            <li>10 april 14:00 - 18:30</li>
            <li>11 april 14:00 - 18:30</li>
          </ul>
          <ExternalLinkButton href="https://youtube.com/playlist?list=PLELBzzZiH7pgoiomd9XL0mchJGM_FPMFP">
            Videos
          </ExternalLinkButton>
        </Card>
      </div>
    </Container>
  </section>
);
