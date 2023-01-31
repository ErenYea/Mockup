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
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "apollo/client";
import Head from "next/head";
import { useState } from "react";
import ApexChart from "components/UiElements/ApexChart/ApexChart";

const productsBarOptions = [
  {
    color: "#FF0080",
    label: "Banana",
  },
  {
    color: "#7928CA",
    label: "Orange",
  },
  {
    color: "#0070F3",
    label: "Blueberry",
  },
];
const GET_DASHBOARD = gql`
  query {
    dashboard {
      recentApps {
        id
        name
        image
        description
      }
      productViews {
        categories
        products
        views
      }
      productsBar {
        labels
        products
      }
      cashFlow {
        categories
        cash
      }
    }
  }
`;
const Home: NextPage<{}> = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_DASHBOARD, {
    notifyOnNetworkStatusChange: true,
  });
  if (!data) return null;
  const { productViews, recentApps, productsBar, cashFlow } = data.dashboard;
  console.log(data);
  const [state, setState] = useState<any>({
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
        text: "",
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
  });
  return (
    <Container>
      <Head>
        <title> INST.</title>
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
                  title="Active Jobs per Month"
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
                  title="Jobs performed Last Week"
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
          <Cell span={[12, 12, 6]}>
            <Card
              title="Product List"
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
              title="Average View"
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
                <Views className="padding-control" totalView={75} />
              </StyledBody>
            </Card>
          </Cell>
        </Grid>

        <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={12}>
            <div className="cash-flow">
              <Card
                title="Revenue Generated"
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
      </Block>
    </Container>
  );
};

export default withApollo(Home);
