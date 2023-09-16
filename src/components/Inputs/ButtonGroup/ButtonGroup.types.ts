export interface ButtonItem {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export interface ButtonGroupProps {
  buttons: ButtonItem[];
  vertical?: boolean;
}

export interface ButtonContainerProps {
  vertical?: boolean;
}
