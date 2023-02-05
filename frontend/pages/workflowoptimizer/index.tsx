import PageTitle from "components/UiElements/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import Calendar from "containers/Calendar";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import PersonDropdown from "./personDropdown";
import Head from "next/head";
import Bar from "containers/Calendar/bar";
// import Bar from "pages/charts/bar";
type Props = {};

const index = (props: Props) => {
  const [state, setState] = useState<any>({
    events: [],
  });
  const [view, setView] = useState<any>("month");
  const [date, setDate] = useState<any>(new Date());
  const [jobs, setJobs] = useState<number>(0);
  const [Allcar, setAllcar] = useState<any>([]);
  const [rangeDate, setRangeDate] = useState<any>([]);
  // const [Toyota, setToyota] = useState<any>([0, 0, 0, 0, 0, 0, 0]);
  // const [Nissan, setNissan] = useState<any>([0, 0, 0, 0, 0, 0, 0]);
  // const [Hyundai, setHyundai] = useState<any>([0, 0, 0, 0, 0, 0, 0]);
  // const [Honda, setHonda] = useState<any>([0, 0, 0, 0, 0, 0, 0]);
  // const [Ford, setFord] = useState<any>([0, 0, 0, 0, 0, 0, 0]);
  // const [cars, setCars] = useState<any>([
  //   "Ford Motors",
  //   "Nissan",
  //   "Hyundai",
  //   "Honda",
  //   "Toyota",
  // ]);
  // console.log("state=>", state);
  const getNoJobs = () => {
    var events = state?.events;
    // console.log("inside", events);
    var today = date;

    var currentdate = today.getDate();
    var currentday = today.getDay();
    var newDate;
    var secondDate = null;
    if (currentday == 0) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 6,
        23,
        59
      );
      secondDate = new Date(today.getFullYear(), today.getMonth(), currentdate);
    } else if (currentday == 1) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 5,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 1
      );
    } else if (currentday == 2) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 4,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 2
      );
    } else if (currentday == 3) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 3,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 3
      );
    } else if (currentday == 4) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 2,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 4
      );
    } else if (currentday == 5) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate + 1,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 5
      );
    } else if (currentday == 6) {
      newDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate,
        23,
        59
      );
      secondDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        currentdate - 6
      );
    }
    console.log("compariosn Date", secondDate, newDate);
    var totalJobs = events?.reduce((total, num) => {
      // console.log(num);
      if (
        // new Date(num?.start) <= date
        (new Date(num?.start) >= secondDate &&
          new Date(num?.start) <= newDate) ||
        (new Date(num?.end) <= newDate && new Date(num?.end) >= secondDate)
      ) {
        return (total += parseInt(num?.cars));
      } else {
        return total;
      }
    }, 0);
    var honda = events?.filter((item) => item?.model == "Honda");
    var nissan = events?.filter((item) => item?.model == "Nissan");
    var toyota = events?.filter((item) => item?.model == "Toyota");
    var hyundai = events?.filter((item) => item?.model == "Hyundai");
    var ford = events?.filter((item) => item?.model == "Ford Motors");
    // console.log("Nissan", nissan);
    var carshonda = [];
    var carsnis = [];
    var carstoy = [];
    var carshyu = [];
    var carsfro = [];
    var alldate = [];
    for (var i = 0; i < 7; i++) {
      var hon = honda?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var nis = nissan?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var toy = toyota?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var hyu = hyundai?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      var fro = ford?.filter((item) => {
        var date = new Date(item.start);
        var end = new Date(item.end);

        if (
          new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          ).getTime() ==
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() ||
          (new Date(
            end.getFullYear(),
            end.getMonth(),
            end.getDate()
          ).getTime() >=
            new Date(
              secondDate.getFullYear(),
              secondDate.getMonth(),
              secondDate.getDate() + i
            ).getTime() &&
            new Date(item.start) < newDate &&
            !(
              new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ).getTime() >
              new Date(
                secondDate.getFullYear(),
                secondDate.getMonth(),
                secondDate.getDate() + i
              ).getTime()
            ))
        ) {
          return true;
        } else {
          return false;
        }
      });
      // console.log("Nis", nis);
      if (hon.length > 0) {
        carshonda.push(
          hon?.reduce((total, num) => total + parseInt(num?.cars), 0)
        );
      } else {
        carshonda.push(0);
      }
      if (nis.length > 0) {
        carsnis.push(
          nis?.reduce((total, num) => total + parseInt(num?.cars), 0)
        );
      } else {
        carsnis.push(0);
      }
      if (toy.length > 0) {
        carstoy.push(
          toy?.reduce((total, num) => total + parseInt(num?.cars), 0)
        );
      } else {
        carstoy.push(0);
      }
      if (hyu.length > 0) {
        carshyu.push(
          hyu?.reduce((total, num) => total + parseInt(num?.cars), 0)
        );
      } else {
        carshyu.push(0);
      }
      if (fro.length > 0) {
        carsfro.push(
          fro?.reduce((total, num) => total + parseInt(num?.cars), 0)
        );
      } else {
        carsfro.push(0);
      }
      var curdate = new Date(
        secondDate.getFullYear(),
        secondDate.getMonth(),
        secondDate.getDate() + i
      );
      alldate.push(curdate.toDateString());
    }
    // console.log("carsnis", carsnis);
    var aldata = [
      {
        name: "Ford Motors",
        data: carsfro,
      },
      {
        name: "Honda",
        data: carshonda,
      },
      {
        name: "Hyundai",
        data: carshyu,
      },
      {
        name: "Nissan",
        data: carsnis,
      },
      {
        name: "Toyota",
        data: carstoy,
      },
    ];
    console.log(aldata);
    setAllcar(aldata);
    setRangeDate(alldate);
    // setHonda(carshonda);
    // setNissan(carsnis);
    // setToyota(carstoy);
    // setHyundai(carshyu);
    // setFord(carsfro);
    // setHonda(honda?.reduce((total,num)=>total+num?.cars,0))
    // setToyota(toyota?.reduce((total,num)=>total+num?.cars,0))
    // setFord(ford?.reduce((total,num)=>total+num?.cars,0))
    // setHyundai(hyundai?.reduce((total,num)=>total+num?.cars,0))
    // setNissan(nissan?.reduce((total,num)=>total+num?.cars,0))
    // console.log("totalJobs", totalJobs);
    setJobs(totalJobs);
    // return totalJobs;
  };
  var tasks = [
    { name: "KIA", order: 15 },
    { name: "Toyota", order: 45 },
    { name: "Ford Motors", order: 15 },
    { name: "Honda", order: 33 },
    { name: "Volkswagen", order: 8 },
    { name: "Daimler", order: 5 },
    { name: "General Motors", order: 14 },
    { name: "BMW", order: 22 },
    { name: "FAW", order: 2 },
    { name: "SAIC", order: 19 },
    { name: "Lexus", order: 32 },
    { name: "Tesla", order: 11 },
    { name: "Hyundai", order: 5 },
    { name: "Mercedes", order: 44 },
    { name: "Derby", order: 23 },
    { name: "New Flyer", order: 15 },
    { name: "INKAS", order: 19 },
  ];
  var data = [
    {
      name: "Sean Davidson",
      desc: "Machine Learning Engineer",
      image: "/images/person1.jpg",
    },
    {
      name: "Dennis Ray",
      desc: "Frontend Developer",
      image: "/images/person1.jpg",
    },
    {
      name: "Gilbert Holland",
      desc: "Backend Developer",
      image: "/images/person1.jpg",
    },
  ];
  useEffect(() => {
    // console.log("changes in allcars");
  }, [Allcar, rangeDate]);
  useEffect(() => {
    if (view == "week") {
      getNoJobs();
    }
  }, [view, date, state?.events]);
  // useEffect(() => {
  //   const getDate = async () => {
  //     const response = await fetch("https://MongooseAPI.erenyea.repl.co/get");
  //     const post = await response.json();
  //     console.log(post);
  //     if (post.success === true) {
  //       const senddata = post.data.map((i) => {
  //         var d = i;
  //         d.start = new Date(i.start);
  //         d.end = new Date(i.end);
  //         d.id = i._id;
  //         return d;
  //       });
  //       setEvents(senddata);
  //     }
  //   };
  //   getDate();
  // }, []);
  // console.log(events);
  return (
    <>
      <Head>
        <title>Dashboard | Workflow Optimizer</title>
      </Head>
      <PageTitle title={"WorkFlow Optimizer"} subtitle={""} />
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]} className="w-full h-full">
          <Grid gridColumns={12} gridGutters={0} gridMargins={0} gridGaps={2}>
            <div className="flex flex-col items-center w-full h-full">
              <div className="flex  items-start mx-auto space-x-2 w-full h-full">
                {/* <Cell span={[12, 12, 3]}> */}
                {/* <div className="w-1/4 h-full rounded-l-lg ">
                  <h3 className="m-4 pb-2 text-xl font-black border-b-2 hover:text-2xl duration-100 cursor-pointer">
                    Expected Upcoming Tasks
                  </h3>
                  <div className="mb-2">
                    <table className="mx-auto gap-3">
                      <tr className="">
                        <th className="text-lg text-customDarkBlue font-black p-2 border-b-2 border-r-2 border-customDarkBlue">
                          Car Company
                        </th>
                        <th className="text-lg text-customDarkBlue font-black p-2 border-b-2 border-customDarkBlue">
                          Quantity
                        </th>
                      </tr>
                      {tasks?.map((task, i) => (
                        <tr
                          key={i}
                          className="hover:text-xl hover:text-gray-600 hover:font-bold duration-100 cursor-pointer"
                        >
                          <td className="p-1 border-r-2 border-l-2 border-customDarkBlue">
                            {task?.name}
                          </td>
                          <td className="border-r-2 border-l-2 pl-2 border-customDarkBlue">
                            {task?.order}
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div> */}

                {/* </Cell> */}
                {/* <Cell span={[12, 12, 9]}> */}

                <Block
                  paddingTop={["10px", "20px", "30px", "0"]}
                  minHeight="500px"
                  // height="100%"
                  // maxHeight="700px"
                  className={"mx-2 w-full !h-full"}
                  id="hamza"
                >
                  <Calendar
                    className="w-full !h-[700px]"
                    height={"700px"}
                    style={{ height: "700px" }}
                    view={view}
                    setView={setView}
                    state={state}
                    setState={setState}
                    date={date}
                    setDate={setDate}
                  />
                  {view == "week" ? (
                    <div className="flex w-full h-full flex-col justify-center items-center mt-2">
                      <h3 className="text-3xl text-bold text-gray-900 decoration-sky-500/30  subpixel-antialiased font-black">
                        Weekly Outlook
                      </h3>
                      <div className="text-2xl text-bold text-gray-800">
                        No. of Jobs this week:{" "}
                        <i className="font-black">{jobs}</i>
                      </div>
                      <div className="w-full ">
                        {Allcar.length > 0 && rangeDate.length > 0 ? (
                          <Bar args={Allcar} categories={rangeDate} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Block>
                {/* </Cell> */}
              </div>
            </div>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default index;
