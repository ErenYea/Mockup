import React from 'react';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import Container from 'components/UiElements/Container/Container';
import ApexChart from 'components/UiElements/ApexChart/ApexChart';

const ColumnChart = (props) => {

  const options = {
    "chart": {
    "height": 420,
    "type": "line",
    "dropShadow": {
    "enabled": false
    },
    "toolbar": {
    "show": false
    }
    },
    "plotOptions": {
    "columnWidth": "20%"
    },
    "colors": ["#006ff3", "#39a66d"],
    "dataLabels": {
    "enabled": true
    },
    "stroke": {
    "curve": "smooth"
    },
    "markers": {
    "size": 1
    },
    "xaxis": {
    "title": {
    "text": "Models"
    },
    "categories": props.labels
    },
    "yaxis": {
    "title": {
    "text": "No of car units (sunroofs)"
    },
    "labels": {
    "show": true,
    "align": "left",
    "minWidth": 0,
    "maxWidth": 360,
    "style": {
    "colors": [],
    "fontSize": "12px",
    "fontFamily": "Helvetica, Arial, sans-serif",
    "fontWeight": 400,
    "cssClass": "apexcharts-yaxis-label"
    },
    "offsetX": -5,
    "offsetY": 10,
    "rotate": 0
    },
    "min": 5,
    "max": 50
    },
    "legend": {
    "position": "top",
    "horizontalAlign": "right",
    "floating": true,
    "offsetY": -25,
    "offsetX": -5
    }
  }

  const state = {
    series: [
      {
        name: 'Vehicles',
        data: props.args?.value,
      },
    ],
    options,
  };

  return (
    <>
      <Container>
        <Block paddingTop={['0', '0', '0', '40px']}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12]}>
              <Block paddingTop={['10px', '15px', '30px', '0']}>
                <ApexChart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  height="420"
                />
              </Block>
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default ColumnChart;
