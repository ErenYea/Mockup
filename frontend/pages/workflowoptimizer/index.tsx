import PageTitle from "components/UiElements/PageTitle/PageTitle";
import React, { useEffect, useState } from "react";
import Calendar from "containers/Calendar";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import PersonDropdown from "./personDropdown";
import Head from "next/head";
type Props = {};

const index = (props: Props) => {
  const [events, setEvents] = useState<any>([]);
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
      name: "Sam Davidson",
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
  console.log(events);
  return (
    <>
      <Head>
        <title>Dashboard | Workflow Optimizer</title>
      </Head>
      <PageTitle title={"WorkFlow Optimizer"} subtitle={""} />
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]} className="w-full">
          <Grid gridColumns={12} gridGutters={0} gridMargins={0} gridGaps={2}>
            <div className="flex flex-col items-center w-full">
              <div className="flex  items-start mx-auto space-x-2 w-full">
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
                  height="100%"
                  maxHeight="700px"
                  className={"mx-2 w-full"}
                >
                  <Calendar className="w-full" />
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
