import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_NETWORKS } from "../data";

const SocialLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: IconDefinition;
}) => (
  <div className="inline-block mx-4">
    <a className="p-4" href={href} title={title}>
      <FontAwesomeIcon icon={icon} />
    </a>
  </div>
);

export const Footer = () => (
  <footer className="pt-8 pb-4 bg-gray-800 text-gray-50 text-center">
    <div>
      {SOCIAL_NETWORKS.map(({ id, href, title, icon }) => (
        <SocialLink key={id} href={href} title={title} icon={icon} />
      ))}
    </div>
    <div className="mt-4 text-sm">© 2021 - ijshockij</div>
  </footer>
);
