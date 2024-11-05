import React from 'react';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const InventoryStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Total Items</p>
            <h3 className="text-2xl font-bold mt-1">2,459</h3>
            <p className="text-sm text-green-600 mt-2">+85 this month</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Out of Stock</p>
            <h3 className="text-2xl font-bold mt-1">12</h3>
            <p className="text-sm text-red-600 mt-2">Critical items</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Inventory Value</p>
            <h3 className="text-2xl font-bold mt-1">$524,790</h3>
            <p className="text-sm text-green-600 mt-2">+8.2% from last month</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Turnover Rate</p>
            <h3 className="text-2xl font-bold mt-1">4.5x</h3>
            <p className="text-sm text-blue-600 mt-2">Last 30 days</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStats;