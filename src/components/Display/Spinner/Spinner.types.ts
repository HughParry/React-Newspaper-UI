export type SpinnerDesign = "default" | "double" | "dots" | "bars";

export interface SpinnerProps {
  message?: string;
  stationary?: boolean;
  spinning?: boolean;
  design?: SpinnerDesign;
}
