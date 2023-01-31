import { Block } from "baseui/block";
import React from "react";
// import { Block } from "baseui/block";
type Props = {};

const index = (props: Props) => {
  return (
    <Block>
      <section id="demandforecasting" className="py-10 text-white mt-8 ">
        <div className="text-center mt-8 h-full">
          <div className="flex justify-center items-center">
            <h3 className="link link-underline link-underline-black text-4xl font-black border-t-2 border-white pt-2 text-black w-fit">
              Demand Forecasting
            </h3>
          </div>
          <div className="-mt-20 flex justify-center items-center h-[1450px] ">
            <div className=" bg-customBlue rounded-lg p-5 flex items-center w-[99%] justify-center h-5/6  border-2 border-customDarkBlue">
              <iframe
                className="w-[99%] h-[95%]  rounded-lg overflow-x-hidden scrollbar scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-blue-500"
                src="http://owaisahmed142002.pythonanywhere.com/"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Block>
  );
};

export default index;
