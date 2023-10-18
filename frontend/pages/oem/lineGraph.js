import React from 'react';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const LineBar = (props) => {
  const state = {
    series: [
      {
        name: 'Vehicles Sold',
        data: props.args,
      },
    ],
    options: {
      chart: {
        height: 420,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
      },
      xaxis: {
        categories: [
          'Sep 2022',
          'Oct 2022',
          'Nov 2022',
          'Dec 2022',
          'Jan 2023',
          'Feb 2023',
          'Mar 2023',
          'Apr 2023',
          'May 2023',
          'Jun 2023',
          'Jul 2023',
          'Aug 2023',
          'Sep 2023',
        ],
        title: {
          text: 'Months',
        },
      },
      yaxis: {
        title: {
          text: props.sunroof ? 'Sunroofs' : 'Vehicles',
        },
        min: 0,
        max: props.sunroof ? 50 : 100,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
  };

  return (
    <>
      <ApexChart
        className="w-5/6"
        options={state.options}
        series={state.series}
        type="line"
        height={250}
      />
    </>
  );
};

export default LineBar;
