import Table from '@/components/organisms/Table';
import UserTemplate from '@/components/templates/UserTemplate';
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
      header: 'Description',
      render: (row) => row.description,
    },
    {
      header: 'Amount',
      render: (row) => row.amount,
    },
    {
      header: 'Status',
      render: (row) => row.status,
    },
  ];
  const data = [
    {
      id: 1,
      datePrepared: 'February 2, 2024',
      dateNeeded: 'February 5, 2024 ',
      description: 'Printer',
      amount: '10,000',
      status: 'Approved',
    },
    {
      id: 2,
      datePrepared: 'February 15, 2024',
      dateNeeded: 'February 20, 2024 ',
      department: 'HR',
      request: 'Check/Repair/Calibrate',
      amount: '30,000',
      status: 'Approved',
    },
    {
      id: 3,
      datePrepared: 'March 1, 2024',
      dateNeeded: 'March 5, 2024 ',
      department: 'Finance',
      request: 'Check/Repair/Calibrate',
      amount: '20,000',
      status: 'Approved',
    },
    {
      id: 4,
      datePrepared: 'March 10, 2024',
      dateNeeded: 'March 15, 2024 ',
      department: 'BSIT',
      request: 'Deliver/Transfer/Setup/Restore/Install/etc',
      amount: '5,000',
      status: 'Approved',
    },
    {
      id: 5,
      datePrepared: 'March 14, 2024',
      dateNeeded: 'March 25, 2024 ',
      department: 'BSIT',
      request: 'Deliver/Transfer/Setup/Restore/Install/etc',
      amount: '5,000',
      status: 'Pending',
    },
  ];
  return (
    <div>
      <UserTemplate>
        Transaction
        <Table rows={rows} data={data} />
      </UserTemplate>
    </div>
  );
}

export default Transaction;
