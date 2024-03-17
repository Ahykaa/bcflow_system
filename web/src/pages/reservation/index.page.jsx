import Card from '@/components/organisms/Card';
import DateInput from '@/components/organisms/DateInput';
import Radio from '@/components/organisms/Radio';
import SelectParticulars from '@/components/organisms/SelectParticulars';
import TableAdd from '@/components/organisms/TableAdd';
import TableAddGSD from '@/components/organisms/TableAddGSD';
import TotalBox from '@/components/organisms/TableBox';
import TextInput from '@/components/organisms/TextInput';
import TextInputGSD from '@/components/organisms/TextInputGSD';
import TemplatesGSD from '@/components/templates/TemplatesGSD';
import { assetList } from '@/hooks/particuls';

import { Button } from 'flowbite-react';
import React, { useState } from 'react';

function Reservation() {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const radioChange = (value) => {
    setSelectedRadio(value);
  };

  const [tableData, setTableData] = useState([
    { quantity: '', rate: '', particulars: '', amount: '', ownItems: ''},
  ]);

  const updateTableData = (index, field, value) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      // Add the particulars field to the row
      newData[index]['particulars'] = selectedRadio;
      return newData;
    });
  };

  const totalAmount = tableData.reduce((total, row) => {
    if (selectedRadio && row.particulars === selectedRadio) {
      total += parseFloat(row.amount || 0);
    }
    return total;
  }, 0);

  const rows = [
    {
      header: 'Particulars',
      render: (row, index) => <SelectParticulars options={assetList} />,
    },
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
      header: 'Rate',
      render: (row, index) => (
        <TextInput
          variant='filled'
          value={row.rate}
          onChange={(e) => updateTableData(index, 'rate', e.target.value)}
        />
      ),
    },
    {
      header: 'Amount',
      render: (row, index) => {
        const amount = row.quantity * row.rate; // Calculate the amount based on quantity and rate
        return (
          <TextInputGSD
            variant='filled'
            label='Amount'
            value={amount}
            readOnly
          />
        );
      },
    },
  ];
  const owned = [
    {
      header: 'Owned Items',
      render: (row, index) => (
        <TextInput
          variant='filled'
          value={row.ownItems}
          onChange={(e) => updateTableData(index, 'ownItems', e.target.value)}
        />
      ),
    },
  ];
  return (
    <div>
      <TemplatesGSD>
        Facility Reservation
        <form className='flex flex-col '>
          <div className='flex flex-col space-y-2'>
            <div className='flex space-x-4'>
              <DateInput label='Date of Application' />
              <TextInput variant='outlined' label='Company/Name' />
              <TextInput variant='outlined' label='Address' />
              <TextInput variant='outlined' label='Representative' />
            </div>
            <div className='flex space-x-4 '>
              <TextInput variant='outlined' label='Activity' />
              <DateInput label='Date of Event' />
              <TextInput variant='outlined' label='Expected Number of Participants' />
            </div>
            <div className='space-x-4 mt-4'>
              <TableAddGSD rows={owned} data={tableData} />
            </div>
            <div className='flex space-x-4'>
              <Radio
                id='bordered-Radio-1'
                label="Martha's Place"
                checked={selectedRadio === "Martha's Place"}
                onChange={() => radioChange("Martha's Place")}
              />
              <Radio
                id='bordered-Radio-2'
                label='Amphitheater'
                checked={selectedRadio === 'Amphitheater'}
                onChange={() => radioChange('Amphitheater')}
              />
            </div>
            <div className='flex space-x-4'>
              <Radio
                id='bordered-Radio-3'
                label='Classroom'
                checked={selectedRadio === 'Classroom'}
                onChange={() => radioChange('Classroom')}
              />
              <Radio
                id='bordered-Radio-4'
                label='Open Court'
                checked={selectedRadio === 'Open Court'}
                onChange={() => radioChange('Open Court')}
              />
            </div>
            <div className='flex space-x-4'>
              <TextInput variant='filled' label='Others' />
              <TextInput variant='filled' label='Amount' />
            </div>
            <div className='space-x-4 mt-4'>
              <TableAdd rows={rows} data={tableData} />
            </div>
            <div className='pace-x-4 mt-4'>
              <TotalBox totalAmount={totalAmount} />
            </div>
            <Button color='success' type='submit' className='flex w-1/2 mx-auto'>
              Submit
            </Button>
          </div>
        </form>
      </TemplatesGSD>
    </div>
  );
}
export default Reservation;