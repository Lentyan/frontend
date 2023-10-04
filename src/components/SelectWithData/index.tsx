import React, { useState, FC, useId } from 'react';
import Select, { components, ControlProps, OptionProps } from 'react-select';
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
  control: (provided: CSSObject, state: ControlProps<OptionType, boolean>) => ({
    ...provided,
    width: '240px',
    fontSize: '20px',
    // backgroundColor: 'blue',
    padding: '10px 0px 10px 0px',
    ...(state.isFocused && {
      border: '1px solid #a1a1a1',
    }),
    ...(state.isDisabled && {
      border: '1px solid #f6f6f6',
    }),
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #a1a1a1',
    },
  }),
  valueContainer: (provided: CSSObject) => ({
    ...provided,
    // flexWrap: 'nowrap',
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
  menu: (provided: CSSObject) => ({
    ...provided,
    padding: '16px 4px 16px 4px',
    borderRadius: '8px',
    border: 'none',
    overflow: 'hidden',
    boxShadow: '0px 4px 20px 0px #00000014',
  }),
  menuList: (provided: CSSObject) => ({
    ...provided,
    border: 'none',
    padding: '0',
    overflowY: 'scroll' as 'scroll',
    scrollbarWidth: 'thin' as 'thin',
    scrollbarColor: 'red #f6f6f6',
    // для веб-китов (Chrome, Edge, Safari):
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f6f6f6',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#a1a1a1',
      borderRadius: '20px',
      border: '3px solid #a1a1a1',
    },
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
      isDisabled={true}
      instanceId={useId()}
      styles={customStyles}
      placeholder={placeholder}
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
