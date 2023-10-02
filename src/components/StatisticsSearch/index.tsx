'use client';

import { Button, Select } from 'antd';
import useGetAllShops from '@/hooks/useGetAllShops';
import { useState } from 'react';

export default function StatisticsSearch() {
  const { allShops, isLoading, isError } = useGetAllShops();
  console.log(allShops, isLoading, isError);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const options = allShops.map(shop => ({
    value: shop.id.toString(),
    label: shop.store,
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
      <form>
        <Select
          mode="tags"
          value={selectedValues}
          style={{
            width: '100%',
          }}
          placeholder="Tags Mode"
          onChange={handleChange}
          options={options}
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
      </form>
    </>
  );
}