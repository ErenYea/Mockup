import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ChartMenu from 'components/SideMenu/ChartMenu';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const LineBar: NextPage<{}> = ( props ) => {
    console.log(props)

    // var x =props.args.slice(-1)[0] ; // the value of x can be changed as per your requirement
    // var randomNumber = Math.floor(Math.random() * (x + 6 - x + 1) + x);
    // temp.push(x)

    // useEffect(()=>{
    
    // })

    const state = {
        series: [
          {
            name: "Vehicles Sold",
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
          xaxis:{
                // type: '',
                categories: ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023'],
                title: {
                text: "Months",
                }
          },
          yaxis: {
            title: {
              text: "Vehicles",
            },
            min: 5,
            max: 400,
          },
          legend: {
            position: "top",
            horizontalAlign: "right",

          },
        },
      }

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
