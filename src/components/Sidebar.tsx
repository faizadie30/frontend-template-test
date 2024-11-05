import React from 'react';
import { 
  Package, 
  BarChart2, 
  ShoppingCart, 
  Truck, 
  Users, 
  Settings, 
  Box,
  ClipboardList,
  Factory
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-[#1a237e] text-white fixed left-0 top-0">
      <div className="p-4 border-b border-blue-800">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Box className="h-6 w-6" />
          Fishbowl ERP
        </h1>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <Package className="h-5 w-5" />
              Inventory
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <ShoppingCart className="h-5 w-5" />
              Sales Orders
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <Truck className="h-5 w-5" />
              Purchase Orders
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <Factory className="h-5 w-5" />
              Manufacturing
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <ClipboardList className="h-5 w-5" />
              Work Orders
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <BarChart2 className="h-5 w-5" />
              Reports
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <Users className="h-5 w-5" />
              Users
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded hover:bg-blue-800">
              <Settings className="h-5 w-5" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;