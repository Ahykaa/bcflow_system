import React from 'react';
import { FloatingLabel } from 'flowbite-react';

function DateInput({ variant,label }) {
  return (
    <div className="mb-2 w-full">
      <FloatingLabel
        type="date"
        id="date"
        label={label}
        variant={variant}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

export default DateInput;