import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
  width: 200,
  height: 200,
  value: 54,
};

export default function Gauge66KV() {
  return (
    <Gauge
      {...settings}
      valueMin={0} valueMax={300}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
      text={
        ({ value, valueMax }) => `${value} A `
     }
    />
  );
}
