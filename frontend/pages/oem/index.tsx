import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import Head from "next/head";
import LineBar from "./lineGraph";
import CreateOrUpdateEvent from "./CreateOrUpdateEvent";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import Container from "components/UiElements/Container/Container";
import { Block } from "baseui/block";
import LineBarv2 from "./lineGraphv2";

type Props = {};

const index = (props) => {
  const [event, setEvent] = useState(false);
  const [works, setWorks] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  function onSubmit(value: any) {
    setIsOpen(false);
    console.log(value);
    setWorks([...works, value]);
  }
  const handleClick = () => {
    console.log("hamza");
    setEvent(true);
    setIsOpen(true);
  };
  function close() {
    setIsOpen(false);
    setEvent(null);
  }
  var data = [
    {
      name: "Ford",
      vehiclesSold: [
        [24, 28, 32, 35, 28, 29, 36, 39, 42, 11, 17, 23, 27],
        [34, 38, 23, 12, 34, 56, 34, 23, 36, 38, 17, 27, 43],
        [10, 13, 27, 12, 32, 22, 32, 24, 11, 44, 14, 23, 29],
        [11, 26, 16, 23, 29, 31, 33, 26, 28, 29, 29, 24, 21],
        [16, 19, 23, 32, 26, 27, 28, 32, 33, 16, 19, 21, 27],
      ],
      sunroof: [
        [10, 12, 15, 17, 19, 10, 9, 15, 12, 5, 10, 15, 20],
        [12, 9, 5, 10, 9, 10, 10, 15, 8, 6, 12, 5, 8],
        [9, 5, 5, 4, 10, 15, 12, 11, 15, 5, 12, 15, 10],
        [5, 10, 10, 15, 10, 15, 19, 10, 10, 15, 5, 5, 10],
        [5, 5, 16, 11, 9, 15, 19, 10, 5, 10, 15, 16, 17],
      ],
      oemCapacity: [
        [30, 43, 45, 35, 35, 35, 35, 35, 29, 35, 33, 44, 27],
        [29, 44, 28, 28, 25, 28, 29, 44, 34, 26, 45, 45, 45],
        [43, 34, 43, 32, 30, 30, 30, 30, 28, 27, 43, 44, 29],
        [27, 44, 25, 28, 27, 34, 34, 43, 33, 26, 29, 44, 44],
        [44, 31, 29, 32, 32, 32, 32, 32, 27, 44, 34, 30, 30],
      ],
      models: [
        "Ford F-150",
        "Ford Bronco Sport",
        "Ford Edge",
        "Ford F-250",
        "Ford Taurus X",
      ],
    },
    {
      name: "Nissan",
      vehiclesSold: [
        [14, 18, 22, 25, 18, 19, 26, 29, 32, 11, 17, 13, 25],
        [22, 32, 22, 24, 35, 36, 39, 33, 35, 40, 27, 37, 45],
        [15, 15, 22, 22, 35, 25, 33, 25, 14, 46, 23, 33, 39],
        [23, 26, 14, 25, 32, 30, 40, 25, 38, 49, 39, 25, 30],
        [26, 29, 33, 35, 30, 25, 25, 35, 33, 19, 23, 44, 27],
      ],
      sunroof: [
        [15, 11, 12, 17, 19, 15, 19, 11, 9, 15, 12, 11, 13],
        [13, 14, 15, 10, 9, 10, 12, 13, 8, 6, 4, 3, 9],
        [10, 15, 15, 4, 8, 7, 14, 13, 13, 15, 11, 14, 14],
        [15, 11, 10, 15, 10, 15, 9, 10, 10, 15, 7, 5, 9],
        [5, 15, 16, 11, 9, 15, 19, 4, 5, 10, 15, 16, 7],
      ],
      oemCapacity: [
        [30, 43, 33, 44, 44, 26, 45, 43, 29, 45, 33, 45, 44],
        [33, 35, 35, 35, 35, 35, 29, 35, 44, 35, 35, 35, 43],
        [43, 27, 43, 27, 27, 33, 44, 43, 27, 43, 34, 28, 44],
        [27, 26, 45, 26, 44, 44, 28, 45, 29, 45, 34, 43, 27],
        [43, 44, 29, 27, 28, 28, 43, 33, 33, 26, 44, 43, 34],
      ],
      models: [
        "Nissan 350Z",
        "Nissan GT-R",
        "Nissan Atima",
        "Nissan NV200",
        "Nissan Sentra",
      ],
    },
    {
      name: "Hyundai",
      vehiclesSold: [
        [32, 33, 36, 31, 19, 21, 31, 34, 36, 33, 38, 23, 36],
        [17, 18, 15, 19, 22, 34, 32, 38, 23, 32, 32, 17, 25],
        [26, 39, 19, 34, 38, 18, 19, 23, 39, 22, 23, 32, 17],
        [34, 23, 26, 39, 34, 19, 33, 17, 25, 19, 11, 25, 18],
        [17, 24, 17, 18, 19, 25, 23, 16, 19, 15, 34, 37, 18],
      ],
      sunroof: [
        [18, 19, 19, 5, 20, 14, 9, 5, 17, 19, 9, 5, 11],
        [19, 17, 16, 15, 9, 19, 20, 20, 15, 20, 17, 18, 8],
        [17, 9, 5, 20, 18, 17, 12, 12, 19, 9, 11, 5, 18],
        [15, 11, 20, 8, 8, 19, 20, 11, 11, 19, 11, 16, 15],
        [17, 5, 8, 11, 14, 5, 16, 20, 8, 8, 15, 8, 18],
      ],
      oemCapacity: [
        [44, 26, 45, 45, 45, 43, 30, 29, 43, 27, 30, 33, 29],
        [27, 35, 35, 35, 35, 35, 35, 35, 29, 26, 35, 35, 44],
        [29, 44, 43, 27, 43, 43, 33, 33, 33, 29, 44, 27, 45],
        [29, 43, 45, 43, 29, 45, 27, 33, 33, 33, 33, 27, 43],
        [45, 33, 33, 33, 43, 27, 44, 44, 33, 33, 27, 33, 43],
      ],
      models: [
        "Hyundai Santa Fe",
        "Hyundai Accent",
        "Hyundai Elantra GT",
        "Hyundai Kona N",
        "Hyundai Ioniq",
      ],
    },
    {
      name: "Honda",
      vehiclesSold: [
        [37, 34, 31, 25, 26, 37, 27, 38, 34, 31, 31, 38, 36],
        [24, 25, 23, 19, 32, 32, 34, 19, 22, 22, 25, 26, 38],
        [26, 33, 26, 18, 24, 32, 28, 39, 17, 32, 31, 28, 26],
        [31, 18, 11, 27, 21, 34, 37, 31, 18, 26, 17, 11, 39],
        [17, 21, 15, 19, 32, 17, 21, 19, 25, 11, 36, 21, 33],
      ],
      sunroof: [
        [12, 20, 8, 12, 19, 17, 14, 8, 19, 14, 5, 19, 17],
        [11, 8, 19, 20, 11, 12, 14, 19, 14, 14, 14, 19, 5],
        [20, 5, 12, 8, 9, 5, 19, 8, 9, 5, 20, 15, 11],
        [5, 19, 8, 20, 11, 8, 15, 5, 8, 19, 20, 12, 12],
        [18, 12, 11, 9, 14, 14, 14, 17, 19, 19, 8, 20, 5],
      ],
      oemCapacity: [
        [30, 43, 33, 33, 30, 30, 30, 30, 45, 45, 27, 29, 44],
        [30, 45, 45, 45, 33, 33, 43, 43, 33, 33, 43, 33, 33],
        [33, 44, 33, 33, 33, 33, 33, 30, 30, 30, 30, 45, 45],
        [44, 45, 43, 45, 45, 43, 33, 33, 33, 45, 45, 43, 45],
        [43, 33, 45, 45, 45, 45, 45, 45, 45, 33, 45, 45, 45],
      ],
      models: [
        "Honda CR-V",
        "Honda HR-V",
        "Honda Accord Sedan",
        "Honda Insight",
        "Honda Odyssey",
      ],
    },
    {
      name: "Toyota",
      vehiclesSold: [
        [17, 22, 28, 29, 21, 32, 33, 38, 31, 23, 29, 36, 23],
        [18, 31, 23, 19, 29, 21, 32, 33, 17, 31, 21, 39, 18],
        [24, 36, 27, 19, 32, 25, 16, 22, 23, 33, 17, 26, 35],
        [23, 22, 26, 27, 37, 38, 36, 21, 16, 17, 21, 28, 37],
        [33, 25, 38, 26, 33, 29, 16, 19, 28, 36, 25, 17, 31],
      ],
      sunroof: [
        [12, 17, 15, 18, 17, 12, 5, 8, 19, 11, 8, 17, 19],
        [5, 20, 9, 5, 15, 17, 9, 19, 18, 14, 14, 19, 11],
        [12, 15, 20, 12, 9, 5, 11, 18, 19, 14, 20, 12, 19],
        [19, 9, 18, 14, 14, 14, 14, 17, 8, 9, 5, 19, 18],
        [20, 8, 12, 15, 20, 8, 19, 18, 8, 17, 11, 9, 19],
      ],
      oemCapacity: [
        [40, 26, 43, 42, 33, 39, 31, 34, 25, 28, 43, 29, 44],
        [42, 39, 34, 40, 40, 40, 25, 32, 40, 40, 44, 32, 28],
        [40, 25, 26, 29, 39, 44, 28, 28, 31, 43, 25, 39, 44],
        [29, 42, 44, 40, 40, 43, 40, 40, 33, 40, 44, 32, 28],
        [43, 44, 31, 32, 32, 29, 27, 33, 42, 33, 43, 25, 25],
      ],
      models: [
        "Toyota RAV4",
        "Toyota Camry",
        "Toyota Tacoma",
        "Toyota GR 86",
        "Toyota Prius",
      ],
    },
  ];

  const [Index, setIndex] = useState(0);
  const [IndexModel, setIndexModel] = useState(0);
  useEffect(() => {
    document.getElementsByTagName("nav")[0].style.display = "None";
    if (sessionStorage.emailType.includes("toyota")) {
      setIndex(4);
    } else if (sessionStorage.emailType.includes("honda")) {
      setIndex(3);
    } else if (sessionStorage.emailType.includes("hyundai")) {
      setIndex(2);
    } else if (sessionStorage.emailType.includes("nissan")) {
      setIndex(1);
    } else if (sessionStorage.emailType.includes("ford")) {
      setIndex(0);
    } else {
      setIndex(0);
    }
  }, []);

  function showInfo() {
    // (document.getElementById("dropdown") as HTMLInputElement).value
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdown") as HTMLInputElement).value
    );
    setIndexModel(value);
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
        categories: [
          "Jul' 22",
          "Aug' 22",
          "Sept' 22",
          "Oct' 22",
          "Nov' 22",
          "Dec' 22",
          "Jan' 23",
        ],
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
        <title>Manufacturer/OEMs</title>
      </Head>
      <PageTitle title={"Manufacturer/OEMs"} subtitle={""} />
      <div className="w-full flex flex-col items-center justify-center">
        <span className="m-2 text-6xl font-black text-customDarkBlue z-10">
          {data[Index]["name"]}
        </span>
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
            Select Model
          </label>
          <select
            id="dropdown"
            onChange={showInfo}
            className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {data[Index]["models"].map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold">
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl font-black">Vehicles Sold</span>
          <LineBar args={data[Index]["vehiclesSold"][IndexModel]} />
          {/* <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            <span className="text-sm text-black">Prediction</span>
          </div> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-4">
          <span className="text-2xl font-black">Sunroof orders</span>
          <LineBar args={data[Index]["sunroof"][IndexModel]} sunroof={true} />
          {/* <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            <span className="text-sm text-black">Prediction</span>
          </div> */}
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
          <span className="text-2xl font-black">
          Forecasted total sunroof market demand and oem installation capacity
          </span>
          <LineBarv2
            args={data[Index]["sunroof"][IndexModel]}
            args2={data[Index]["oemCapacity"][IndexModel]}
            sunroof={true}
          />
          <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            {/* <span className="text-sm text-black">Prediction</span> */}
          </div>
        </div>
        <Container>
          <Block className={"flex items-end justify-end mt-10"}>
            <ModalButton onClick={handleClick}>Order Job</ModalButton>
          </Block>
          <Block
            marginTop={"20px"}
            className="border border-gray-700 h-full rounded bg-gray-200"
          >
            <div className="flex flex-col p-2 min-h-[400px]">
              <div className="text-bold text-xl border p-2 text-white bg-slate-800 w-fit">
                Active Jobs
              </div>
              {works?.map((i) => (
                <div
                  className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2"
                  key={i.workshop.id}
                >
                  <div className="text-base border-gray-700 border p-2 rounded bg-white flex flex-col justify-center items-center">
                    <h3 className="text-bold text-lg uppercase">
                      {i.workshop.name}
                    </h3>
                    <div
                      className="flex flex-col items-center border-gray-400"
                      // data-key={i.id}
                    >
                      <div
                        className="text-black text-[14px] text-center"
                        // data-key={i.id}
                      >
                        Performance:{" "}
                        <span
                          className=" text-yellow-300 text-center w-full"
                          // data-key={i.id}
                        >
                          {
                            i.workshop.modaldata[
                              i.model.slice(0, 3).toLowerCase()
                            ].performance
                          }
                          /10
                        </span>
                      </div>
                      <div
                        className="text-black text-[14px] text-center"
                        // data-key={i.id}
                      >
                        Material Present:{" "}
                        <span
                          className=" text-yellow-300 text-center w-full uppercase"
                          // data-key={i.id}
                        >
                          {i.workshop.modaldata[
                            i.model.slice(0, 3).toLowerCase()
                          ].material
                            ? "Yes"
                            : "No"}
                        </span>
                      </div>
                      <div
                        className="text-black text-[14px] text-center"
                        // data-key={i.id}
                      >
                        Workload:{" "}
                        <span
                          className=" text-yellow-300 text-center w-full"
                          // data-key={i.id}
                        >
                          {i.workshop.workload} cars this week
                        </span>
                      </div>
                      <div
                        className="text-black text-[14px] text-center"
                        // data-key={i.id}
                      >
                        Start Date:{" "}
                        <span
                          className=" text-yellow-300 text-center w-full"
                          // data-key={i.id}
                        >
                          {i.startdate}
                        </span>
                      </div>
                      <div
                        className="text-black text-[14px] text-center"
                        // data-key={i.id}
                      >
                        End Date:{" "}
                        <span
                          className=" text-yellow-300 text-center w-full"
                          // data-key={i.id}
                        >
                          {i.enddate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-base p-2 border border-gray-700 rounded bg-white flex flex-col">
                    <div className="flex flex-col items-center">
                      <h3 className="text-bold text-lg capitalize">
                        Car Model
                      </h3>
                      <div className=" text-red-600">{i.model}</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-bold text-lg capitalize">
                        Total Jobs
                      </h3>
                      <div className=" text-red-600">{i.car}</div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2" key={i.workshop.id}>
                <div className="text-base border-gray-700 border p-2 rounded bg-white flex flex-col justify-center items-center">
                  <h3 className="text-bold text-lg uppercase">{i.workshop.name}</h3>
                  <div
                    className="flex flex-col items-center border-gray-400"
                    data-key={i.id}
                  >
                    <div
                      className="text-black text-[14px] text-center"
                      data-key={i.id}
                    >
                      Performance:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full"
                        data-key={i.id}
                      >
                        
                        {i.workshop.modaldata[model.slice(0,3).toLowerCase()].performance}/10
                      </span>
                    </div>
                    <div
                      className="text-black text-[14px] text-center"
                      data-key={i.id}
                    >
                      Material Present:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full uppercase"
                        data-key={i.id}
                      >
                        {i.workshop.modaldata[model.slice(0,3).toLowerCase()].material ? "Yes" : "No"}
                      </span>
                    </div>
                    <div
                      className="text-black text-[14px] text-center"
                      data-key={i.id}
                    >
                      Workload:{" "}
                      <span
                        className=" text-yellow-300 text-center w-full"
                        data-key={i.id}
                      >
                        {i.workshop.workload} cars this week
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-base p-2 border border-gray-700 rounded bg-white flex flex-col">
                  <div className="flex flex-col items-center">
                    <h3 className="text-bold text-lg capitalize">Car Model</h3>
                    <div className=" text-red-600">{model}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-bold text-lg capitalize">Total Jobs</h3>
                    <div className=" text-red-600">{i.cars}</div>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2">
                <div className="text-base border-gray-700 border p-2 rounded bg-white">
                  This is workshop 1
                </div>
                <div className="text-base p-2 border border-gray-700 rounded bg-white">
                  This is the job of 100 cars
                </div>
              </div>
              <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2">
                <div className="text-base border-gray-700 border p-2 rounded bg-white">
                  This is workshop 1
                </div>
                <div className="text-base p-2 border border-gray-700 rounded bg-white">
                  This is the job of 100 cars
                </div>
              </div> */}
            </div>
          </Block>
          {event && (
            <CreateOrUpdateEvent
              onClose={close}
              isOpen={isOpen}
              event={event}
              onSubmit={(value: any) => onSubmit(value)}
              index={Index}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default index;
