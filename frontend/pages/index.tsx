import { NextPage } from "next";
import { IoIosMailUnread, IoMdCart } from "react-icons/io";
import { FaMoneyCheckAlt, FaChartLine } from "react-icons/fa";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import { Card, StyledBody } from "baseui/card";
import Container from "components/UiElements/Container/Container";
import ListGridCard from "components/UiElements/ListGridCard/ListGridCard";
import LabelGroup from "components/UiElements/LabelGroup/LabelGroup";
import WidgetCard from "components/UiElements/WidgetCard/WidgetCard";
import ProductViews from "containers/Widgets/ProductViews";
import ProductsBar from "containers/Widgets/ProductsBar";
import Views from "containers/Widgets/Views";
import CashFlow from "containers/Widgets/CashFlow";
// import { useQuery, gql } from "@apollo/client";
// import { withApollo } from "apollo/client";
import Head from "next/head";
import { useEffect, useState } from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import Area from "./charts/area";
import Bar from "./charts/bar";
import Column from "./charts/column";
import { useRouter } from "next/router";
import { datas } from "../containers/Dashboard/dashboard";

// const productsBarOptions = [
//   {
//     color: "#FF0080",
//     label: "Tesla",
//   },
//   {
//     color: "#7928CA",
//     label: "Honda",
//   },
//   {
//     color: "#0070F3",
//     label: "Toyota",
//   },
// ];
// const GET_DASHBOARD = gql`
//   query {
//     dashboard {
//       recentApps {
//         id
//         name
//         image
//         description
//       }
//       productViews {
//         categories
//         products
//         views
//       }
//       productsBar {
//         labels
//         products
//       }
//       cashFlow {
//         categories
//         cash
//       }
//     }
//   }
// `;
const Home = () => {
  const [cond, setCond] = useState<any>(false);
  console.log("hamza");
  const router = useRouter();
  // const { data, loading, error, fetchMore } = useQuery(GET_DASHBOARD, {
  //   notifyOnNetworkStatusChange: true,
  // });
  const [data, setData] = useState<any>(datas);
  const [loading, setLoading] = useState<any>(true);
  console.log("data=>", data);
  // console.log("loadDashboard=>", datas);
  if (!data) return null;
  const { productViews, recentApps, productsBar, cashFlow } = data;
  const productsBarOptions = [
    {
      color: "#FF0080",
      label: productsBar.labels[0],
    },
    {
      color: "#7928CA",
      label: productsBar.labels[1],
    },
    {
      color: "#B3536D",
      label: productsBar.labels[2],
    },
    {
      color: "#B8B154",
      label: productsBar.labels[3],
    },
    {
      color: "#43CA16",
      label: productsBar.labels[4],
    },
    // {
    //   color: "#43ca16",
    //   label: productsBar.labels[0],
    // },
  ];
  console.log("data=>", data);
  const [state, setState] = useState<any>({
    series: [
      {
        name: "Booked Jobs",
        data: [130, 140, 180, 210, 170, 180, 190],
      },
      {
        name: "Predicted Jobs",
        data: [164, 193, 228, 248, 222, 206, 237],
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
        text: "",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          "Jan' 23",
          "Feb' 23",
          "Mar' 23",
          "Apr' 23",
          "May' 23",
          "Jun' 23",
          "Jul' 23",
        ],
        title: {
          text: "Months",
        },
      },
      yaxis: {
        title: {
          text: "Jobs",
        },
        min: 100,
        max: 300,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        // floating: true,
        // offsetY: 25,
        // offsetX: 5,
      },
    },
  });
  const [stateOne, setStateOne] = useState<any>({
    series: [
      {
        name: "Man Hours per Job",
        data: [8, 9, 11, 13, 14, 4, 3, 2, 4, 3, 4, 2],
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
        text: "",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          "Jan' 22",
          "Feb' 22",
          "Mar' 22",
          "Apr' 22",
          "May' 22",
          "Jun' 22",
          "Jul' 22",
          "Aug' 22",
          "Sept' 22",
          "Oct' 22",
          "Nov' 22",
          "Dec' 22",
        ],
        title: {
          text: "Months",
        },
      },
      yaxis: {
        // labels: {
        //   formatter: function(val) {
        //     return val + '$'
        //   }
        // },
        title: {
          text: "Man Hours per Job",
        },
        min: 0,
        max: 20,
      },
      annotations: {
        xaxis: [
          {
            x: "Jun' 22",
            borderColor: "#775DD0",
            label: {
              style: {
                color: "#000000",
              },
              text: "Solution Deployed",
            },
          },
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        // floating: true,
        // offsetY: 25,
        // offsetX: 5,
      },
    },
  });
  const [stateTwo, setStateTwo] = useState<any>({
    series: [
      {
        name: "Loss Incured",
        data: [
          84, 25450, 33040, 43250, 44000, 5600, 5300, 4200, 4000, 3400, 3200,
          2600,
        ],
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
      colors: ["#0000FF"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          "Jan' 22",
          "Feb' 22",
          "Mar' 22",
          "Apr' 22",
          "May' 22",
          "Jun' 22",
          "Jul' 22",
          "Aug' 22",
          "Sept' 22",
          "Oct' 22",
          "Nov' 22",
          "Dec' 22",
        ],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + "$";
          },
        },
        title: {
          text: "Loss Incured(CAD)",
        },
        min: 0,
        max: 50000,
      },
      annotations: {
        xaxis: [
          {
            x: "Jun' 22",
            borderColor: "#775DD0",
            label: {
              style: {
                color: "#000000",
              },
              text: "Solution Deployed",
            },
          },
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        // floating: true,
        // offsetY: 25,
        // offsetX: 5,
      },
    },
  });

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setCond(true);
    } else {
      router.push("/login");
    }
    // setTimeout(() => {
    //   setLoading(true);
    // }, 3000);
  }, []);
  if (cond) {
    return (
      <Container>
        <Head>
          <title>Dashboard | Portal</title>
        </Head>
        <Block
          marginLeft={"-8px"}
          marginRight={"-8px"}
          paddingTop={["15px", "20px", "30px", "40px"]}
        >
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 6]}>
              <Grid gridGutters={16} gridMargins={0}>
                <Cell span={12}>
                  <Card
                    title="Jobs per Month"
                    overrides={{
                      Root: {
                        style: ({ $theme }) => {
                          return {
                            borderTopColor: "transparent",
                            borderRightColor: "transparent",
                            borderBottomColor: "transparent",
                            borderLeftColor: "transparent",
                            boxShadow: $theme.lighting.shadow400,
                            minHeight: "312px",
                            marginBottom: "20px",
                          };
                        },
                      },
                      Title: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.font250,
                            position: "absolute",
                          };
                        },
                      },
                      Body: {
                        style: () => {
                          return {
                            minHeight: "260px",
                          };
                        },
                      },
                    }}
                  >
                    <StyledBody>
                      <ApexChart
                        options={state.options}
                        series={state.series}
                        type="line"
                        height={250}
                      />
                    </StyledBody>
                  </Card>
                  {/* <Block paddingTop={["10px", "15px", "30px", "0"]}>
                    <ApexChart
                      options={state.options}
                      series={state.series}
                      type="line"
                      height={420}
                    />
                  </Block> */}
                  {/* <WidgetCard
                    style={{ marginBottom: "20px" }}
                    title="210"
                    icon={<IoIosMailUnread color="#ffffff" size="1.7em" />}
                    description="Unread Order Email"
                    btntext="View report"
                    label="Total mail"
                    onClick={() => console.log("View report of unread email.")}
                  /> */}
                </Cell>
                {/* <Cell span={[12, 6]}>
                  <WidgetCard
                    style={{ marginBottom: '20px' }}
                    color="#0070F3"
                    title="198"
                    icon={<IoMdCart color="#ffffff" size="1.7em" />}
                    description="Pending Orders"
                    btntext="View report"
                    label="Total orders"
                    onClick={() => console.log('View report of pending orders.')}
                  />
                </Cell>
                <Cell span={[12, 6]}>
                  <WidgetCard
                    style={{ marginBottom: '20px' }}
                    color="#3AA76D"
                    title="$210M"
                    icon={<FaChartLine color="#ffffff" size="1.6em" />}
                    description="Yearly Income"
                    btntext="View report"
                    label="Yearly income"
                    onClick={() => console.log('View report of yearly income.')}
                  />
                </Cell>
                <Cell span={[12, 6]}>
                  <WidgetCard
                    style={{ marginBottom: '20px' }}
                    color="#7928CA"
                    title="$210M"
                    icon={<FaMoneyCheckAlt color="#ffffff" size="1.6em" />}
                    description="Total Spent"
                    btntext="View report"
                    label="Previous month"
                    onClick={() => console.log('View report of previous month.')}
                  />
                </Cell> */}
              </Grid>
            </Cell>
            <Cell span={[12, 12, 6]}>
              <Grid gridGutters={16} gridMargins={0}>
                <Cell span={12}>
                  <Card
                    title="Upcoming Week Outlook"
                    overrides={{
                      Root: {
                        style: ({ $theme }) => {
                          return {
                            borderTopColor: "transparent",
                            borderRightColor: "transparent",
                            borderBottomColor: "transparent",
                            borderLeftColor: "transparent",
                            boxShadow: $theme.lighting.shadow400,
                            minHeight: "312px",
                            marginBottom: "20px",
                          };
                        },
                      },
                      Title: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.font250,
                            position: "absolute",
                          };
                        },
                      },
                      Body: {
                        style: () => {
                          return {
                            minHeight: "260px",
                          };
                        },
                      },
                    }}
                  >
                    <StyledBody>
                      <ProductViews
                        categories={productViews.categories}
                        products={productViews.products}
                        views={productViews.views}
                      />
                    </StyledBody>
                  </Card>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
            <Cell span={12}>
              <div className="cash-flow mt-5">
                <Card
                  title="Predicted Incoming Jobs - Breakdown by Manufacturer"
                  overrides={{
                    Root: {
                      style: ({ $theme }) => {
                        return {
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                          borderLeftColor: "transparent",
                          boxShadow: $theme.lighting.shadow400,
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: "200px",
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    <Bar />
                  </StyledBody>
                </Card>
              </div>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
            <Cell span={12}>
              <div className="cash-flow  mt-5 mb-5">
                <Card
                  title="Production Variation"
                  overrides={{
                    Root: {
                      style: ({ $theme }) => {
                        return {
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                          borderLeftColor: "transparent",
                          boxShadow: $theme.lighting.shadow400,
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: "200px",
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    <CashFlow
                      categories={cashFlow.categories}
                      cash={cashFlow.cash}
                    />
                  </StyledBody>
                </Card>
              </div>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
            <Cell span={[12, 12, 6]}>
              <Card
                title="Quality Control"
                overrides={{
                  Root: {
                    style: ({ $theme }) => {
                      return {
                        borderTopColor: "transparent",
                        borderRightColor: "transparent",
                        borderBottomColor: "transparent",
                        borderLeftColor: "transparent",
                        boxShadow: $theme.lighting.shadow400,
                        marginBottom: $theme.sizing.scale700,
                      };
                    },
                  },
                  Title: {
                    style: ({ $theme }) => {
                      return {
                        ...$theme.typography.font250,
                        position: "absolute",
                      };
                    },
                  },
                  Body: {
                    style: () => {
                      return {
                        minHeight: "372px",
                        position: "relative",
                      };
                    },
                  },
                }}
              >
                <StyledBody>
                  <ProductsBar
                    className="padding-control"
                    labels={productsBar.labels}
                    products={productsBar.products}
                  />
                  <LabelGroup
                    style={{
                      position: "absolute",
                      width: "100%",
                      bottom: "-66px",
                    }}
                    items={productsBarOptions}
                  />
                </StyledBody>
              </Card>
            </Cell>

            <Cell span={[12, 12, 6]}>
              <Card
                title="Customer Satisfaction"
                overrides={{
                  Root: {
                    style: ({ $theme }) => {
                      return {
                        borderTopColor: "transparent",
                        borderRightColor: "transparent",
                        borderBottomColor: "transparent",
                        borderLeftColor: "transparent",
                        boxShadow: $theme.lighting.shadow400,
                        marginBottom: $theme.sizing.scale700,
                      };
                    },
                  },
                  Title: {
                    style: ({ $theme }) => {
                      return {
                        ...$theme.typography.font250,
                        position: "absolute",
                      };
                    },
                  },
                  Contents: {
                    style: () => {
                      return {
                        minHeight: "372px",
                      };
                    },
                  },
                }}
              >
                <StyledBody>
                  <Column />
                  {/* <Views className="padding-control" totalView={75} /> */}
                </StyledBody>
              </Card>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
            <Cell span={12}>
              <div className="cash-flow mt-5">
                <Card
                  title="Defect Losses"
                  overrides={{
                    Root: {
                      style: ({ $theme }) => {
                        return {
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                          borderLeftColor: "transparent",
                          boxShadow: $theme.lighting.shadow400,
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: "200px",
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    {/* <ApexChart
                        options={stateOne.options}
                        series={stateOne.series}
                        type="line"
                        height={500}
                      />
                       */}
                    <Area />
                  </StyledBody>
                </Card>
              </div>
            </Cell>
          </Grid>
          <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
            <Cell span={12}>
              <div className="cash-flow mt-5">
                <Card
                  title="Man Hours Utilized"
                  overrides={{
                    Root: {
                      style: ({ $theme }) => {
                        return {
                          borderTopColor: "transparent",
                          borderRightColor: "transparent",
                          borderBottomColor: "transparent",
                          borderLeftColor: "transparent",
                          boxShadow: $theme.lighting.shadow400,
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: "200px",
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    <ApexChart
                      options={stateOne.options}
                      series={stateOne.series}
                      type="line"
                      height={500}
                    />
                  </StyledBody>
                </Card>
              </div>
            </Cell>
          </Grid>
        </Block>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default Home;
