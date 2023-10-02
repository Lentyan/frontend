'use client';

import { Select, Button } from 'antd';
export default function StatisticsSearch() {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const handleChange = (value:string) => {
    console.log(`selected ${value}`);
  };

  const handleClear = () => {
    console.log('Список очищен!');
  };

  return (
    <form>
      <Select
        mode="tags"
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
  );
}