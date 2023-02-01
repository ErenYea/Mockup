import PageTitle from "components/UiElements/PageTitle/PageTitle";
import React from "react";
import Calendar from "containers/Calendar";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import PersonDropdown from "./personDropdown";
import Head from "next/head";
type Props = {};

const index = (props: Props) => {
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
  return (
    <>
      <Head>
        <title>Dashboard | Workflow Optimizer</title>
      </Head>
      <PageTitle title={"WorkFlow Optimizer"} subtitle={""} />
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0} gridGaps={2}>
            <div className="flex flex-col">
              <div className="w-full flex flex-col items-center">
                <Block
                  paddingBottom="20px"
                  right="0px"
                  className={"w-1/2 flex justify-center items-center ff fg"}
                >           
                 <label className="m-2 text-xl font-semibold text-customDarkBlue">
                    Select Worker
                 </label>
                  <select
                    id="dropdown"
                    // onChange={showInfo}
                    className="w-1/2 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    {data.map((val, ind) => {
                      return (
                        <option value={ind} key={ind} className="font-bold">
                          {val.name}
                        </option>
                      );
                    })}
                  </select>
                  {/* <PersonDropdown args={data} /> */}
                </Block>
              </div>
              <div className="flex flex-row items-start mx-auto space-x-2">
                {/* <Cell span={[12, 12, 3]}> */}
                <div className="w-1/4 h-full rounded-l-lg ">
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
                          <td className="border-r-2 border-l-2 border-customDarkBlue">
                            {task?.order}
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
                {/* </Cell> */}
                {/* <Cell span={[12, 12, 9]}> */}

                <Block
                  paddingTop={["10px", "20px", "30px", "0"]}
                  minHeight="500px"
                  height="100%"
                  maxHeight="700px"
                >
                  <Calendar />
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
