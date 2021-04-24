import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export const Card = ({
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

export const CardHeader = ({
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
