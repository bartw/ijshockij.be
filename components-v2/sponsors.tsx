import { SPONSORS } from "../data";

const SponsorLink = ({
  href,
  title,
  logo,
}: {
  href: string;
  title: string;
  logo: string;
}) => (
  <a className="mb-8 block" href={href} title={title}>
    <img src={logo} alt={title} />
  </a>
);

export const Sponsors = () => (
  <section className="py-8 px-4">
    {SPONSORS.map(({ id, href, title, logo }) => (
      <SponsorLink key={id} href={href} title={title} logo={logo} />
    ))}
  </section>
);
