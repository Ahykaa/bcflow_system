import React, { useState } from 'react';
import TemplatesGSD from '@/components/templates/TemplatesGSD';
import { assetList } from '@/hooks/particuls';
import { Button } from 'flowbite-react';

function gsdPanel() {
  const noZero = assetList.filter(item => item.value !== 0);

  const [items, setItems] = useState(noZero.map((item, index) => ({
      id: index + 1,
      name: item.label,
      amount: 0
  })));

  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState(0);

  // Function to handle adding a new item
  const addItem = () => {
    const newItem = {
      id: items.length > 0 ? items[0].id - 1 : 1, // Assign the next available ID
      name: newItemName.trim() || 'New Item',
      amount: newItemAmount
    };
    setItems([newItem, ...items]);
    setNewItemName('');
    setNewItemAmount(0);
  };

  // Function to handle deleting an item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to handle editing an item's name
  const editItemName = (id, newName) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, name: newName };
      }
      return item;
    }));
  };

  // Function to handle editing an item's amount
  const editItemAmount = (id, newAmount) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, amount: newAmount };
      }
      return item;
    }));
  };
  

  return (
    <div>
      <TemplatesGSD>
        <div className='mx-auto max-w-screen-lg mt-5 grid grid-cols-1 gap-8 '>
          <h2 className="text-lg">Control Panel</h2>
          <div className='inline-flex space-x-4'>
            <input
              className="block px-7 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter new item"
            />
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 dark:text-white pointer-events-none">
                ₱
              </span>
              <input
                className="pl-8 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
                value={newItemAmount}
                onChange={(e) => setNewItemAmount(e.target.value)}
                placeholder="Enter item amount"
              />
            </div>
            <Button color='success' type='submit' className='mx-auto' onClick={addItem}>Add New Item</Button>
          </div>
          {items.map(item => (
            <div key={item.id} className='inline-flex space-x-4'>
              <input
                className="block px-7 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
                value={item.name}
                onChange={(e) => editItemName(item.id, e.target.value)}
              />
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-900 dark:text-white pointer-events-none">
                ₱
              </span>
              <input
                type="text"
                className="pl-8 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={item.amount}
                onChange={(e) => editItemAmount(item.id, e.target.value)}
                placeholder="Enter amount"
              />
            </div>
              <button className="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300" type="submit" onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </TemplatesGSD>
    </div>
  );
}

export default gsdPanel;