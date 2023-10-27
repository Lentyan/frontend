'use client';

import styles from './StatisticsTable.module.scss';
import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Statistics } from '@/interfaces/Statistics';
import { STATISTICS_TABLE_DATA } from '../../../test_data';
import Cell from '../CellText';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const defaultData: Statistics[] = STATISTICS_TABLE_DATA;

const columnHelper = createColumnHelper<Statistics>();

const columns = [
  columnHelper.accessor(
    'store',
    {
      header: () => <Cell type="header">ТК</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'productGroup',
    {
      header: () => <Cell type="header">Группа</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'category',
    {
      header: () => <Cell type="header">Категория</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'subcategory',
    {
      header: () => <Cell type="header">Подкатегория</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'productName',
    {
      header: () => <Cell type="header">Товар</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'uom',
    {
      header: () => <Cell type="header">Ед.изм</Cell>,
      cell: info => <Cell type="small">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'actualVolumeAmount',
    {
      header: () => <Cell type="header" position="right">Факт (шт/кг)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'forecastVolumeAmount',
    {
      header: () => <Cell type="header" position="right">Прогноз (шт/кг)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'differenceVolumeAmount',
    {
      header: () => <Cell type="header" position="right">Разница (шт/кг)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'actualSales',
    {
      header: () => <Cell type="header" position="right">Факт (руб)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'forecastSales',
    {
      header: () => <Cell type="header" position="right">Прогноз (руб)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'differenceSales',
    {
      header: () => <Cell type="header" position="right">Разница (руб)</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'wape',
    {
      header: () => <Cell type="header" position="right">Качество по WAPE</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
];

const StatisticsTable = () => {
  const testData = useTypedSelector((state) => state.dataSales);
  console.log(testData);
  const [data] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <section className={styles.StatisticsTable}>
      <table className={styles.StatisticsTable__table}>
        <colgroup>
          <col style={{ width: '4.30%' }} />
          <col style={{ width: '4.84%' }} />
          <col style={{ width: '6.65%' }} />
          <col style={{ width: '6.8%' }} />
          <col style={{ width: '7.4%' }} />
          <col style={{ width: '3.1%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '9.0%' }} />
          <col style={{ width: '10.2%' }} />
        </colgroup>
        <thead className={styles.StatisticsTable__header}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className={styles.StatisticsTable__headerText}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className={styles.StatisticsTable__tableRow}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className={styles.StatisticsTable__bodyText}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
};


export default StatisticsTable;