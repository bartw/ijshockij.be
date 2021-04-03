import { SPONSORS } from "../data";
import { Container } from "./container";

const SponsorLink = ({
  href,
  title,
  logo,
}: {
  href: string;
  title: string;
  logo: string;
}) => (
  <div className="">
    <a className="" href={href} title={title}>
      <img src={logo} alt={title} />
    </a>
  </div>
);

export const Sponsors = () => (
  <section className="py-8 px-4">
    <Container>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-8">
        {SPONSORS.map(({ id, href, title, logo }) => (
          <SponsorLink key={id} href={href} title={title} logo={logo} />
        ))}
      </div>
    </Container>
  </section>
);
