import {useState} from 'react';
import type { GroceryItem, FormProps } from '../types/grocery';
 
export default function Form({onAddItem}: FormProps) {
        const [name, setName] = useState<string>('');
        const [quantity, setQuantity] = useState<number>(1);

      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!name) return;

        const newItem: GroceryItem = {name, quantity, checked: false, id: Date.now()}; 
        
        onAddItem(newItem);

        setName('');
        setQuantity(1);

      }

      const quantityNum = [...Array(20)].map((_, i) => (
        <option value={i + 1} key={i + 1}>
          {i + 1}
        </option>
      ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa aja ya?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {quantityNum}
          </select>
          <input
            type="text"
            placeholder="nama barang..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <button>Tambah</button>
          </form>
        );
      }