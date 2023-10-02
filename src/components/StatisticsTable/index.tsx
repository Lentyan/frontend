'use client';

import { Table } from 'antd';
import { STATISTICS_TABLE_COLUMNS } from '@/utils/constants';
import { STATISTICS_TABLE_DATA } from '../../../test_data';


const StatisticsTable = () => {
  return (
    <Table columns={STATISTICS_TABLE_COLUMNS} dataSource={STATISTICS_TABLE_DATA} />
  );
};

export default StatisticsTable;