import React, { useState } from 'react';

function DateInput({ label, ...rest }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="mb-2 w-full pt-1">
      <label
        className={`absolute mt-3 ml-1 pr-6 pl-3 text-xs text-gray-500 transition-all bg-white ${
          (focused || rest.value) && 'text-indigo-600'
        } ${focused && '-translate-y-4'}`}
        style={{ fontSize: focused ? '0.5rem' : '0.625rem' }} // Adjust font size
      >
        {label}
      </label>
      <input
        type="date"
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md pl-3" // Adjust padding for better alignment
      />
    </div>
  );
}

export default DateInput;
