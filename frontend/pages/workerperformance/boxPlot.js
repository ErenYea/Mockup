import dynamic from "next/dynamic";
import { func } from "prop-types";
import { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

export default function ApexCharts({ args }) {
  console.log(args.boxPlotValue);
  const options = {
    chart: {
      id: args.id,
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
      boxPlot: {
        colors: {
          upper: "#004899",
          lower: "#004950",
        },
      },
    },
  };
  return (
    <>
      <div id="chart">
        <ApexChart
          options={options}
          series={[
            {
              data: args.boxPlotValue,
            },
          ]}
          type="boxPlot"
          height={350}
        />
      </div>
      <span>Minutes</span>
    </>
  );
}
