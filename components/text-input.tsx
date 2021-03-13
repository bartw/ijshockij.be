import { ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
  type: "text" | "email" | "url";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const TextInput = ({ type, placeholder, value, onChange }: Props) => (
  <input
    className="border rounded p-2"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
