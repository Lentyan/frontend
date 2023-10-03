import React, { useState, FC, useId } from 'react';
import Select, { components, OptionProps } from 'react-select';
import { CSSObject } from '@emotion/react';

type ValueType<OptionType> = OptionType | readonly OptionType[] | null;

type OptionType = {
  value: string;
  label: string;
};

type Props = {
  placeholder: string;
  data: (string | OptionType)[];
};

const Option: FC<OptionProps<OptionType, boolean>> = (props) => (
  <components.Option {...props}>
    <input type="checkbox" checked={props.isSelected} onChange={() => null} />
    {' ' + props.label}
  </components.Option>
);

const customStyles = {
  control: (provided: CSSObject) => ({
    ...provided,
    fontSize: '20px',
    // backgroundColor: 'blue',
    padding: '10px 15px 10px 15px',
  }),
  placeholder: (provided: CSSObject) => ({
    ...provided,
    // backgroundColor: 'green',
  }),
  input: (provided: CSSObject) => ({
    ...provided,
    fontSize: '20px',
    height: '31px',
    cursor: 'text',
    // backgroundColor: 'red',
  }),

};

const SelectWithData: FC<Props> = ({ placeholder, data }) => {
  console.log(placeholder);
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const options: OptionType[] = data.map(item =>
    typeof item === 'string' ? { value: item, label: item } : item,
  );

  const handleChange = (values: ValueType<OptionType>) => {
    if (Array.isArray(values)) {
      setSelectedOptions(values);
    } else if (values === null) {
      setSelectedOptions([]);
    }
  };

  return (
    <Select
      instanceId={useId()}
      styles={customStyles}
      placeholder={placeholder}
      classNamePrefix="custom-select"
      isMulti
      components={{ Option }}
      value={selectedOptions}
      onChange={handleChange}
      options={options}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
    />
  );
};

export default SelectWithData;
