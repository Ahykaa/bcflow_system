import React from 'react';
import { Datepicker, FloatingLabel } from 'flowbite-react';

function DateInput({ variant, label }) {
  return (
    <div className='mb-2 w-full pt-1'>
      <Datepicker variant={variant} title={label} sizing='sm'/>
    </div>
  );
}

export default DateInput;
