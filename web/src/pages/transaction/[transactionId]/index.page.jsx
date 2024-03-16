import RowItem from '@/components/organisms/RowItem';
import Table from '@/components/organisms/Table';
import Template from '@/components/templates/Template';
import { Button } from 'flowbite-react';
import React from 'react';

function Transaction() {
  const detail = [
    {
      controlNumber: '123456',
      datePrepared: '2024-03-07',
      dateNeeded: '2024-03-10',
      from: 'ASBM Secretary',
      department: 'ASBM Department',
      request_for: 'Materials/Supplies/Equipment',
      notes: '   ',
    },
  ];
  const rows = [
    {
      header: 'Quantity',
      render: (row) => row.quantity,
    },
    {
      header: 'Unit',
      render: (row) => row.unit,
    },
    {
      header: 'Particulars/Desc./Specs',
      render: (row) => row.desciption,
    },
    {
      header: 'Unit Cost',
      render: (row) => row.unitCost,
    },
    {
      header: 'Amount',
      render: (row) => row.amount,
    },
    {
      header: 'Remarks',
      render: (row) => row.remarks,
    },
  ];
  const data = [
    {
      id: 1,
      quantity: '4',
      unit: 'pieces',
      desciption: 'Computer Set',
      unitCost: '50,000',
      amount: '200,000',
      remarks: '',
    },
  ];
  return (
    <div>
      <Template>
        Transaction Detail
        <div className='flex flex-col'>
          <div className='flex flex-col space-y-2'>
            <div className='flex space-x-4'>
              {detail.map((item, index) => (
                <React.Fragment key={index}>
                  <RowItem label='Control Number' value={item.controlNumber} />
                  <RowItem label='Date Prepared' value={item.datePrepared} />
                  <RowItem label='Date Needed' value={item.dateNeeded} />
                </React.Fragment>
              ))}
            </div>
            <div className='flex space-x-4'>
              {detail.map((item, index) => (
                <React.Fragment key={index}>
                  <RowItem label='From' value={item.from} />
                  <RowItem label='Department' value={item.department} />
                </React.Fragment>
              ))}
            </div>
            <div className='flex space-x-4'>
              {detail.map((item, index) => (
                <React.Fragment key={index}>
                  <RowItem label='Request For' value={item.request_for} />
                  <RowItem label='Notes' value={item.notes} />
                </React.Fragment>
              ))}
            </div>
            <Table
              //   tableName='School Calendar S.Y. 2023 - 2024'
              rows={rows}
              data={data}
            />
            <div className='flex space-x-4'>
              <Button color='success' className='flex w-1/2 mx-auto'>
                Approved
              </Button>
              <Button color='warning' className='flex w-1/2 mx-auto'>
                On-Hold
              </Button>
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
}

export default Transaction;
