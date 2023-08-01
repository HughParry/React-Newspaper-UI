export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}
