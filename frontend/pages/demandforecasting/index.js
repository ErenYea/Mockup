import React from 'react';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import ColumnChart from './columnChart';
import LineBar from './lineGraph';
import LineBarv2 from './lineGraphv2';
import Head from 'next/head';
import plotData from './data/plotData.json';
import jsonData from './data/jsonData.json';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"


const index = () => {

  const router = useRouter();
  const { data: session } = useSession()

  const [years, setYears] = React.useState(['2021', '2022', '2023']);
  const [selectedYear, setSelectedYear] = React.useState(2023);

  React.useEffect(() => {
    if (!session && document.cookie !== 'sessionToken=mySessionTokenValue') {
      router.push('/login?type=workshop');
    }
  }, []);

  const salesData = [
    { name: 'Aluminum Wheels' },
    { name: 'Suspension kit' },
    { name: 'Bumper' },
    { name: 'Disc Brake Rotor' },
    { name: 'Sunroofs' },
  ];
  const brandData = [
    { name: 'Nissan' },
    { name: 'Ford' },
    { name: 'Hyundai' },
    { name: 'Honda' },
    { name: 'Toyota' },
  ];

  const [Index, setIndex] = React.useState(0);
  const [Categoryindex, setCategoryindex] = React.useState(0);
  const [Brandindex, setBrandindex] = React.useState(0);

  function showInfo() {
    var value = parseInt(document.getElementById('dropdown').value);
    setIndex(value);
  }

  function CategorySelect() {
    var value = parseInt(document.getElementById('dropdownCategory').value);
    setCategoryindex(value);
    var valueBrand = parseInt(document.getElementById('dropdownBrand').value);
    setBrandindex(valueBrand);
  }

  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value);
    setSelectedYear(selectedYear);
  };

  return (
    <>
      <Head>
        <title>Dashboard | Demand Forecasting</title>
      </Head>
      <PageTitle title={'Demand Forecasting'} subtitle={''} />

      <div className="w-full flex flex-col justify-center items-center mb-5 mt-5">
        <div>
          <h1 className="text-4xl font-black mb-4 ">
            Forecasted sunroof market
          </h1>
        </div>
        <LineBar
          args={[
            40000,
            45000,
            120000,
            100000,
            105000,
            110000,
            95000,
            95000,
            45000,
            55000,
            35000,
            30000,
          ]}
          argSecond={[
            8500,
            10800,
            30000,
            25000,
            27000,
            32000,
            29000,
            29500,
            8000,
            9500,
            11000,
            12000,
          ]}
        />
      </div>
      
      <div className="w-full flex justify-center items-center flex-row">
        <h1 className="text-4xl font-black mb-4 mt-10 ">
          Projected installations per month
        </h1>
      </div>

      <div className="w-full flex justify-center items-center flex-col lg:flex-row px-4">
        <span className="mr-2 text-lg font-black">Select Year</span>
        <select
          id="yearDropdown"
          className="w-full lg:w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year} className="font-bold">
              {year}
            </option>
          ))}
        </select>
        
        <span className="mx-4 text-lg font-black">Select Month:</span>
        <select
          id="dropdown"
          key={selectedYear}
          onChange={showInfo}
          className="w-full lg:w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          {jsonData[`${selectedYear}`].map((val, ind) => (
            <option key={ind} value={ind} className="font-bold">
              {val.name}
            </option>
          ))}
        </select>
      </div>

      <ColumnChart args={jsonData[`${selectedYear}`][Index]} />
      <div className="flex flex-col h-[100px] justify-center rounded-lg items-center border-2 w-full ">
        <span className="text-4xl font-black z-10">
          Automotive Parts Projection
        </span>
      </div>
      <div className="w-full flex justify-center mt-10 flex-row  h-[150px]">
        <div className="w-1/4 flex justify-end mr-2 h-fit items-center">
          <span className="mr-2 text-lg font-black">Select Category </span>
          <select
            id="dropdownCategory"
            className="w-1/2 p-2.5 text-md text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none "
          >
            {salesData.map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold text-md">
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-1/3">
          <span className="mr-2 text-lg font-black">Select Manufacturers </span>
          <select
            id="dropdownBrand"
            className="w-1/2 p-2.5 text-md text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none "
          >
            {brandData.map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold text-md">
                  {val.name}
                </option>
              );
            })}
          </select>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 text-lg"
            onClick={CategorySelect}
          >
            Make Plot
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <LineBarv2 args={plotData[0][`${Categoryindex}${Brandindex}`]} />
      </div>
    </>
  );
};

export default index;
