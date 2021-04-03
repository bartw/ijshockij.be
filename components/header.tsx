import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_NETWORKS } from "../data";

const SocialCircleLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: IconDefinition;
}) => (
  <div className="inline-block mx-4">
    <a
      className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-800 text-gray-50"
      href={href}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  </div>
);

export const Header = () => (
  <header className="text-center py-8">
    <h1 className="text-3xl">ijshockij</h1>
    <div className="mt-4 -mb-12">
      {SOCIAL_NETWORKS.map(({ id, href, title, icon }) => (
        <SocialCircleLink key={id} href={href} title={title} icon={icon} />
      ))}
    </div>
  </header>
);
