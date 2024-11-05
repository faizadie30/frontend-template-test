import React from 'react';
import OrderList from '../components/orders/OrderList';
import OrderStats from '../components/orders/OrderStats';

const Orders = () => {
  return (
    <div className="p-6">
      <OrderStats />
      <OrderList />
    </div>
  );
};

export default Orders;