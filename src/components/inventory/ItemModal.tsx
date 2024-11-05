import React from 'react';
import { X } from 'lucide-react';

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: any;
  mode: 'add' | 'edit' | 'view';
}

const ItemModal = ({ isOpen, onClose, item, mode }: ItemModalProps) => {
  if (!isOpen) return null;

  const title = mode === 'add' ? 'Add New Item' : mode === 'edit' ? 'Edit Item' : 'Item Details';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SKU
              </label>
              <input
                type="text"
                defaultValue={item?.id}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                defaultValue={item?.name}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                defaultValue={item?.category}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              >
                <option>Electronics</option>
                <option>Components</option>
                <option>Sensors</option>
                <option>Tools</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                defaultValue={item?.location}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              >
                <option>Warehouse A</option>
                <option>Warehouse B</option>
                <option>Warehouse C</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                defaultValue={item?.quantity}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit
              </label>
              <select
                defaultValue={item?.unit}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              >
                <option>pcs</option>
                <option>boxes</option>
                <option>kg</option>
                <option>liters</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                defaultValue={item?.price}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reorder Point
              </label>
              <input
                type="number"
                defaultValue={20}
                disabled={mode === 'view'}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          {mode !== 'view' && (
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {mode === 'add' ? 'Create Item' : 'Save Changes'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ItemModal;