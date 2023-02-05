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
  categories: any;
};
const Bar = (props: Props) => {
  const options = {
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
      categories: props?.categories,
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
  };
  // const [state, setState] = useState<any>({
  //   series: props?.args,
  //   options: {
  //     chart: {
  //       type: "rangeBar",
  //       height: 420,
  //       stacked: true,
  //       toolbar: {
  //         tools: {
  //           zoom: false,
  //         },
  //       },
  //     },
  //     title: {
  //       text: "",
  //       align: "left",
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true,
  //       },
  //     },
  //     stroke: {
  //       width: 1,
  //       colors: ["#ffffff"],
  //     },
  //     xaxis: {
  //       categories: props?.categories,
  //       labels: {
  //         // formatter: function (val: number) {
  //         //   return val + "K";
  //         // },
  //       },
  //     },
  //     tooltip: {
  //       y: {
  //         // formatter: function (val: number) {
  //         //   return val + "K";
  //         // },
  //       },
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     legend: {
  //       position: "bottom",
  //       horizontalAlign: "center",
  //       offsetY: -8,
  //     },
  //   },
  // });
  // useEffect(() => {
  //   console.log("props", props);
  // }, [props, state.series]);
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
            {props?.args.length > 0 ? (
              <ApexChart
                options={options}
                series={props?.args}
                type="bar"
                height="420"
              />
            ) : (
              ""
            )}
          </Block>
        </Cell>
      </Grid>
      {/* </Block> */}
      {/* </Container> */}
    </>
  );
};

export default Bar;
