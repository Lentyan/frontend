import { Button, Select } from 'antd';
import { useState } from 'react';
import useGetAllGroups from '@/hooks/useGetAllGroups';
import styles from './MySelect.module.css';

export default function SelectGroup() {
  console.log('SelectGroup');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const { allData } = useGetAllGroups();
  const options = allData.map(group => ({
    value: group,
    label: group,
  }));
  const handleChange = (values: string[]) => {
    setSelectedValues(values);
    console.log(`selected ${values}`);
  };
  const handleClear = () => {
    setSelectedValues([]);
    console.log('Список очищен!');
  };

  return (
    <>
      <label className={styles.myLabel} htmlFor="groupSelect">Выберите группу:</label>
      <Select
        id="groupSelect"
        className={styles.mySelect}
        style={{ width: 240 }}
        mode="multiple"
        value={selectedValues}
        placeholder="Группа"
        onChange={handleChange}
        options={options}
        maxTagCount={1}
        maxTagTextLength={14}
        dropdownRender={(menu) => (
          <div>
            {menu}
            <Button
              type="link"
              onClick={handleClear}
              style={{ display: 'block', textAlign: 'center', padding: '4px' }}
            >
              Очистить
            </Button>
          </div>
        )}
      />
    </>
  );
}