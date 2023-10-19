import React from 'react';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const LineBar = (props) => {
  const state = {
    series: [
      {
        name: 'Forecasted Installation Demand',
        data: props.args,
      },
      {
        name: 'OEM Installation Capacity',
        data: props.argSecond,
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
        categories: props.xLabels,
        title: {
          text: 'Months',
        },
      },
      yaxis: {
        title: {
          text: 'No of car units (with sunroofs)',
        },
        labels: {
          show: true,
          align: 'left',
          minWidth: 0,
          maxWidth: 360,
          style: {
            colors: [],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: -5,
          offsetY: 10,
          rotate: 0,
        },
        min: 0,
        max: 150000,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
      annotations: {
        xaxis: [
          {
            x: "Oct 2023",
            borderColor: '#775DD0',
            label: {
              style: {
                color: '#000000',
              },
              text: 'Forecast',
            },
          },
        ],
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
        height={500}
      />
    </>
  );
};

export default LineBar;
