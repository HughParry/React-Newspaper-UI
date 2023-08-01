export interface SliderProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}
