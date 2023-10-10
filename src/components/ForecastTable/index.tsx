'use client';

import styles from './forecastTable.module.scss';
import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FORECAST_TABLE_DATA } from '../../../test_data';
import Cell from '../CellText';


const defaultData: any[] = FORECAST_TABLE_DATA;

const columnHelper = createColumnHelper<any>();

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
    'day1',
    {
      header: () => <Cell type="header" position="right">01.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day2',
    {
      header: () => <Cell type="header" position="right">02.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day3',
    {
      header: () => <Cell type="header" position="right">03.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day4',
    {
      header: () => <Cell type="header" position="right">04.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day5',
    {
      header: () => <Cell type="header" position="right">05.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day6',
    {
      header: () => <Cell type="header" position="right">06.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day7',
    {
      header: () => <Cell type="header" position="right">07.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day8',
    {
      header: () => <Cell type="header" position="right">08.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day9',
    {
      header: () => <Cell type="header" position="right">09.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day10',
    {
      header: () => <Cell type="header" position="right">10.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day11',
    {
      header: () => <Cell type="header" position="right">11.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day12',
    {
      header: () => <Cell type="header" position="right">12.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day13',
    {
      header: () => <Cell type="header" position="right">13.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),
  columnHelper.accessor(
    'day14',
    {
      header: () => <Cell type="header" position="right">14.09.23</Cell>,
      cell: info => <Cell type="small" position="right">{info.getValue()}</Cell>,
    }),

];

const ForecastTable = () => {
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
          <col style={{ width: '80px' }} />
          <col style={{ width: '86px' }} />
          <col style={{ width: '124px' }} />
          <col style={{ width: '120px' }} />
          <col style={{ width: 'auto' }} />
          <col style={{ width: '66px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '84px' }} />
          <col style={{ width: '104px' }} />
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


export default ForecastTable;