import Card from '@/components/organisms/Card';
import Checkbox from '@/components/organisms/Checkbox';
import SelectInput from '@/components/organisms/SelectInput';
import TableAdd from '@/components/organisms/TableAdd';
import TextInput from '@/components/organisms/TextInput';
import Template from '@/components/templates/Template';
import { unitOptions } from '@/hooks/conts';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';

function Request() {
  // Initialize state for table data
  const [tableData, setTableData] = useState([
    { quantity: '', unit: '', particulars: '', unitCost: '', amount: '' },
  ]);

  // Function to update table data
  const updateTableData = (index, field, value) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };

  const rows = [
    {
      header: 'Quantity',
      render: (row, index) => (
        <TextInput
          variant='filled'
          value={row.quantity}
          onChange={(e) => updateTableData(index, 'quantity', e.target.value)}
        />
      ),
    },
    {
      header: 'Unit',
      render: (row, index) => <SelectInput options={unitOptions} />,
    },
    {
      header: 'Particulars/Desc./Specs',
      render: (row, index) => (
        <TextInput
          variant='outlined'
          value={row.particulars}
          onChange={(e) =>
            updateTableData(index, 'particulars', e.target.value)
          }
        />
      ),
    },
    {
      header: 'Unit Cost',
      render: (row, index) => (
        <TextInput
          variant='outlined'
          value={row.unitCost}
          onChange={(e) => updateTableData(index, 'unitCost', e.target.value)}
        />
      ),
    },
    {
      header: 'Amount',
      render: (row, index) => (
        <TextInput
          variant='outlined'
          value={row.amount}
          onChange={(e) => updateTableData(index, 'amount', e.target.value)}
        />
      ),
    },
    {
      header: 'Remarks',
      render: (row, index) => (
        <TextInput
          variant='filled'
          value={row.amount}
          onChange={(e) => updateTableData(index, 'remarks', e.target.value)}
        />
      ),
    },
  ];
  return (
    <div>
      <Template>
        Request
        <form className='flex flex-col '>
          <div className='flex flex-col space-y-2'>
            <div className='flex space-x-4'>
              <TextInput variant='outlined' label='Control No.' />
              <TextInput variant='outlined' label='Date Prepared' />
              <TextInput variant='outlined' label='Date Needed' />
            </div>
            <div className='flex space-x-4 '>
              <TextInput variant='outlined' label='From' />
              <TextInput variant='outlined' label='Department' />
            </div>
            <div className='flex space-x-4'>
              <Checkbox
                id='bordered-checkbox-1'
                label='Check/Repair/Calibrate'
              />
              <Checkbox
                id='bordered-checkbox-2'
                label='Riso/Photocopy/Bind/Print'
                checked
              />
            </div>
            <div className='flex space-x-4'>
              <Checkbox
                id='bordered-checkbox-1'
                label='Housekeeping/Landscaping/Laundry/Security'
              />
              <Checkbox
                id='bordered-checkbox-2'
                label='Deliver/Transfer/Setup/Restore/Install/etc'
                checked
              />
            </div>
            <div className='flex space-x-4'>
              <Checkbox
                id='bordered-checkbox-1'
                label='Materials/Supplies/Equipment'
              />
              <Checkbox id='bordered-checkbox-2' label='Others' checked />
            </div>
            <div className='flex space-x-4'>
              <TextInput
                variant='filled'
                label='Specify if you select Others'
              />
            </div>
            <div className='space-x-4 mt-4'>
              <TableAdd rows={rows} data={tableData} />
            </div>
            <Button
              color='success'
              type='submit'
              className='flex w-1/2 mx-auto'
            >
              Submit
            </Button>
          </div>
        </form>
      </Template>
    </div>
  );
}

export default Request;
