import { Block } from "baseui/block";
import React from "react";
import { useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
// import { Block } from "baseui/block";
import ColumnChart from "./columnChart"
type Props = {};

const index = (props: Props) => {
  const jsonData = [
    {
      name: "January",
      value: [12, 14, 33, 21, 42, 9, 7]
    },
    {
      name: "February",
      value: [21, 16, 13, 17, 34, 12, 25]
    },
    {
      name: "March",
      value: [20, 30, 25, 24, 19, 8, 12]
    },
    {
      name: "April",
      value: [31, 23, 44, 6, 21, 8, 4]
    },
    {
      name: "May",
      value: [26, 12, 17, 19, 15, 19, 30]
    },
    {
      name: "June",
      value: [23, 18, 14, 27, 25, 10, 5]
    },
    {
      name: "July",
      value: [15, 11, 32, 27, 22, 9, 12]
    },
    {
      name: "August",
      value: [22, 34, 43, 21, 22, 11, 7]
    },
    {
      name: "September",
      value: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "October",
      value: [12, 16, 40, 21, 22, 13, 6]
    },
    {
      name: "November",
      value: [23,32, 11, 23, 15, 14, 9]
    },
    {
      name: "December",
      value: [14, 15, 32, 11, 32, 12, 17]
    },
  ];
  const [Index, setIndex] = useState(0);
  function showInfo() {
    var element: HTMLInputElement = document.getElementById("dropdown");
    var value: Number = parseInt(element.value);
    setIndex(value);
  }
  return (
    <>
      <PageTitle title={"Demand Forecasting"} subtitle={""} />
          <div className="flex justify-center h-[1450px] rounded-lg items-center border-2 ">
            {/* <div className=" bg-customBlue rounded-lg p-5 flex  w-[99%] justify-center h-5/6  border-2 border-customDarkBlue"> */}
              <iframe
                className="w-full h-[95%] mt-20 rounded-lg overflow-x-hidden scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-blue-500"
                src="http://owaisahmed142002.pythonanywhere.com/"
              ></iframe>
            {/* </div> */}
          </div>
          <div className="w-full flex justify-center items-center flex-row">
            <h1 className="text-4xl font-black mb-4 ">Monthly Projection</h1>
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
          <ColumnChart args={jsonData[Index]}/>
      {/* </section> */}
    </>
  );
};

export default index;
