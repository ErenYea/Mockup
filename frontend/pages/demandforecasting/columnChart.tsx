import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ChartMenu from "components/SideMenu/ChartMenu";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
type Props = {
  args: any;
};
const ColumnChart = (props) => {
  console.log(props);
  const state = {
    series: [
      {
        name: "Vehicles",
        data: props.args?.value,
      },
    ],
    options: {
      chart: {
        height: 420,
        type: "line",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        columnWidth: "20%",
      },
      colors: ["#006ff3", "#39a66d"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      // title: {
      // 	text: '',
      // 	align: 'left',
      // },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Fords", "Nissan", "Hyundai", "Honda", "Toyota"],
      },
      yaxis: {
        min: 5,
        max: 50,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };

  return (
    <>
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
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
        </Block>
      </Container>
    </>
  );
};

export default ColumnChart;
