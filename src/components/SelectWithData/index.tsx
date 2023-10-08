import React, { FC, useEffect, useId } from 'react';
import Select from 'react-select';
import DropdownIndicator from '@/components/DropdownIndicator';
import styles from './SelectWithData.module.scss';
import { customStyles } from '@/components/SelectWithData/customStyles';
import { useActions } from '@/hooks/useActions';
import SelectOption from './Option';
import { MultiValue } from './MultiValue';
import { OptionType } from '@/types/SelectOption';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type ValueType<OptionType> = OptionType | readonly OptionType[] | null;
type Props = {
  placeholder: string;
  data: (string | OptionType)[];
  fieldName: FieldKey;
};

const fieldOrder = ['shops', 'groups', 'categories', 'subcategories', 'sku'] as const;

type FieldKey = typeof fieldOrder[number];

interface FieldPayload {
  fieldName: FieldKey;
  value: OptionType[];
}

const SelectWithData: FC<Props> = ({ placeholder, data, fieldName }) => {
  const { setFieldValue, setFieldEnabled } = useActions();
  const options: OptionType[] = data.map(item =>
    typeof item === 'string' ? { value: item, label: item } : item,
  );
  const field = useTypedSelector((state) => state.searchForm.fields[fieldName]);
  const currentIndex = fieldOrder.indexOf(fieldName);

  /*
  useEffect(() => {
    if (field.value.length === 0) {
      for (let i = currentIndex + 1; i < fieldOrder.length; i++) {
        setFieldValue({ fieldName: fieldOrder[i], value: [] });
        setFieldEnabled({ fieldName: fieldOrder[i], isEnabled: false });
      }
    } else if (currentIndex + 1 < fieldOrder.length) {
      setFieldEnabled({ fieldName: fieldOrder[currentIndex + 1], isEnabled: true });
    }
  }, [currentIndex, field.value, setFieldEnabled, setFieldValue]);
 */

  const handleChange = (value: ValueType<OptionType>) => {
    setFieldValue({ fieldName, value: value as OptionType[] } as FieldPayload);
  };

  return (
    <div className={styles.SelectWithData}>
      <label>
        <span className={styles.SelectWithData__name}>{placeholder}</span>
        <Select
          isDisabled={!field.isEnabled}
          instanceId={useId()}
          styles={customStyles}
          placeholder={placeholder}
          isMulti
          components={{ Option: SelectOption, DropdownIndicator, MultiValue }}
          value={field.value}
          onChange={handleChange}
          options={options}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          //menuIsOpen={true}
        />
      </label>
    </div>
  );
};

export default SelectWithData;
