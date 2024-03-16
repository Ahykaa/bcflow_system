import { Label, Select } from 'flowbite-react';

const SelectParticulars = ({ name, options }) => {
  const WordLength = Math.max(...options.map(option => option.label.length));
  const width = WordLength * 10;

  return (
    <div>
      <Select id={name} variant='outlined' style={{ width: `${width}px` }} sizing='md'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectParticulars;
