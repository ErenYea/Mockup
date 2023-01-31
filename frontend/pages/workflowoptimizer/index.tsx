import PageTitle from "components/UiElements/PageTitle/PageTitle";
import React from "react";
import Calendar from "containers/Calendar";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import PersonDropdown from "./personDropdown";
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
      name: "Sam Curren",
      desc: "Machine Learning Engineer",
      image: "/images/person1.jpg",
    },
    {
      name: "Michael Jordan",
      desc: "Frontend Developer",
      image: "/images/person1.jpg",
    },
    {
      name: "George Bills",
      desc: "Backend Developer",
      image: "/images/person1.jpg",
    },
    {
      name: "Harry Callum",
      desc: "DevOps Engineer",
      image: "/images/person1.jpg",
    },
    {
      name: "Ivan Gilbert",
      desc: "iOS Developer",
      image: "/images/person1.jpg",
    },
    {
      name: "Felix Adams",
      desc: "Senior Developer",
      image: "/images/person1.jpg",
    },
    {
      name: "Roberto Arim",
      desc: "Nodejs Developer",
      image: "/images/person1.jpg",
    },
  ];
  return (
    <>
      <PageTitle title={"WorkFlow Optimizer"} subtitle={""} />
      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0} gridGaps={2}>
            <Cell span={[12, 12, 3]}>
              <div className="w-full h-full rounded-l-lg text-customDarkBlue bg-customBlue  border-customDarkBlue">
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
            </Cell>
            <Cell span={[12, 12, 9]}>
              <Block
                paddingBottom="20px"
                right="0px"
                className={"flex  items-end justify-end"}
              >
                <PersonDropdown args={data} />
              </Block>

              <Block
                paddingTop={["10px", "20px", "30px", "0"]}
                minHeight="500px"
                height="100%"
                maxHeight="700px"
              >
                <Calendar />
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default index;
