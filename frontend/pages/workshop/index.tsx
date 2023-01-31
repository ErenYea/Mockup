import { NextPage } from "next";
import React, { useEffect } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import DropdownComponent from "./dropdown";
import InformationBoxv2 from "./informationBoxv2";
// import { Select } from "baseui/select";
import { Select } from "baseui/select";
type Props = {};

const index: NextPage = (props: Props) => {
  const timeSteps = [1500, 1000, 3000, 1500, 3000];
  useEffect(() => {
    const text = "Car Model: Likely Ford F-150";
    async function beginPage() {
      var elements = document.getElementsByClassName("custom");
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.getElementsByTagName(
          "div"
        )[0].innerHTML = `<div class="lds-ring${timeSteps[index]} hideMe${timeSteps[index]} ml-1 -mt-0.5"><div></div><div></div><div></div><div></div></div><span class="ml-1 showMe${timeSteps[index]} text-xl font-black">&#10003;</span>`;
        element
          .getElementsByTagName("span")[0]
          .classList.add("text-2xl", "font-black");
        await new Promise((r) => setTimeout(r, timeSteps[index]));
        if (index == 0) {
          document.getElementsByClassName("custom-text")[0].textContent = text;
        }
        element
          .getElementsByTagName("span")[0]
          .classList.remove("text-2xl", "font-black");
      }
    }
    beginPage();
  });
  return (
    <>
      <PageTitle title={"Workshop Floor"} subtitle={""} />
      <Container>
        <Block paddingBottom="20px">
          <div className="flex m-4 font-display text-start text-customDarkBlue justify-center space-x-2 h-full w-full">
            <label className="m-2 text-xl font-semibold text-customDarkBlue leading-none">
              Select Workshop
            </label>
            <DropdownComponent
              args={[
                "Workhop Area 1",
                "Workhop Area 2",
                "Workhop Area 3",
                "Workhop Area 4",
              ]}
            />
          </div>
        </Block>
        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={[12, 12, 6]}>
            <div className="h-fit w-full">
              <div className="bg-black w-full flex items-center justify-center rounded-lg">
                <video
                  src="/videos/video1.mp4"
                  loop
                  autoPlay
                  muted
                  controls={false}
                  className="border-4 bg-black border-gray-900 rounded-lg w-[300px] h-fit"
                ></video>
              </div>
              <div className=" mb-4 h-1/4">
                <h1 className="custom-text text-2xl mt-2 flex p-2 font-semibold underline text-customDarkBlue">
                  Car Model:
                </h1>
                <div className="pt-2 w-full">
                  <ul className="list-disc ml-8">
                    <li className="custom p-2 h-fit text-xl text-start text-customDarkBlue flex">
                      <span className="">Detecting Car Model</span>
                      <div className="flex">
                        {/* <div class="lds-ring hideMeAfter5Seconds ml-1 -mt-0.5">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span className="ml-1 showMe text-xl font-black">
                          &#10003;
                        </span> */}
                      </div>
                    </li>
                    <li className="custom p-2 h-fit text-xl text-start text-customDarkBlue flex">
                      <span className="">Calculating template placement</span>
                      <div className="flex"></div>
                    </li>
                    <li className="custom p-2 h-fit  text-xl text-start text-customDarkBlue flex">
                      <span className="">Overlaying template placement</span>
                      <div className="flex"></div>
                    </li>
                    <li className="custom p-2 h-fit  text-xl text-start text-customDarkBlue flex">
                      <span className="">Fetching placement measurement</span>
                      <div className="flex"></div>
                    </li>
                    <li className="custom p-2 h-fit  text-xl text-start text-customDarkBlue flex">
                      <span className="">
                        Overlaying template placement measurement
                      </span>
                      <div className="flex"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Cell>
          <Cell span={[12, 12, 6]}>
            <div className="flex justify-end h-fit w-full">
              <div className="w-full mr-4 pt-6 mb-2 bg-white justify-center  border-white-200 rounded-lg h-fit">
                <InformationBoxv2 />
              </div>
            </div>
          </Cell>
        </Grid>
      </Container>
    </>
  );
};

export default index;
