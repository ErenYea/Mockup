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
const LineBar = (props) => {
  console.log(props);

  // var x =props.args.slice(-1)[0] ; // the value of x can be changed as per your requirement
  // var randomNumber = Math.floor(Math.random() * (x + 6 - x + 1) + x);
  // temp.push(x)

  // useEffect(()=>{

  // })

  const state = {
    series: [
      {
        name: "Forecasted Installation Demand",
        data: props.args,
      },
      {
        name: "OEM Installation Capacity",
        data: props.argSecond,
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
          "Jan 2023",
          "Feb 2023",
          "Mar 2023",
          "Apr 2023",
          "May 2023",
          "Jun 2023",
          "Jul 2023",
          "Aug 2023",
          "Sep 2023",
          "Oct 2023",
          "Nov 2023",
          "Dec 2023",
        ],
        title: {
          text: "Months",
        },
      },
      yaxis: {
        title: {
          text: "No. of Car Units",
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

export default LineBar;
