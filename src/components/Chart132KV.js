import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset132KV } from './dataset.js';

export default function StackedAreas132KV() {
  return (
    <LineChart
      dataset={dataset132KV}
      xAxis={[
        {
          id: 'time',
          dataKey: 'time', 
          scaleType: 'time',
          valueFormatter: (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Removed extra semicolon
        },
      ]}
      series={[
        {
          id: 'Bazar',
          label: 'Bazar (A)',
          dataKey: 'bazar',
          stack: 'total',
          area: true,
          showMark: true,
        },
        {
          id: 'Anaraibari',
          label: 'Anaraibari (A)',
          dataKey: 'anaraibari',
          stack: 'total',
          area: true,
          showMark: true,
        },
        {
          id: 'Local',
          label: 'Local (A)',
          dataKey: 'local',
          stack: 'total',
          area: true,
          showMark: true,
        },
        {
          id: 'Dalak',
          label: 'Dalak (A)',
          dataKey: 'dalak',
          stack: 'total',
          area: true,
          showMark: true,
        },
        {
          id: 'Hospital',
          label: 'Hospital (A)',
          dataKey: 'hospital',
          stack: 'total',
          area: true,
          showMark: true,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 70 }}
    />
  );
}
