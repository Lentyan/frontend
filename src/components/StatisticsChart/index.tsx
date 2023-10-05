'use client';

import { Line } from '@ant-design/plots';
import { Annotation } from '@antv/g2plot';
import styles from './StatisticsChart.module.scss';

const StatisticsChart = () => {
  const tk1 = [
    { date: '01.09.23 - 07.09.23', value: 4, type: 'ТК 123' },
    { date: '08.09.23 - 14.09.23', value: 5, type: 'ТК 123' },
    { date: '15.09.23 - 21.09.23', value: 3, type: 'ТК 123' },
    { date: '22.09.23 - 28.09.23', value: 5, type: 'ТК 123' },
    { date: '29.09.23 - 05.10.23', value: 4, type: 'ТК 123' },
    { date: '06.10.23 - 12.10.23', value: 1, type: 'ТК 123' },
    { date: '13.10.23 - 19.10.23', value: 6, type: 'ТК 123' },
    { date: '20.10.23 - 26.10.23', value: 4, type: 'ТК 123' },
    { date: '27.10.23 - 02.11.23', value: 1, type: 'ТК 123' },
    { date: '03.11.23 - 09.11.23', value: 3, type: 'ТК 123' },
    { date: '10.11.23 - 16.11.23', value: 2, type: 'ТК 123' },
    { date: '17.11.23 - 23.11.23', value: 1, type: 'ТК 123' },
    { date: '24.11.23 - 30.11.23', value: 4, type: 'ТК 123' },
  ];

  const tk2 = [
    { date: '01.09.23 - 07.09.23', value: 1, type: 'ТК 234'  },
    { date: '08.09.23 - 14.09.23', value: 5, type: 'ТК 234'  },
    { date: '15.09.23 - 21.09.23', value: 4, type: 'ТК 234'  },
    { date: '22.09.23 - 28.09.23', value: 2, type: 'ТК 234'  },
    { date: '29.09.23 - 05.10.23', value: 5, type: 'ТК 234'  },
    { date: '06.10.23 - 12.10.23', value: 5, type: 'ТК 234'  },
    { date: '13.10.23 - 19.10.23', value: 1, type: 'ТК 234'  },
    { date: '20.10.23 - 26.10.23', value: 4, type: 'ТК 234'  },
    { date: '27.10.23 - 02.11.23', value: 2, type: 'ТК 234'  },
    { date: '03.11.23 - 09.11.23', value: 5, type: 'ТК 234'  },
    { date: '10.11.23 - 16.11.23', value: 4, type: 'ТК 234'  },
    { date: '17.11.23 - 23.11.23', value: 6, type: 'ТК 234'  },
    { date: '24.11.23 - 30.11.23', value: 3, type: 'ТК 234'  },
  ];

  const tk3 = [
    { date: '01.09.23 - 07.09.23', value: 3, type: 'ТК 30'  },
    { date: '08.09.23 - 14.09.23', value: 4, type: 'ТК 30'  },
    { date: '15.09.23 - 21.09.23', value: 2, type: 'ТК 30'  },
    { date: '22.09.23 - 28.09.23', value: 1, type: 'ТК 30'  },
    { date: '29.09.23 - 05.10.23', value: 3, type: 'ТК 30'  },
    { date: '06.10.23 - 12.10.23', value: 5, type: 'ТК 30'  },
    { date: '13.10.23 - 19.10.23', value: 4, type: 'ТК 30'  },
    { date: '20.10.23 - 26.10.23', value: 4, type: 'ТК 30'  },
    { date: '27.10.23 - 02.11.23', value: 5, type: 'ТК 30'  },
    { date: '03.11.23 - 09.11.23', value: 3, type: 'ТК 30'  },
    { date: '10.11.23 - 16.11.23', value: 4, type: 'ТК 30'  },
    { date: '17.11.23 - 23.11.23', value: 2, type: 'ТК 30'  },
    { date: '24.11.23 - 30.11.23', value: 3, type: 'ТК 30'  },
  ];


  const combinedData = [...tk1, ...tk2, ...tk3];
  const maxValue = Math.max(...combinedData.map(d => d.value));
  const config = {
    data: combinedData,
    seriesField: 'type',
    autoFit: true,
    padding: [80, 110, 80, 70],
    lineStyle: {
      lineWidth: 3,
    },
    xField: 'date',
    yField: 'value',
    xAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#4d4d4d',
          lineWidth: 2,
        },
      },
      label: {
        offset: 20,
        style: {
          fontSize: 12,
          fill: '#2C2A29',
        },
      },
    },
    yAxis: {
      tickCount: 4,
      label: {
        offset: 20,
        style: {
          fontSize: 12,
          fill: '#2C2A29',
        },
        formatter: (text: any) => {
          if (parseFloat(text) === 0) {
            return '';
          }
          return text;
        },
      },
      grid: {
        visible: true,
        line: {
          style: {
            stroke: '#a1a1a1',
            lineWidth: 0.2,
          },
        },
      },
      line: {
        style: {
          stroke: '#4d4d4d',
          lineWidth: 2,
        },
      },
    },
    annotations: [
      {
        type: 'text',
        position: ['start', 'end'],
        content: 'WAPE',
        offsetX: -23,
        offsetY: -57,
        style: {
          fill: '#333',
          textAlign: 'start',
          fontSize: 16,
          fontWeight: 500,
        },
      },
      {
        type: 'line',
        start: ['start', 'min'],
        end: ['start', maxValue + 1],
        style: {
          stroke: '#4d4d4d',
          lineWidth: 2,
        },
      },
      {
        type: 'text',
        position: ['end', 'start'],
        content: 'Неделя',
        offsetX: 15,
        offsetY: 0,
        style: {
          fill: '#333',
          textAlign: 'start',
          fontSize: 16,
          fontWeight: 500,
        },
      },
    ] as Annotation[],
    color: ['#003C96', '#00BE64', '#FFB900'],
    tooltip: {
      shared: false,
      showCrosshairs: false,
      domStyles: {
        'g2-tooltip': {
          backgroundColor: '#FFFFFF',
          padding: '0',
          margin: '0',
          borderRadius: '10px',
          opacity: 1,
        },
      },
      customContent: (title: string, items: any[]) => {
        return (
          <div className={styles.StatisticsChart__tooltip}>
            {items.map(item => (
              <div key={item.name} className={styles.StatisticsChart__tooltipContainer}>
                <table className={styles.StatisticsChart__tooltipTable}>
                  <caption className={styles.StatisticsChart__tooltipHeader}>Продажи ниже прогноза</caption>
                  <tbody>
                  <tr>
                    <td className={styles.StatisticsChart__tooltipItemCaption}><p className={styles.StatisticsChart__tooltipItemText}>Разница, руб</p></td>
                    <td className={styles.StatisticsChart__tooltipItemValue}><p className={styles.StatisticsChart__tooltipItemText}>− 124 000</p></td>
                  </tr>
                  <tr>
                    <td className={styles.StatisticsChart__tooltipItemCaption}><p className={styles.StatisticsChart__tooltipItemText}>Разница, шт</p></td>
                    <td className={styles.StatisticsChart__tooltipItemValue}><p className={styles.StatisticsChart__tooltipItemText}>− 1 000</p></td>
                  </tr>
                  <tr>
                    <td className={styles.StatisticsChart__tooltipItemCaption}><p className={styles.StatisticsChart__tooltipItemText}>WAPE</p></td>
                    <td className={styles.StatisticsChart__tooltipItemValue}><p className={styles.StatisticsChart__tooltipItemText}>{item.value}</p></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        );
      },
    },
    legend: {
      offsetY: 15,
      offsetX: 75,
      position: 'bottom-left' as const,
      layout: 'horizontal' as const,
      itemName: {
        style: {
          fontSize: 16,
          fill: '#2C2A29',
        },
      },
      marker: {
        symbol: 'square' as const,
        style: {
          r: 4,
          lineWidth: 12,
        },
      },
    },
  };

  return <Line {...config} />;
};

export default StatisticsChart;
