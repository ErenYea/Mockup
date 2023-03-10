import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ChartMenu from "components/SideMenu/ChartMenu";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

type Props = {
  args: any;
  sunroof: boolean;
};
const LineBarv2 = (props) => {
  console.log(props);

  // var x =props.args.slice(-1)[0] ; // the value of x can be changed as per your requirement
  // var randomNumber = Math.floor(Math.random() * (x + 6 - x + 1) + x);
  // temp.push(x)

  // useEffect(()=>{

  // })

  const state = {
    series: [
      {
        name: "Market Sales",
        data: props.args,
      },
      
    ],
    options: {
      chart: {
        height: 420,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      //   colors: ["#ff0080", "#006ff3"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },
      //   markers: {
      //     size: 1,
      //   },
      xaxis: {
        // type: '',
        categories: [
            "Quarter 1, 2019",
            "Quarter 2, 2019",
            "Quarter 3, 2019",
            "Quarter 4, 2019",
            "Quarter 1, 2020",
            "Quarter 2, 2020",
            "Quarter 3, 2020",
            "Quarter 4, 2020",
            "Quarter 1, 2021",
            "Quarter 2, 2021",
            "Quarter 3, 2021",
            "Quarter 4, 2021",
            "Quarter 1, 2022",
            "Quarter 2, 2022",
            "Quarter 3, 2022",
            "Quarter 4, 2022",
            "Quarter 1, 2023",
            "Quarter 2, 2023",
            "Quarter 3, 2023",
            "Quarter 4, 2023",

        ],
        title: {
          text: "Quarters",
        },
      },
      yaxis: {
        title: {
          text: "No. of Units",
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
        max: 40000,
      },
      annotations: {
        xaxis: [
          {
            x: "Quarter 1, 2023",
            borderColor: "#775DD0",
            label: {
              style: {
                color: "#000000",
              },
              text: "Predictions",
            },
          },
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
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

export default LineBarv2;
