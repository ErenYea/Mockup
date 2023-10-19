import React, { useState } from 'react';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const Bar = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Ford',
        data: [44, 55, 41, 37, 22, 43, 21, 30, 26],
      },
      {
        name: 'Nissan',
        data: [53, 32, 33, 52, 13, 43, 32, 21, 28],
      },
      {
        name: 'Hyundai',
        data: [12, 17, 11, 9, 15, 11, 20, 12, 21],
      },
      {
        name: 'Honda',
        data: [9, 7, 5, 8, 6, 9, 4, 7, 6],
      },
      {
        name: 'Toyota',
        data: [9, 7, 5, 8, 6, 9, 4, 6, 7],
      },
    ],
    options: {
      chart: {
        type: 'rangeBar',
        height: 420,
        stacked: true,
        toolbar: {
          tools: {
            zoom: false,
          },
        },
      },
      title: {
        text: '',
        align: 'left',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#ffffff'],
      },
      xaxis: {
        categories: [
          "Oct' 23",
          "Nov' 23",
          "Dec' 23",
          "Jan' 24",
          "Feb' 24",
          "Mar' 24",
          "Apr' 24",
          "May' 24",
          "Jun' 24",
        ],
        labels: {
          // formatter: function (val: number) {
          //   return val + "K";
          // },
        },
      },
      tooltip: {
        y: {
          // formatter: function (val: number) {
          //   return val + "K";
          // },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: -8,
      },
    },
  });

  return (
    <>
      <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
        <Cell span={[12]}>
          <Block paddingTop={['10px', '15px', '30px', '0']}>
            <ApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height="500"
            />
          </Block>
        </Cell>
      </Grid>
    </>
  );
};

export default Bar;
