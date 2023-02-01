import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import Head from "next/head";
import LineBar from "./lineGraph";

// type Props = {};

const index = () => {
  var data = [
    {
      name: "Ford",
      vehiclesSold:[110, 113, 167, 112, 132, 122, 132,124,111,144,114,127,143],
      sunroof:[27,44,36,42,32,23,36,37,39,24,22,41,43],
    },
    {
      name: "Nissan",
      vehiclesSold:[92, 98, 110, 112, 142, 91, 88 ,43 ,67 ,76 ,110 ,131,95],
      sunroof:[23,42,39,32,48,49,41,36,40,31,29,52,46],
    },
    {
      name: "Hyundai",
      vehiclesSold:[143 , 123, 142, 165, 134, 145, 99,101,114,154,111,138,139],
      sunroof:[25,19,33,41,37,24,36,23,17,42,23,46,35],
    },
    {
      name: "Honda",
      vehiclesSold:[134, 171, 142, 145, 132, 133, 164, 143, 115, 134, 121, 165,169],
      sunroof:[34,56,43,51,34,29,42,37,39,25,16,15,13],
    },
    {
      name: "Toyota",
      vehiclesSold:[89, 67, 150, 111, 101, 128, 154,131,141,113,88 ,141,96],
      sunroof:[45,41,36,27,29,21,31,37,25,36,31,14,28],
    },

  ];

  useEffect(() => {
    document.getElementsByTagName('nav')[0].style.display='None'
  },[]);
  
  const [Index, setIndex] = useState(0);
  function showInfo() {
    var element: HTMLInputElement = document.getElementById("dropdown");
    var value: Number = parseInt(element.value);
    setIndex(value);
  }
  const [state2, setState2] = useState<any>({
    series: [
      {
        name: "High - 2020",
        data: [280, 290, 330, 360, 320, 320, 330],
      },
      // {
      //   name: "Low - 2020",
      //   data: [12, 11, 14, 18, 17, 13, 13],
      // },
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
      colors: ["#ff0080", "#006ff3"],
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
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jul' 22","Aug' 22", "Sept' 22", "Oct' 22", "Nov' 22", "Dec' 22", "Jan' 23"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Jobs",
        },
        min: 5,
        max: 400,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: 25,
        offsetX: 5,
      },
    },
  });
  return (
    <>
      <Head>
        <title>OEM/Dealership</title>
      </Head>
      <PageTitle title={"OEM/Dealership"} subtitle={""} />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
                      Select Model
          </label>
                    <select
                      id="dropdown"
                      onChange={showInfo}
                      className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    >
                      {data.map((val, ind) => {
                        return (
                          <option value={ind} key={ind} className="font-bold">
                            {val.name}
                          </option>
                        );
                      })}
                    </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl font-black">Vehicles Sold</span>
          <LineBar args={data[Index]['vehiclesSold']}/>
          <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            <span className="text-sm text-black">Prediction</span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <span className="text-2xl font-black">Sunroof Ordering</span>
          <LineBar args={data[Index]['sunroof']}/>
          <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            <span className="text-sm text-black">Prediction</span>
          </div>
        </div>
      
        
      </div>
      

    </>
  );
};

export default index;
