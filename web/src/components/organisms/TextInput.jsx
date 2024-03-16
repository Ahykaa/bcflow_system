import React from 'react';
import { FloatingLabel } from 'flowbite-react';

function TextInput({ variant, label }) {
  return (
    <div className='mb-2 w-full '>
      <FloatingLabel variant={variant} label={label} sizing='sm' />
    </div>
  );
}

export default TextInput;
