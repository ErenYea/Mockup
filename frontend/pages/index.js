import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { Card, StyledBody } from 'baseui/card';
import Container from 'components/UiElements/Container/Container';
import LabelGroup from 'components/UiElements/LabelGroup/LabelGroup';
import ProductViews from 'containers/Widgets/ProductViews';
import ProductsBar from 'containers/Widgets/ProductsBar';
import CashFlow from 'containers/Widgets/CashFlow';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';
import Area from './charts/area';
import Bar from './charts/bar';
import Column from './charts/column';
import { useRouter } from 'next/router';
import { datas } from '../containers/Dashboard/dashboard';

const Home = () => {
  
  const router = useRouter();
  const [data, setData] = useState(datas);

  if (!data) return null;
  const { productViews, recentApps, productsBar, cashFlow } = data;

  const [bookedJobs, setBookedJobs] = useState([])
  const [predictedJobs, setPredictedJobs] = useState([])
  const [months, setMonths] = useState([])
  const [jobsChartOptions, setJobsChartOptions] = useState([])

  useEffect(() => {
    
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/asc/home/jobs_per_month`)
      .then((res) => res.json())
      .then((res) => {
        const jobsPerMonth = res.data.sort((a, b) => {
          const monthA = new Date(`20${a.month}`);
          const monthB = new Date(`20${b.month}`);
          return monthA - monthB;
        });
        
        const bookedJobsArray = jobsPerMonth.map(item => item.booked_jobs);
        const monthArray = jobsPerMonth.map(item => item.month);
        const predictedJobsArray = jobsPerMonth.map(item => item.predicted_jobs);

        setBookedJobs(bookedJobsArray);
        setPredictedJobs(predictedJobsArray);
        setMonths(monthArray);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {

    setJobsChartOptions({
      series: [
        {
          name: 'Booked Jobs',
          data: bookedJobs,
        },
        {
          name: 'Predicted Jobs',
          data: predictedJobs,
        },
      ],
      options: {
        chart: {
          height: 420,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#ff0080', '#006ff3'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: '',
          align: 'left',
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: months,
          title: {
            text: 'Months',
          },
        },
        yaxis: {
          title: {
            text: 'Jobs',
          },
          min: Math.floor((Math.min(Math.min(...bookedJobs), Math.min(...predictedJobs))-20)/ 10) * 10,
          max: Math.ceil((Math.max(Math.max(...bookedJobs), Math.max(...predictedJobs))+20)/ 10) * 10
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
        },
      },
    })

  }, [bookedJobs, predictedJobs, months]);

  const productsBarOptions = [
    {
      color: '#FF0080',
      label: productsBar.labels[0],
    },
    {
      color: '#7928CA',
      label: productsBar.labels[1],
    },
    {
      color: '#B3536D',
      label: productsBar.labels[2],
    },
    {
      color: '#B8B154',
      label: productsBar.labels[3],
    },
    {
      color: '#43CA16',
      label: productsBar.labels[4],
    },
  ];

  const [stateOne, setStateOne] = useState({
    series: [
      {
        name: 'Man Hours per Job',
        data: [8, 9, 11, 13, 14, 4, 3, 2, 4, 3, 4, 2],
      },
    ],
    options: {
      chart: {
        height: 420,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#ff0080', '#006ff3'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
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
          text: 'Months',
        },
      },
      yaxis: {
        title: {
          text: 'Man Hours per Job',
        },
        min: 0,
        max: 20,
      },
      annotations: {
        xaxis: [
          {
            x: "Jun' 22",
            borderColor: '#775DD0',
            label: {
              style: {
                color: '#000000',
              },
              text: 'Solution Deployed',
            },
          },
        ],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
  });

  const [stateTwo, setStateTwo] = useState({
    series: [
      {
        name: 'Loss Incured',
        data: [
          84,
          25450,
          33040,
          43250,
          44000,
          5600,
          5300,
          4200,
          4000,
          3400,
          3200,
          2600,
        ],
      },
    ],
    options: {
      chart: {
        height: 420,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#0000FF'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '',
        align: 'left',
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
          text: 'Month',
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + '$';
          },
        },
        title: {
          text: 'Loss Incured(CAD)',
        },
        min: 0,
        max: 50000,
      },
      annotations: {
        xaxis: [
          {
            x: "Jun' 22",
            borderColor: '#775DD0',
            label: {
              style: {
                color: '#000000',
              },
              text: 'Solution Deployed',
            },
          },
        ],
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
  });

  return (
    <Container>
      <Head>
        <title>Dashboard | Portal</title>
      </Head>
      <Block
        marginLeft={'-8px'}
        marginRight={'-8px'}
        paddingTop={['15px', '20px', '30px', '40px']}
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
                          borderTopColor: 'transparent',
                          borderRightColor: 'transparent',
                          borderBottomColor: 'transparent',
                          borderLeftColor: 'transparent',
                          boxShadow: $theme.lighting.shadow400,
                          minHeight: '312px',
                          marginBottom: '20px',
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                          position: 'absolute',
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: '260px',
                        };
                      },
                    },
                  }}
                >
                  <StyledBody>
                    <ApexChart
                      options={jobsChartOptions.options}
                      series={jobsChartOptions.series}
                      type="line"
                      height={250}
                    />
                  </StyledBody>
                </Card>
              </Cell>
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
                          borderTopColor: 'transparent',
                          borderRightColor: 'transparent',
                          borderBottomColor: 'transparent',
                          borderLeftColor: 'transparent',
                          boxShadow: $theme.lighting.shadow400,
                          minHeight: '312px',
                          marginBottom: '20px',
                        };
                      },
                    },
                    Title: {
                      style: ({ $theme }) => {
                        return {
                          ...$theme.typography.font250,
                          position: 'absolute',
                        };
                      },
                    },
                    Body: {
                      style: () => {
                        return {
                          minHeight: '260px',
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
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
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
                        minHeight: '200px',
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
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
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
                        minHeight: '200px',
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
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: 'transparent',
                      borderLeftColor: 'transparent',
                      boxShadow: $theme.lighting.shadow400,
                      marginBottom: $theme.sizing.scale700,
                    };
                  },
                },
                Title: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font250,
                      position: 'absolute',
                    };
                  },
                },
                Body: {
                  style: () => {
                    return {
                      minHeight: '372px',
                      position: 'relative',
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
                    position: 'absolute',
                    width: '100%',
                    bottom: '-66px',
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
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      borderBottomColor: 'transparent',
                      borderLeftColor: 'transparent',
                      boxShadow: $theme.lighting.shadow400,
                      marginBottom: $theme.sizing.scale700,
                    };
                  },
                },
                Title: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font250,
                      position: 'absolute',
                    };
                  },
                },
                Contents: {
                  style: () => {
                    return {
                      minHeight: '372px',
                    };
                  },
                },
              }}
            >
              <StyledBody>
                <Column />
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
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
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
                        minHeight: '200px',
                      };
                    },
                  },
                }}
              >
                <StyledBody>
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
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                        borderLeftColor: 'transparent',
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
                        minHeight: '200px',
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
  
};

export default Home;

export async function getServerSideProps(context) {
  
  const sessionToken = context.req.headers.cookie?.split(';').find(cookie => cookie.trim().startsWith('sessionToken='));
  
  if (sessionToken) {

    return {
      props: { }
    };
  } else {
    return { redirect: { destination: "/login?type=workshop" } };
  }
}