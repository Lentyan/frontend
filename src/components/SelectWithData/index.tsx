import React, { FC, useCallback, useId } from 'react';
import Select from 'react-select';
import styles from './SelectWithData.module.scss';
import { customStyles } from '@/components/SelectWithData/customStyles';
import SelectOption from './Option';
import { MultiValue } from './MultiValue';
import { OptionType } from '@/types/SelectOption';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type Props = {
  placeholder: string;
  data?: (string | OptionType)[];
  fieldName: string;
  onSelect: (selected: OptionType[]) => void;
  valueSelector: (state: any) => OptionType[];
};

const SelectWithData: FC<Props> = ({ placeholder, data, fieldName, onSelect, valueSelector }) => {
  const selectedValues = useTypedSelector(valueSelector);
  const handleChange = useCallback((selectedOptions) => {
    const selected = selectedOptions || [];
    onSelect(selected);
  }, [onSelect]);

  return (
    <div className={styles.SelectWithData}>
      <label>
        <span className={styles.SelectWithData__name}>{placeholder}</span>
        <Select
          instanceId={useId()}
          styles={customStyles}
          placeholder={placeholder}
          isMulti
          components={{ Option: SelectOption, MultiValue }}
          value={selectedValues}
          onChange={handleChange}
          options={data}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
        />
      </label>
    </div>
  );
};

export default SelectWithData;
