import React, { useState } from "react";
import ApexChart from "../../components/UiElements/ApexChart/ApexChart";

type ProductsBarType = {
  className?: string;
  labels: string[];
  products: number[];
};

const ProductsBar = ({ className, labels, products }: ProductsBarType) => {
  const chartOptions = {
    options: {
      fill: {
        colors: ["#FF0080", "#7928CA", "#B3536D","#B8B154","#43CA16"],
      },
      colors:["#FF0080", "#7928CA", "#B3536D","#B8B154","#43CA16"],
      chart: {
        toolbar: {
          show: true,
        },
      },
      labels,
      dataLabels: {
        style: {
          fontSize: "48px",
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
        },
      },
    },
    series: products,
  };

  return (
    <ApexChart
      className={className}
      options={chartOptions.options}
      series={chartOptions.series}
      type="radialBar"
      height="315"
    />
  );
};

export default ProductsBar;
