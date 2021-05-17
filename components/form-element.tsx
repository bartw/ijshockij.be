import { ReactNode } from "react";

type Props = { label: ReactNode; children: ReactNode };

export const FormElement = ({ label, children }: Props) => (
  <div className="mt-4">
    <label>
      <div>{label}</div>
      <div className="mt-1">{children}</div>
    </label>
  </div>
);
