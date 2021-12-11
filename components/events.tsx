import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Card, CardHeader } from "./card";
import { Container } from "./container";
import {
  DisabledLinkButton,
  ExternalLinkButton,
  LinkButton,
} from "./link-button";

export const Events = () => (
  <section className="py-8 px-4">
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8">
        <Card>
          <CardHeader icon={faCalendarCheck}>
            xmas off ice skill camp
          </CardHeader>
          <div className="flex justify-center">
            <Image
              src="/xmas.png"
              alt="xmas off ice skill camp"
              width={640}
              height={777}
            />
          </div>
          <LinkButton href="/inschrijven">Inschrijven</LinkButton>
        </Card>
        <Card>
          <CardHeader icon={faTshirt}>t-shirt</CardHeader>
          <div className="flex justify-center">
            <Image src="/tshirt.png" alt="t-shirt" width={400} height={500} />
          </div>
          <DisabledLinkButton>Uitverkocht</DisabledLinkButton>
        </Card>
        <Card>
          <CardHeader icon={faTshirt}>trucker cap</CardHeader>
          <div className="flex justify-center">
            <Image
              src="/trucker-cap.png"
              alt="trucker cap"
              width={320}
              height={320}
            />
          </div>
          <DisabledLinkButton>Uitverkocht</DisabledLinkButton>
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
