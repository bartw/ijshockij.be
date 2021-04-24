import { ChangeEvent, ReactNode } from "react";

type Props = {
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode | ReactNode[];
};

export const Select = ({ disabled, value, onChange, children }: Props) => (
  <select
    className="border border-gray-800 rounded p-2 text-gray-900"
    disabled={disabled}
    value={value}
    onChange={onChange}
  >
    {children}
  </select>
);
