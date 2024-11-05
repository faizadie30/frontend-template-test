import React from 'react';
import ManufacturingStats from '../components/manufacturing/ManufacturingStats';
import WorkOrderList from '../components/manufacturing/WorkOrderList';

const Manufacturing = () => {
  return (
    <div className="p-6">
      <ManufacturingStats />
      <WorkOrderList />
    </div>
  );
};

export default Manufacturing;