import { ChangeEventHandler } from "react";

export interface OptionType {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  id?: string;
  name?: string;
  options: OptionType[];
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}
