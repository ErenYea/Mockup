import React from "react";

export default function InformationBox({ args }) {
  return (
    <div>
      <section class="h-fit">
        <div class="w-full">
          <div class=" flex  bg-white w-full mb-6  rounded-lg">
            <div>
              <div class="flex flex-col justify-center items-center">
                <div class="w-2/3  justify-center">
                  <div class="flex justify-center items-center h-11/12">
                    <img
                      alt="..."
                      src={args.pic}
                      class="shadow-xl rounded-full h-11/12 align-middle border-none w-1/2"
                    ></img>
                  </div>
                </div>
                {/* <div class="w-1/5 h-1/4 mt-1 flex-row justify-center items-center">
                  <div className="justify-center items-center text-center text-gray-800 font-semibold text-sm flex flex-col">
                    <GaugeChart
                      className="flex items-center justify-center"
                      colors={["#4B5563"]}
                      percent={args?.performance}
                      nrOfLevels={1}
                      textColor="none"
                      needleBaseColor="#4B5563"
                      needleColor="#4B5563"
                      cornerRadius={20}
                      fontSize={17}
                      arcWidth={0.25}
                      arcPadding={0}
                    />
                    <span className="-mt-1 ml-[2.2px] -pt-4 leading-none">{`${args?.performance*100}%`}<br/></span>
                    <span className="text-center ">Performance</span>
                  </div>
                </div> */}
              </div>
              <div class="text-center  flex flex-col">
                <span class="text-2xl font-semibold leading-normal mb-1 text-gray-700">
                  {args?.name}
                </span>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-700 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-700"></i>
                  {args?.address}
                </div>
                <div class="w-full h-fit text-center items-center justify-center flex">
                  <div class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8 w-11/12">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block e tracking-wide text-gray-600">
                        {args?.designation}
                      </span>
                      <span class="text-sm text-gray-400">Designation</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        {args?.totalJobs}
                      </span>
                      <span class="text-sm text-gray-400">Jobs In 2022</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        {args?.best}
                      </span>
                      <span class="text-sm text-gray-400">
                        Best Performance Model
                      </span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-gray-600">
                        {args?.score}%
                      </span>
                      <span class="text-sm text-gray-400">
                        Score for Current Job
                      </span>
                    </div>
                    {/* <div className=" h-fit">
                      <LineChartv2/>
                    </div> */}
                  </div>
                </div>
                <div className="w-full border-black text-xl font-bold block e tracking-wide text-gray-600 ">
                  {args?.desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div>
<div className=" rounded border-gray-600 h-full w-full flex flex-col items-center">
  <div className="  mt-20 m-4 w-1/2 h-1/5 ">
    <img src={image}></img>
  </div>
  <ul className=" m-2 p-2  w-11/12 h-4/5">
    <li className="p-1 m-2 h-fit">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Name:</span> Peter
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Designation: </span>ML
        Engineer
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Domain: </span>Technical
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Salary: </span>$5000
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Job: </span>Remote
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Country: </span>Pakistan
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Performance: </span>9.8
      </label>
    </li>
  </ul>
</div>
</div> */
}
