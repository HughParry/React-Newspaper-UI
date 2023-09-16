export interface SpeedDialItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export interface SpeedDialProps {
  mainIcon: React.ReactNode;
  items: SpeedDialItem[];
  direction?: "up" | "down" | "left" | "right";
}
