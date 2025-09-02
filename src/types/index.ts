export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TaskInputProps {
  onAdd: (text: string) => void;
  onToggleAll: () => void;
  hasTasks: boolean;
  allCompleted: boolean;
}

export interface FooterProps {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  itemsLeft: number;
  clearCompleted: () => void;
}