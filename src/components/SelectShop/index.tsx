import { Button, Select } from 'antd';
import { useState } from 'react';
import useGetAllShops from '@/hooks/useGetAllShops';

export default function SelectShop() {
  console.log('SelectShop');
  const { allData } = useGetAllShops(1, 20);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const options = allData.map(shop => ({
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
    <Select
      mode="tags"
      value={selectedValues}
      placeholder="Выберите ТК"
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
  );
}