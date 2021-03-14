import { ChangeEventHandler } from "react";

type Props = {
  type: "text" | "email" | "url";
  id?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const TextInput = ({
  type,
  id,
  placeholder,
  required,
  value,
  onChange,
}: Props) => (
  <input
    className="border rounded p-2 text-gray-900 w-full"
    type={type}
    id={id}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
  />
);
