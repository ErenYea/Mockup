import { Block } from "baseui/block";
import React, { useEffect } from "react";
import { useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
// import { Block } from "baseui/block";
import ColumnChart from "./columnChart";
import LineBar from "./lineGraph";
import LineBarv2 from "./lineGraphv2";
import Head from "next/head";
type Props = {};

const index = (props: Props) => {
  // const [loading, setLoading] = useState<any>(false);
  const salesData=[
    {name:'Aluminum Wheels'},{name:'Suspension kit'},{name:'Bumper'},{name:'Disc Brake Rotor'},{name:'Sunroofs'}
  ]
  const brandData=[
    {name:'Nissan'},{name:'Ford'},{name:'Hyundai'},{name:'Honda'},{name:'Toyota'}
  ]

  const plotData=[
    {'00':[6540, 7840, 8340, 8950, 11050, 12000, 13120, 16000, 17200, 18450, 19600, 21500, 23200, 22000, 19000, 18600, 17000, 16400, 15600, 14400],
    '01':[9000, 10600, 14000, 18000, 21600, 23000, 24550, 27300, 28000, 28900, 29500, 31200, 34000, 32450, 31450, 30000, 27890, 26000, 25450, 24000],
    '02':[6700, 9000, 12000, 15600, 14000, 12000, 13120, 17890, 18000, 18450, 23000, 25600, 23200, 22000, 19000, 18600, 17000, 16400, 15600, 14400],
    '03':[7800, 8450, 9000, 13000, 15000, 17890, 19230, 17000, 16440, 15600, 14000, 13450, 16000, 17890, 19000, 18600, 17000, 14030, 15400, 12000],
    '04':[22098, 14785, 25010, 17860, 23456, 19987, 20567, 21234, 26000, 15023, 23098, 16795, 24780, 16457, 19402, 21456, 25032, 23876, 25089, 15067],
    '10':[21964, 25471, 20712, 17634, 24098, 21076, 20431, 22387, 25076, 18765, 24034, 26076, 19942, 26000, 17621, 19408, 14572, 14657, 24432, 15623],
    '11':[21109, 17036, 16275, 20912, 17980, 20817, 20539, 20065, 21479, 20988, 18745, 21863, 17452, 20195, 19909, 21534, 22026, 21712, 18690, 19407],
    '12':[11705, 20713, 13520, 11495, 18452, 17396, 21433, 14261, 14071, 17557, 18070, 17343, 19402, 11947, 11663, 19870, 11120, 15299, 11976, 19998],
    '13':[11976, 15299, 14022, 18597, 11689, 18819, 18339, 10924, 19283, 13816, 16698, 17406, 10816, 11551, 11011, 15798, 11011, 15747, 10101, 17431],
    '14':[16729, 14113, 14774, 14122, 18081, 15234, 19951, 20784, 10597, 10347, 10687, 10284, 14477, 14177, 15760, 17850, 14774, 13278, 10145, 13278],
    '20':[20148, 11696, 18507, 20447, 21289, 15047, 15047, 19113, 11014, 15431, 14467, 20841, 20150, 19032, 17375, 16129, 19822, 14157, 14157, 14157],
    '21':[10500, 19114, 19114, 10800, 18000, 18000, 18000, 19114, 19114, 10500, 18000, 14500, 14500, 14500, 18000, 19114, 19114, 10500, 18000, 10500],
    '22':[19113, 19951, 18833, 19822, 15234, 18723, 19951, 11696, 19113, 11696, 17487, 13278, 17487, 18833, 18507, 18507, 17487, 17487, 20447, 17487],
    '23':[19822, 19032, 15234, 19822, 19113, 19113, 15431, 14157, 14157, 14157, 15431, 14157, 15047, 15047, 15047, 18507, 20841, 20447, 19113, 19822],
    '24':[19114, 10800, 10800, 18000, 18000, 19114, 19114, 18000, 19114, 18000, 18000, 10500, 10500, 19114, 19114, 10800, 18000, 18000, 18000, 19114],
    '30':[19113, 11696, 17487, 11696, 19822, 11696, 17487, 19113, 17487, 11696, 19822, 18833, 18833, 18833, 19822, 19113, 19822, 17487, 17487, 11696],
    '31':[18000, 19114, 18000, 18000, 10800, 18000, 19114, 19114, 19114, 18000, 19114, 18000, 18000, 10800, 18000, 19114, 19114, 10800, 10800, 19114],
    '32':[19113, 19113, 17487, 17487, 19822, 17487, 19822, 18833, 18833, 19822, 19822, 18833, 11696, 11696, 11696, 17487, 19113, 19113, 17487, 17487],
    '33':[20431, 21842, 10377, 10377, 12274, 18752, 18752, 14224, 14224, 14224, 14224, 20797, 12274, 20797, 12274, 20797, 20797, 18752, 18752, 18752],
    '34':[15739, 15739, 15739, 15739, 13291, 15397, 13291, 15397, 13291, 20381, 13291, 18126, 14072, 14072, 14072, 14072, 14072, 14072, 14072, 14072],
    '35':[15397, 14224, 14224, 15397, 14224, 14224, 14224, 20797, 20797, 15397, 18752, 18752, 18752, 15397, 15397, 15397, 15397, 20797, 15397, 18752],
    '40':[18126, 18126, 18126, 20381, 18126, 20381, 20381, 15739, 15739, 15739, 15739, 20381, 15739, 15739, 18126, 15739, 15739, 15739, 18126, 15739],
    '41':[20797, 18752, 20797, 20797, 18752, 20797, 20797, 15397, 15397, 14224, 14224, 14224, 14224, 14224, 14224, 15397, 14224, 14224, 14224, 14224],
    '42':[13291, 14072, 15397, 14072, 15397, 14072, 14072, 13291, 15397, 15397, 13291, 14072, 14072, 14072, 14072, 14072, 15397, 13291, 15397, 13291],
    '43':[14224, 15397, 15397, 15397, 20797, 15397, 20797, 20797, 18752, 20797, 20797, 20797, 15397, 15397, 15397, 15397, 15397, 15397, 15397, 15397],
    '44':[20381, 18126, 18126, 15739, 15739, 15739, 15739, 15739, 15739, 15739, 20381, 18126, 15739, 18126, 15739, 18126, 18126, 18126, 18126, 15739]},
                  ];

  const jsonData = [
    {
      name: "January",
      value: [12, 14, 33, 21, 42],
    },
    {
      name: "February",
      value: [21, 16, 13, 17, 34],
    },
    {
      name: "March",
      value: [20, 30, 25, 24, 19],
    },
    {
      name: "April",
      value: [31, 23, 44, 6, 21],
    },
    {
      name: "May",
      value: [26, 12, 17, 19, 15],
    },
    {
      name: "June",
      value: [23, 18, 14, 27, 25],
    },
    {
      name: "July",
      value: [15, 11, 32, 27, 22],
    },
    {
      name: "August",
      value: [22, 34, 43, 21, 22],
    },
    {
      name: "September",
      value: [28, 29, 33, 36, 32],
    },
    {
      name: "October",
      value: [12, 16, 40, 21, 22],
    },
    {
      name: "November",
      value: [23, 32, 11, 23, 15],
    },
    {
      name: "December",
      value: [14, 15, 32, 11, 32],
    },
  ];
  var multiplier;
  const [Index, setIndex] = useState(0);
  function showInfo() {
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdown") as HTMLInputElement).value
    );
    setIndex(value);
  }
  const [Categoryindex, setCategoryindex] = useState(0);
  const [Brandindex, setBrandindex] = useState(0);
  function CategorySelect() {
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdownCategory") as HTMLInputElement).value
    );
    setCategoryindex(value);
    var valueBrand: number = parseInt(
      (document.getElementById("dropdownBrand") as HTMLInputElement).value
    );
 
    setBrandindex(valueBrand);
  }

  // function BrandSelect() {
  //   // var element: HTMLInputElement = document.getElementById("dropdown");

  //   setBrandindex(value);
  // }
  // useEffect(() => {
  //   const iframe = document.querySelector("iframe") as HTMLIFrameElement;
  //   iframe.addEventListener("load", () => {
  //     setLoading(true);
  //   });
  // }, []);
  // console.log(plotData[0][`${Categoryindex}${Brandindex}`])
  // console.log(Categoryindex)
  // console.log(Brandindex)
  return (
    <>
      <Head>
        <title>Dashboard | Demand Forecasting</title>
      </Head>
      <PageTitle title={"Demand Forecasting"} subtitle={""} />
      <div className="flex flex-col h-[100px] justify-center rounded-lg items-center border-2 w-full ">
        <span className="text-4xl font-black z-10">
          Automotive Parts Projection
        </span>
      </div>
      <div className="w-full flex justify-center mt-10 flex-row  h-[150px]">
          <div className="w-1/4 flex justify-end mr-2 h-fit items-center">
            <span className="mr-2 text-lg font-black">Select Category </span>
            <select
              id="dropdownCategory"
              // onChange={CategorySelect}
              className="w-1/2 p-2.5 text-md text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none "
            >
              {salesData.map((val, ind) => {
                return (
                  <option value={ind} key={ind} className="font-bold text-md">
                    {val.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-1/3">
            <span className="mr-2 text-lg font-black">Select Manufacturers </span>
            <select
              id="dropdownBrand"

              className="w-1/2 p-2.5 text-md text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none "
            >
              {brandData.map((val, ind) => {
                return (
                  <option value={ind} key={ind} className="font-bold text-md">
                    {val.name}
                  </option>
                );
              })}
            </select>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 text-lg"
            onClick={CategorySelect}
            >Make Plot</button>
          </div>  
      </div>
      <div className="w-full flex items-center justify-center">
            <LineBarv2 args={plotData[0][`${Categoryindex}${Brandindex}`]}/>
      </div>
        {/* <div className=" bg-customBlue rounded-lg p-5 flex  w-[99%] justify-center h-5/6  border-2 border-customDarkBlue"> */}
        {/* (
          ""
        ) : (
          <div className=" text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden w-full  z-0">
            <div className="flex justify-center items-center h-screen">
              <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 "></div>
              </div>
            </div>
          </div>
        ) */}
        {/* <iframe
          className="w-full h-[95%] mt-2 rounded-lg overflow-x-hidden scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-blue-500"
          src="http://owaisahmed142002.pythonanywhere.com/"
        ></iframe> */}

        {/* </div> */}

      <div className="w-full flex flex-col justify-center items-center mb-5 mt-5">
        <div>
        <h1 className="text-4xl font-black mb-4 ">Forecasted total market demand and OEM Installation Capacity (Trend)</h1>
        </div>
       <LineBar args={[40000, 45000, 120000, 100000, 105000, 110000, 95000, 95000, 45000, 55000, 35000, 30000]} 
       argSecond={[8500, 10800, 30000, 25000, 27000, 32000, 29000, 29500, 8000, 9500, 11000, 12000]}
       />   
      </div>
      <div className="w-full flex justify-center items-center flex-row">
        <h1 className="text-4xl font-black mb-4 mt-10 ">Monthly Projection</h1>
      </div>
      <div className="w-full flex justify-center items-center flex-row">
        <span className="mr-2 text-lg font-black">Select Month of 2023 </span>
        <select
          id="dropdown"
          onChange={showInfo}
          className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          {jsonData.map((val, ind) => {
            return (
              <option value={ind} key={ind} className="font-bold">
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
      <ColumnChart args={jsonData[Index]} />
      {/* </section> */}
    </>
  );
};

export default index;
