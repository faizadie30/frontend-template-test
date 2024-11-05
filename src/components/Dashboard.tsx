import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign,
  Boxes,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Inventory Value Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Inventory Value</p>
              <h3 className="text-2xl font-bold mt-1">$524,790</h3>
              <p className="text-sm text-green-600 flex items-center mt-2">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +8.2% from last month
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Low Stock Items Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Low Stock Items</p>
              <h3 className="text-2xl font-bold mt-1">24</h3>
              <p className="text-sm text-red-600 flex items-center mt-2">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +12 since last week
              </p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        {/* Active Orders Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <h3 className="text-2xl font-bold mt-1">156</h3>
              <p className="text-sm text-green-600 flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                Processing on time
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Total SKUs Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total SKUs</p>
              <h3 className="text-2xl font-bold mt-1">2,459</h3>
              <p className="text-sm text-blue-600 flex items-center mt-2">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +85 this month
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Boxes className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 'ORD-2024-001',
                  type: 'Sales Order',
                  customer: 'Acme Corp',
                  status: 'Processing',
                  amount: '$1,234.56'
                },
                {
                  id: 'ORD-2024-002',
                  type: 'Purchase Order',
                  customer: 'Global Supplies',
                  status: 'Completed',
                  amount: '$2,845.00'
                },
                {
                  id: 'ORD-2024-003',
                  type: 'Work Order',
                  customer: 'Internal',
                  status: 'Pending',
                  amount: '$567.89'
                },
                {
                  id: 'ORD-2024-004',
                  type: 'Sales Order',
                  customer: 'Tech Industries',
                  status: 'Shipped',
                  amount: '$4,321.00'
                },
              ].map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Pending' ? 'bg-gray-100 text-gray-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;