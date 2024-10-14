import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from './dataset.js';

export default function StackedAreas66KV() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          id: 'time',
          dataKey: 'time',
          scaleType: 'time',
          valueFormatter: (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]}
      series={[
        {
          id: 'Rangamati',
          label: 'Rangamati (A)',
          dataKey: 'rangamati', 
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Kasko',
          label: 'Kasko (A)',
          dataKey: 'kasko',
          stack: 'total',
          area: true,
          showMark: false,
        },
        {
          id: 'Emergency',
          label: 'Emergency (A)',
          dataKey: 'emergency',
          stack: 'total',
          area: true,
          showMark: false,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 70 }}
    />
  );
}
