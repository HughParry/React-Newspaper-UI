export interface TabItem {
  label: string;
  content: React.ReactNode;
  isActive: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  initialTabIndex?: number;
  isActive: boolean;
}
