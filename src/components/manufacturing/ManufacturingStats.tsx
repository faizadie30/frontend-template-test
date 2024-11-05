import React from 'react';
import { Factory, AlertTriangle, Clock, TrendingUp } from 'lucide-react';

const ManufacturingStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Active Work Orders</p>
            <h3 className="text-2xl font-bold mt-1">45</h3>
            <p className="text-sm text-green-600 mt-2">On schedule</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Factory className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Delayed Orders</p>
            <h3 className="text-2xl font-bold mt-1">3</h3>
            <p className="text-sm text-red-600 mt-2">Requires attention</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Avg. Production Time</p>
            <h3 className="text-2xl font-bold mt-1">4.2 hrs</h3>
            <p className="text-sm text-green-600 mt-2">-12% from last month</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-600">Efficiency Rate</p>
            <h3 className="text-2xl font-bold mt-1">92.5%</h3>
            <p className="text-sm text-blue-600 mt-2">+5.2% improvement</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingStats;