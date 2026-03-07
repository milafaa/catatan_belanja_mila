import { useState } from "react";
import type { GroceryItem, GroceryListProps } from "../types/grocery";
import Item from "./Item";

export default  function GroceryList({
        items,
        onDeleteItem,
        onToggleItem,
        onClearItems,
      }: GroceryListProps) {
      const [sortBy, setSortBy] = useState<string>('input');

      let sortedItems: GroceryItem[];
      
      switch(sortBy) {
        case 'name':
          sortedItems = items.slice().sort((a,b) => a.name.localeCompare(b.name));
          break;
        case 'checked':
          sortedItems = items.slice().sort((a,b) => Number(a.checked) - Number(b.checked));
          break;
        default:
          sortedItems = items;
          break;
      }

      return (
        <>
          <div className="list">
              <ul>
                {sortedItems.map((item) => (
                <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
                ))}
                
              </ul>
            </div>
            <div className="actions">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input"> Urutkan berdasarkan urutan input</option>
                <option value="name"> Urutkan berdasarkan nama barang</option>
                <option value="checked"> Urutkan berdasarkan ceklis</option>
              </select>
              <button type="button" onClick={onClearItems}>Bersihkan Daftar</button>
            </div>
          </>
      );
    }