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

const index = ({ capacities, forecasts, dates }) => {

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
  const [iframe, setIframe] = React.useState(true)

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

  // const args = [40000, 45000, 120000, 100000, 105000, 110000, 95000, 95000, 45000, 55000, 35000, 30000]
  // const argSecond = [8500, 10800, 30000, 25000, 27000, 32000, 29000, 29500, 8000, 9500, 11000, 12000]
  // const xLabels = ['Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023'];
  
  const [selectedDates, setSelectedDates] = React.useState(dates);
  const [selectedCapacities, setSelectedCapacities] = React.useState(capacities)
  const [selectedForecasts, setSelectedForecasts] = React.useState(forecasts)

  const [selectedFilter, setSelectedFilter] = React.useState('12');

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;

    setSelectedFilter(filterValue);

    if (filterValue === '3') {
      // Show the last 3 values
      setSelectedCapacities(capacities.slice(-3));
      setSelectedForecasts(forecasts.slice(-3));
      setSelectedDates(dates.slice(-3));
    } else if (filterValue === '6') {
      // Show the last 6 values
      setSelectedCapacities(capacities.slice(-6));
      setSelectedForecasts(forecasts.slice(-6));
      setSelectedDates(dates.slice(-6));
    } else if (filterValue === '12') {
      // Show the last 12 values
      setSelectedCapacities(capacities.slice(-12));
      setSelectedForecasts(forecasts.slice(-12));
      setSelectedDates(dates.slice(-12));
    } else if (filterValue === 'max') {
      // Show all the values
      setSelectedCapacities(capacities);
      setSelectedForecasts(forecasts);
      setSelectedDates(dates);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | Demand Forecasting</title>
      </Head>
      <PageTitle title={'Demand Forecasting'} subtitle={''} />

      <div className="w-full flex flex-col justify-center items-center mb-5 mt-5">
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-4xl font-black mb-4 ">
            Forecasted sunroof market
          </h1>
          <select
            id="filterDropdown"
            className="w-full p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="3">Last 3 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="12">Last 12 Months</option>
            <option value="max">Max</option>
          </select>

        </div>
        <LineBar args={selectedCapacities} argSecond={selectedForecasts} xLabels={selectedDates} />
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

      <div className="flex flex-col h-[100px] justify-center rounded-lg items-center border-2 w-full">
        <span className="text-4xl font-black">
          Automotive Parts Projection
        </span>
      </div>

      {
        iframe ?
          <div className='flex items-center justify-center w-full h-screen'>
            <iframe src="http://owaisahmed2002.pythonanywhere.com/" title="Embedded Web Page" width="100%" height="100%" />
          </div> 
        :
          <>
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
      }

    </>
  );
};

export default index;

export async function getServerSideProps() {
  try {
    const response = await fetch("http://127.0.0.1:5000/asc/demandforecasting/sunroof_forecast");
    const results = await response.json();

    const OEMCapacityArray = results.data.map(item => item.OEM_capacity);
    const dateArray = results.data.map(item => new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) );
    const forecastArray = results.data.map(item => item.forecast);

    return {
      props: {
        capacities: OEMCapacityArray,
        forecasts: forecastArray,
        dates: dateArray,
      },
    };
  } catch (error) {
    console.error('Request error:', error);

    return {
      props: {
        capacities: [],
        forecasts: [],
        dates: [],
      },
    };
  }
}