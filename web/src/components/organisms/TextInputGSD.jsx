import React from 'react';
import { FloatingLabel } from 'flowbite-react';

function TextInputGSD({ variant, label, value, readOnly }) {
  const formattedValue = `₱ ${value.toFixed(2)}`;

  return (
    <div className='mb-2 w-full'>
      <FloatingLabel
        variant={variant}
        label={label}
        sizing='sm'
        readOnly={readOnly}
        value={formattedValue}
      />
    </div>
  );
}

export default TextInputGSD;
