import { ChangeEvent } from "react";

type Props = {
  type: "email" | "number" | "text";
  placeholder?: string;
  required?: boolean;
  min?: string | number;
  checked?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  type,
  placeholder,
  required,
  min,
  checked,
  value,
  onChange,
}: Props) => (
  <input
    className="border border-gray-800 rounded p-2 text-gray-900"
    type={type}
    placeholder={placeholder}
    required={required}
    min={min}
    checked={checked}
    value={value}
    onChange={onChange}
  />
);
