import React from 'react';
import { HiPlus } from 'react-icons/hi';

const TableAddGSD = ({ tableName, rows, data, addRow }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='mb-4'>
        <h2 className='text-lg  text-center'>{tableName}</h2>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-striped'>
        <thead className='text-gray-700'>
          <tr>
            {rows.map((row) => (
              <th key={row.key} scope='col' className='px-6 pt-1'>
                {row.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className={`border-b dark:border-gray-700`}>
              {rows.map((row) => (
                <td key={row.key} className='px-1 py-1'>
                  {row.render(item)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={rows.length} className='px-2 py-2 text-center'>
              <button
                onClick={addRow}
                className='text-gray-500'
                color='success'
              >
                <HiPlus className='inline-block mr-1' />
                Add Entry
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableAddGSD;
