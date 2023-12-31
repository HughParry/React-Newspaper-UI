import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  orientation?: "horizontal" | "vertical";
  inputLength?: number;
  lineLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
