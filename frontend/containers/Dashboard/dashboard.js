export const datas = {
  recentApps: [
    {
      id: 1,
      image: "https://s3.amazonaws.com/redqteam.com/inst/svg/todo.svg",
      name: "Todoist",
      description: "Organize your life. Then go enjoy it.",
    },
    {
      id: 2,
      image: "https://s3.amazonaws.com/redqteam.com/inst/svg/grammarly.svg",
      name: "Grammarly",
      description: "Clear, effective, mistake-free writing.",
    },
    {
      id: 3,
      image: "https://s3.amazonaws.com/redqteam.com/inst/svg/airtable.svg",
      name: "Airtable",
      description: "Realtime spreadsheet-database hybrid",
    },
    {
      id: 4,
      image: "https://s3.amazonaws.com/redqteam.com/inst/svg/telegram.svg",
      name: "Telegram 4.0",
      description: "The best messenger for every platform",
    },
  ],
  productViews: {
    categories: [
      "1", "2", "3", "4", "5", "6", "7",
    ],
    products: [
      5, 8, 7, 9, 12, 14, 11
    ],
    views: [
      14, 12, 11, 13, 9, 6, 8
    ],
  },
  productsBar: {
    labels: ["Nissan", "Ford", "Hyundai", "Honda", "Toyota"],
    products: [94, 88, 92, 86, 91],
  },
  cashFlow: {
    categories: [
      "2020-01-01",
      "2020-02-01",
      "2020-03-01",
      "2020-04-01",
      "2020-05-01",
      "2020-06-01",
      "2020-07-01",
      "2020-08-01",
      "2020-09-01",
      "2020-10-01",
      "2020-11-01",
      "2020-12-01",
      "2021-01-01",
      "2021-02-01",
      "2021-03-01",
      "2021-04-01",
      "2021-05-01",
      "2021-06-01",
      "2021-07-01",
      "2021-08-01",
      "2021-09-01",
      "2021-10-01",
      "2021-11-01",
      "2021-12-01",
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
      "2022-07-01",
      "2022-08-01",
      "2022-09-01",
      "2022-10-01",
      "2022-11-01",
      "2022-12-01",
    ],
    cash: [
      10, 12, 16, -2, -4, 24, 21, 11, 32, 36, 38, -11, -13, -32, -35, 37, 41,
      44, 24, 22, 11, 13, 15, -16, -17, -19, 36, 23, 31, 24, -4, 22, 21, 32, 24,
      19,
    ],
  },
  activeJobs: {
    series: [
      {
        name: "High - 2020",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Low - 2020",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
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
        text: "Active Jobs per Month",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "Jobs",
        },
        min: 5,
        max: 40,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  },
};
