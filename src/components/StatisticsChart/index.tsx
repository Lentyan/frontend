'use client';
import React from 'react';
import { Line } from '@ant-design/plots';

const StatisticsChart = () => {
  const tk1 = [
    { date: '2023-09-01', value: 70, type: 'TK1' },
    { date: '2023-09-02', value: 78, type: 'TK1' },
    { date: '2023-09-03', value: 87, type: 'TK1' },
    { date: '2023-09-04', value: 95, type: 'TK1' },
    { date: '2023-09-05', value: 84, type: 'TK1' },
    { date: '2023-09-06', value: 91, type: 'TK1' },
    { date: '2023-09-07', value: 97, type: 'TK1' },
    { date: '2023-09-08', value: 96, type: 'TK1' },
    { date: '2023-09-09', value: 91, type: 'TK1' },
    { date: '2023-09-10', value: 94, type: 'TK1' },
    { date: '2023-09-11', value: 88, type: 'TK1' },
    { date: '2023-09-12', value: 81, type: 'TK1' },
    { date: '2023-09-13', value: 80, type: 'TK1' },
    { date: '2023-09-14', value: 86, type: 'TK1' },
  ];

  const tk2 = [
    { date: '2023-09-01', value: 51, type: 'TK2'  },
    { date: '2023-09-02', value: 75, type: 'TK2'  },
    { date: '2023-09-03', value: 88, type: 'TK2'  },
    { date: '2023-09-04', value: 72, type: 'TK2'  },
    { date: '2023-09-05', value: 87, type: 'TK2'  },
    { date: '2023-09-06', value: 95, type: 'TK2'  },
    { date: '2023-09-07', value: 91, type: 'TK2'  },
    { date: '2023-09-08', value: 98, type: 'TK2'  },
    { date: '2023-09-09', value: 97, type: 'TK2'  },
    { date: '2023-09-10', value: 94, type: 'TK2'  },
    { date: '2023-09-11', value: 97, type: 'TK2'  },
    { date: '2023-09-12', value: 95, type: 'TK2'  },
    { date: '2023-09-13', value: 91, type: 'TK2'  },
    { date: '2023-09-14', value: 87, type: 'TK2'  },
  ];


  const combinedData = [...tk1, ...tk2];

  const config = {
    data: combinedData,
    height: 400,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    yAxis: {
      label: {
        formatter: (value: string) => `${Number(value)}%`,
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: {
      customContent: (title: string, items: any[]) => {
        return (
          <div>
            <h4>{title}</h4>
            {items.map(item => (
              <p key={item.name}>
                {item.name}: {item.value}%
              </p>
            ))}
          </div>
        );
      },
    },
    legend: {
      position: 'bottom' as const,
      layout: 'horizontal' as const,
    },
  };

  return <Line {...config} />;
};

export default StatisticsChart;
