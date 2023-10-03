'use client';

import React, { useState } from 'react';
import Select, { components, OptionProps } from 'react-select';
import useGetAllGroups from '@/hooks/useGetAllGroups';
import { CSSObject } from '@emotion/react';

const MySelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const { allData } = useGetAllGroups();

  type ValueType<OptionType> = OptionType | readonly OptionType[] | null;

  type OptionType = {
    value: string;
    label: string;
  };

  const options: OptionType[] = allData.map(group => ({
    value: group,
    label: group,
  }));

  const handleChange = (values: ValueType<OptionType>) => {
    if (Array.isArray(values)) {
      setSelectedOptions(values);
    } else if (values === null) {
      setSelectedOptions([]);
    }
  };


  const Option = (props: OptionProps<any, boolean>) => {
    return (
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null}/>
        {' ' + props.label}
      </components.Option>
    );
  };

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


  return (
    <>
      <Select
        key="unique-key"
        styles={customStyles}
        placeholder="Группа"
        classNamePrefix="custom-select"
        isMulti
        components={{ Option }}
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
    </>
  );
};

export default MySelect;
