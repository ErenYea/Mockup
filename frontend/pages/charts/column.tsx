import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ChartMenu from "components/SideMenu/ChartMenu";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const Column: NextPage<{}> = (props) => {
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Satisfaction Percentage",
        data: [91, 89, 92, 88, 93, 93, 94],
      },
      // {
      //   name: "View",
      //   data: [12, 11, 14, 18, 17, 13, 13],
      // },
    ],
    options: {
      chart: {
        height: 220,
        type: "line",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#006ff3", "#39a66d"],
      dataLabels: {
        enabled:true,
        dropShadow:{
          enabled: false,
        },
        formatter: function(val) {
          return val ? val.toFixed(1) + '%' : ''
        }
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["2018", "2019", "2020", "2021", "2022"],
      },
      yaxis: {
        labels: {
          formatter: function(val) {
            return val + '%'
          }
        },
        min: 5,
        max: 100,
      },
      tooltip: {
        y:{
            formatter: function(val) {
                return val + '%'
              }
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -5,
        offsetX: -5,
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
      <Block paddingTop={["0", "0", "0", "40px"]}>
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
                height="320"
              />
            </Block>
          </Cell>
        </Grid>
      </Block>
      {/* </Container> */}
    </>
  );
};

export default Column;
