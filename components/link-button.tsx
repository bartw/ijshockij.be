import Link from "next/link";
import { ReactNode } from "react";

const CLASS_NAME =
  "mt-4 rounded bg-gray-800 hover:bg-gray-700 text-gray-50 px-4 py-2 w-full block text-center";

export const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={href}>
    <a className={CLASS_NAME}>{children}</a>
  </Link>
);

export const ExternalLinkButton = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) => (
  <a href={href} className={CLASS_NAME}>
    {children}
  </a>
);

export const DisabledLinkButton = ({ children }: { children: ReactNode }) => (
  <a className="mt-4 rounded bg-gray-700 text-gray-50 px-4 py-2 w-full block text-center">
    {children}
  </a>
);
