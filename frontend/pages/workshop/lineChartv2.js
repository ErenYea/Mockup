import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const initialData = [
  ['x', 'Expected', 'Actual'],
  ['5', 100, 100],
  ['10', 90, null],
  ['15', 80, null],
  ['20', 70, null],
  ['25', 60, null],
  ['30', 50, null],
  ['35', 40, null],
  ['40', 30, null],
  ['45', 20, null],
  ['50', 10, null],
];

export default function LineChartv2() {
  const options = {
    legend: { position: 'bottom' },
    hAxis: {
      title: 'Minutes',
    },
    vAxis: {
      title: 'Percent Job Completed',
      format: '0',
      ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
    series: {
      1: { curveType: 'function' },
    },
  };

  const [actualData, setActualData] = useState(initialData);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the "Actual" series data dynamically
      setActualData((prevData) => {
        const updatedData = [...prevData];
        const currentPointIndex = updatedData.findIndex((row) => row[2] === null);
        if (currentPointIndex !== -1) {
          updatedData[currentPointIndex][2] = [100, 95, 88, 79, 55, 52][currentPointIndex - 1];
        }
        return updatedData;
      });
    }, 3000); // 2 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Chart
      chartType="LineChart"
      className="w-full rounded-lg"
      loader={<div>Loading Chart</div>}
      data={actualData}
      options={options}
      width="100%"
      height="300px"
    />
  );
}
