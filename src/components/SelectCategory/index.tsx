'use client';

import { Button, Select } from 'antd';
import { useState } from 'react';
import useGetAllCategories from '@/hooks/useGetAllCategories';

export default function SelectCategory() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  console.log('SelectCategory');
  const { allData } = useGetAllCategories();
  const options = allData.map(category => ({
    value: category,
    label: category,
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
      <Select
        mode="tags"
        value={selectedValues}
        placeholder="Категория"
        onChange={handleChange}
        options={options}
        style={{ width: 240 }}
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