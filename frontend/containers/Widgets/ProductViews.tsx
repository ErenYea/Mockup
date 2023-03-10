import React, { useState } from "react";
import ApexChart from "../../components/UiElements/ApexChart/ApexChart";

type ProductViewsType = {
  className?: string;
  categories: string[];
  products: number[];
  views: number[];
  height?: string;
  title?: string;
};

const ProductViews = ({
  className,
  title,
  categories,
  products,
  views,
  height = "247",
}: ProductViewsType) => {
  const [chartOptions, setChartOptions] = useState({
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      title: {
        text: title,
        align: "left",
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3AA76D", "#2583f4"],
      xaxis: {
        type: "category",
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri","Sat","Sun"],
        labels: {
          show: true,
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "inherit",
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: "Active Confirmed Jobs",
        data: products,
      },
      {
        name: "Predicted Incoming Jobs",
        data: views,
      },
    ],
  });

  return (
    <ApexChart
      className={className}
      options={chartOptions.options}
      series={chartOptions.series}
      type="bar"
      height={height}
    />
  );
};

export default ProductViews;
