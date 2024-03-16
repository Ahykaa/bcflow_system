import React from 'react';

function Checkbox({ id, label, checked, className, ...rest }) {
  return (
    <div
      className={`flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-full ${className}`}
    >
      <input
        id={id}
        type='checkbox'
        value=''
        name={id}
        // checked={checked}
        className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        {...rest}
      />
      <label
        htmlFor={id}
        className='w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
