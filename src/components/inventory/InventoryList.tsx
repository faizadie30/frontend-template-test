import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';
import ItemModal from './ItemModal';

const InventoryList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('view');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [inventory, setInventory] = useState([
    {
      id: 'SKU001',
      name: 'Widget Pro X1',
      category: 'Electronics',
      quantity: 156,
      unit: 'pcs',
      price: 299.99,
      location: 'Warehouse A',
      status: 'In Stock'
    },
    {
      id: 'SKU002',
      name: 'Premium Connector',
      category: 'Components',
      quantity: 23,
      unit: 'boxes',
      price: 45.50,
      location: 'Warehouse B',
      status: 'Low Stock'
    },
    {
      id: 'SKU003',
      name: 'Industrial Sensor',
      category: 'Sensors',
      quantity: 450,
      unit: 'pcs',
      price: 89.99,
      location: 'Warehouse A',
      status: 'In Stock'
    }
  ]);

  const handleAddItem = () => {
    setSelectedItem(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleEditItem = (item: any) => {
    setSelectedItem(item);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleViewItem = (item: any) => {
    setSelectedItem(item);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleDeleteItem = (itemId: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setInventory(inventory.filter(item => item.id !== itemId));
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesLocation = filterLocation === 'all' || item.location === filterLocation;
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;

    return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
  });

  const categories = ['Electronics', 'Components', 'Sensors', 'Tools'];
  const locations = ['Warehouse A', 'Warehouse B', 'Warehouse C'];
  const statuses = ['In Stock', 'Low Stock', 'Out of Stock'];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
        <button 
          onClick={handleAddItem}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Item
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 ${showFilters ? 'bg-blue-50 border-blue-200' : ''}`}
            >
              <Filter className="h-5 w-5 text-gray-500" />
              <span>Filter</span>
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU/Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                    <div className="text-sm text-gray-500">{item.unit}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 
                        item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleViewItem(item)}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4 text-gray-500" />
                      </button>
                      <button 
                        onClick={() => handleEditItem(item)}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Edit Item"
                      >
                        <Edit2 className="h-4 w-4 text-gray-500" />
                      </button>
                      <button 
                        onClick={() => handleDeleteItem(item.id)}
                        className="p-1 hover:bg-gray-100 rounded"
                        title="Delete Item"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredInventory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found matching your criteria</p>
            </div>
          )}
        </div>
      </div>

      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        mode={modalMode}
      />
    </div>
  );
};

export default InventoryList;