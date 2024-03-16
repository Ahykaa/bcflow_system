import { Label, Select } from 'flowbite-react';

const SelectInput = ({ name, options }) => {
  return (
    <div>
      <Select id={name} variant='outlined' className='w-32' sizing='md'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectInput;
