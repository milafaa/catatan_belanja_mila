export type GroceryItem = {
    id: number;
    name: string;
    quantity: number;
    checked: boolean;
};

export  type FormProps = {
    onAddItem: (item: GroceryItem) => void;
};

export type GroceryListProps = {
    items: GroceryItem[];
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
    onClearItems: () => void;
};

export type ItemProps = {
  item: GroceryItem;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export  type FooterProps = {
    items: GroceryItem[];
};