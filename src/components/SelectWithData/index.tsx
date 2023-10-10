import React, { FC, useId } from 'react';
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
  onSelect: (selected: OptionType[]) => void;
  valueSelector: (state: any) => OptionType[];
  isEnabled: boolean,
};

const SelectWithData: FC<Props> = ({ placeholder, data, onSelect, valueSelector, isEnabled }) => {
  const selectedValues = useTypedSelector(valueSelector);
  function handleChange(selectedOptions: any) {
    const selected = selectedOptions || [];
    onSelect(selected);
  }

  const formattedData = data?.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item,
  ) as OptionType[];

  return (
    <div className={styles.SelectWithData}>
      <label>
        <span className={styles.SelectWithData__name}>{placeholder}</span>
        <Select
          isDisabled={!isEnabled}
          instanceId={useId()}
          styles={customStyles}
          placeholder={placeholder}
          isMulti
          components={{ Option: SelectOption, MultiValue }}
          value={selectedValues}
          onChange={handleChange}
          options={formattedData}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
        />
      </label>
    </div>
  );
};

export default SelectWithData;
