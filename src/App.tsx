import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import type { GroceryItem } from './types/grocery';

const groceryItems: GroceryItem[] = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 5,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState<GroceryItem[]>(groceryItems);

    function handleAddItem(item: GroceryItem) {
      setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id: number) {
      setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id: number) {
      setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item ));
    }

    function handleClearItems() {
      setItems([]);
    }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
        />
        <Footer items={items} />
    </div>
  );
}

     

    

    