import React from 'react';
import { ShoppingCart, Clock, TrendingUp, DollarSign } from 'lucide-react';

const OrderStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Active Orders</p>
            <h3 className="text-2xl font-bold mt-1">156</h3>
            <p className="text-sm text-green-600 mt-2">+12 new today</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <ShoppingCart className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Pending Approval</p>
            <h3 className="text-2xl font-bold mt-1">23</h3>
            <p className="text-sm text-yellow-600 mt-2">Requires attention</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Monthly Revenue</p>
            <h3 className="text-2xl font-bold mt-1">$128,590</h3>
            <p className="text-sm text-green-600 mt-2">+18.2% from last month</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Order Growth</p>
            <h3 className="text-2xl font-bold mt-1">+24.5%</h3>
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

export default OrderStats;