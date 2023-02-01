import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ChartMenu from "components/SideMenu/ChartMenu";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Bar: NextPage<{}> = () => {
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Ford",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "Nissan",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "Hyundai",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "Honda",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      {
        name: "Toyota",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
      // {
      //   name: "Reborn Kid",
      //   data: [25, 12, 19, 32, 25, 24, 10],
      // },
    ],
    options: {
      chart: {
        type: "rangeBar",
        height: 420,
        stacked: true,
        toolbar: {
          tools: {
            zoom: false,
          },
        },
      },
      title: {
        text: "",
        align: "left",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#ffffff"],
      },
      xaxis: {
        categories: [
          "July",
          "August",
          "September",
          "Octuber",
          "November",
          "December",
          "January",
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
        position: "bottom",
        horizontalAlign: "center",
        offsetY: -8,
      },
    },
  });

  return (
    <>
      {/* <Head>
        <title>Chart | INST.</title>
        <meta name="Description" content="Inst chart app" />
      </Head> */}

      {/* <Container> */}
      {/* <Block paddingTop={["0", "0", "0", "40px"]}> */}
      <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
        {/* <Cell span={[12, 12, 3]}>
            <ChartMenu />
          </Cell> */}
        <Cell span={[12]}>
          <Block paddingTop={["10px", "15px", "30px", "0"]}>
            <ApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height="420"
            />
          </Block>
        </Cell>
      </Grid>
      {/* </Block> */}
      {/* </Container> */}
    </>
  );
};

export default Bar;
