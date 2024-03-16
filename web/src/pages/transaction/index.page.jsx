import Table from '@/components/organisms/Table';
import Template from '@/components/templates/Template';
import React from 'react';

function Transaction() {
  const rows = [
    {
      header: 'Date Prepared',
      render: (row) => row.datePrepared,
    },
    {
      header: 'Date Needed',
      render: (row) => row.dateNeeded,
    },
    {
      header: 'Department',
      render: (row) => row.department,
    },
    {
      header: 'Status',
      render: (row) => row.status,
    },
    {
      header: 'Action',
      render: (row) => row.action,
    },
  ];
  const data = [
    {
      id: 1,
      datePrepared: 'February 2, 2024',
      dateNeeded: 'February 5, 2024 ',
      department: 'ASBM',
      status: 'Created',
      action: 'View Edit',
    },
    {
      id: 2,
      datePrepared: 'February 15, 2024',
      dateNeeded: 'February 20, 2024 ',
      department: 'HR',
      status: 'Pending',
      action: 'View Edit',
    },
    {
      id: 3,
      datePrepared: 'March 1, 2024',
      dateNeeded: 'March 5, 2024 ',
      department: 'Finance',
      status: 'Closed',
      action: 'View Details',
    },
    {
      id: 4,
      datePrepared: 'March 10, 2024',
      dateNeeded: 'March 15, 2024 ',
      department: 'BSIT',
      status: 'Created',
      action: 'View Edit',
    },
    {
      id: 5,
      datePrepared: 'March 25, 2024',
      dateNeeded: 'March 1, 2024 ',
      department: 'BSBA',
      status: 'Pending',
      action: 'View Edit',
    },
  ];
  return (
    <div>
      <Template>
        Transaction
        <Table rows={rows} data={data} />
      </Template>
    </div>
  );
}

export default Transaction;
