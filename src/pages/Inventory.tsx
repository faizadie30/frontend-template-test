import React from 'react';
import InventoryStats from '../components/inventory/InventoryStats';
import InventoryList from '../components/inventory/InventoryList';

const Inventory = () => {
  return (
    <div className="p-6">
      <InventoryStats />
      <InventoryList />
    </div>
  );
};

export default Inventory;