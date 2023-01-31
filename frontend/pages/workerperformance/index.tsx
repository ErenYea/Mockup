import React, { useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import ApexCharts from "./boxPlot";
type Props = {};
import { Block } from "baseui/block";
// import InformationBox from "pages/workshop/informationBoxv2";
import InformationBox from "./informationBox";
import Pie from "pages/charts/pie";

const index = (props: Props) => {
  const jsonData = [
    {
      name: "Sam Davidson",
      performance: 0.92,
      address: "1883 Venture Place, Alberta",
      designation: "Senior Technician",
      totalJobs: 579,
      best: "Ford F-150",
      score: 91,
      desc: "Best and Outstanding Skills. Very Reliable",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Toyota", 11],
        ["Ford", 2],
        ["KIA", 2],
        ["Honda", 2],
        ["Hyundai", 7],
      ],
      pic: "/images/image.jpg",
      boxPlotValue: [
        { x: "Toyota", y: [54, 66, 69, 75, 88] },
        { x: "Ford", y: [43, 65, 69, 76, 81] },
        { x: "KIA", y: [31, 39, 45, 51, 59] },
        { x: "Honda", y: [39, 46, 55, 65, 71] },
        { x: "Hyundai", y: [29, 31, 35, 39, 44] },
      ],
      id: "index1",
    },
    {
      name: "Dennis Ray",
      performance: 0.83,
      address: "4514 Carling Avenue, Ontario",
      designation: "Junior Technician",
      totalJobs: 312,
      best: "Ford F-100",
      score: 82,
      desc: "Satisfactory Performance. Has outstanding handskills",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Toyota", 15],
        ["Ford", 3],
        ["KIA", 14],
        ["Honda", 1],
        ["Hyundai", 4],
      ],
      pic:
        "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
      boxPlotValue: [
        { x: "Toyota", y: [44, 56, 59, 65, 78] },
        { x: "Ford", y: [33, 55, 59, 66, 71] },
        { x: "KIA", y: [21, 29, 35, 41, 49] },
        { x: "Honda", y: [29, 36, 45, 55, 61] },
        { x: "Hyundai", y: [19, 21, 25, 29, 34] },
      ],
      id: "index2",
    },
    {
      name: "Gilbert Holland",
      performance: 0.81,
      address: "3807 rue Ontario Ouest, Quebec",
      designation: "Junior Technician",
      totalJobs: 209,
      best: "Ford GT",
      score: 88,
      desc: "Eager to learn but still needs experience!",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Toyota", 4],
        ["Ford", 5],
        ["KIA", 11],
        ["Honda", 15],
        ["Hyundai", 17],
      ],
      pic:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
      boxPlotValue: [
        { x: "Toyota", y: [53, 75, 79, 86, 91] },
        { x: "Ford", y: [64, 76, 79, 75, 98] },
        { x: "KIA", y: [41, 49, 55, 61, 69] },
        { x: "Honda", y: [49, 56, 65, 75, 81] },
        { x: "Hyundai", y: [39, 41, 45, 49, 54] },
      ],
      id: "index3",
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
      <PageTitle title={"Workshop Floor"} subtitle={""} />
      <Container>
        <Block paddingBottom="20px">
          <div className="flex m-4 font-display text-center justify-center space-x-2">
            <label className="m-2 text-xl font-semibold text-customDarkBlue">
              Select Worker
            </label>
            <div className="relative w-full lg:max-w-sm">
              <select
                id="dropdown"
                onChange={showInfo}
                className="w-full p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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
            {/* <DropdownComponent
              args={["Sam Davidson", "Dennis Ray", "Gilbert Holland"]}
            /> */}
          </div>
        </Block>
        <Block>
          <div className="pt-6 flex w-full bg-white justify-center items-center border-white-200 rounded-lg mx-auto">
            <InformationBox args={jsonData[Index]} />
          </div>
          <Pie args={jsonData[Index]} />
          <ApexCharts args={jsonData[Index]} />
        </Block>
        {/* <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={12}>
            <div className="pt-6 w-full bg-white justify-center items-center border-white-200 rounded-lg mx-auto">
              <InformationBox args={jsonData[Index]} />
            </div>
          </Cell>
        </Grid> */}
      </Container>
    </>
  );
};

export default index;
