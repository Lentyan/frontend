'use client';

import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Statistics } from '@/interfaces/Statistics';
import { STATISTICS_TABLE_DATA } from '../../../test_data';


const defaultData: Statistics[] = STATISTICS_TABLE_DATA;

const columnHelper = createColumnHelper<Statistics>();

const columns = [
  columnHelper.accessor(
    'store',
    {
      header: () => 'ТК',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'productGroup',
    {
      header: () => 'Группа',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'category',
    {
      header: () => 'Категория',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'subcategory',
    {
      header: () => 'Подкатегория',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'productName',
    {
      header: () => 'Товар',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'uom',
    {
      header: () => 'Ед.изм',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'actualVolumeAmount',
    {
      header: () => 'Факт (шт/кг)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'forecastVolumeAmount',
    {
      header: () => 'Прогноз (шт/кг)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'differenceVolumeAmount',
    {
      header: () => 'Разница (шт/кг)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'actualSales',
    {
      header: () => 'Факт (руб)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'forecastSales',
    {
      header: () => 'Прогноз (руб)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'differenceSales',
    {
      header: () => 'Разница (руб)',
      cell: info => info.getValue(),
    }),
  columnHelper.accessor(
    'wape',
    {
      header: () => 'Качество по Wape',
      cell: info => info.getValue(),
    }),

];

const StatisticsTable = () => {
  const [data] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-2">
      <table>
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
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
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};


export default StatisticsTable;