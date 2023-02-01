import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Grid, Cell } from "baseui/layout-grid";
import { Block } from "baseui/block";
import Container from "components/UiElements/Container/Container";
import ChartMenu from "components/SideMenu/ChartMenu";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
type Props = {
  args: any;
};
const Pie = (props: Props) => {
  console.log(props.args)
  let values =useState<any>(null)
  let labels = useState<any>(null)
  // let labels;
  
  if (props.args) {
    values = props.args.pieValue.map((i,ind)=>{
      if(ind!=0){
        return i[1]
      }
      
    })
    labels = props.args.pieValue.map((i,ind)=>{
      if(ind!=0){
        return i[0]
      }
    })
    values.shift()
    labels.shift()
  }
  // useEffect(() => {
  // }, [props.args])
  
  console.log(values)
  console.log(labels)
  const state = {
    series:values,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      title: {
        text: "",
        align: "left",
      },
      labels: props.args
        ? labels
        : ["Product A", "Product B", "Product C", "Product D", "Product E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      {/* <Head>
				<title>Chart | INST.</title>
				<meta name="Description" content="Inst chart app" />
			</Head> */}

      <Container>
        <Block paddingTop={["0", "0", "0", "40px"]}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            {/* <Cell span={[12, 12, 3]}>
							<ChartMenu />
						</Cell> */}
            <Cell span={12}>
              <Block paddingTop={["10px", "15px", "30px", "0"]}>
                {
                  state.series == null? "" : <ApexChart
                  options={state.options}
                  series={state.series}
                  type="pie"
                  height={420}
                />
                }
               
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default Pie;
