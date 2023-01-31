import React from "react";
import { Chart } from "react-google-charts";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const data = [
  ["x", "Performance"],

];
var prevVal=getRandomInt(85,90);
for (let index = 0; index < 30; index++) {
  var val=getRandomInt(85,90);
  while((val==prevVal)){
    var val=getRandomInt(85,90);
  }
  data.push([,val])
  
  prevVal=val;
}

export const options = {
  legend: {position: 'none'},
  hAxis: {
    title: "",
    format: "yyyy-MM-dd",
    baselineColor: '#fff',
    gridlineColor: '#fff',
    textPosition: 'none'
    
    
  },
  vAxis: {
    title: "Performance",
    format:'0',
    ticks:[0,10,20,30,40,50,60,70,80,90,100]
  },
  series: {
    1: { curveType: "function" },
  },
  pointsVisible: true
};

export function LineChart({args}) {
   const data = [
    ["x", "Performance"],
  
  ];
  var prevVal=getRandomInt(args.score,98);
  for (let index = 0; index < 30; index++) {
    var val=getRandomInt(args.score,98);
    while((val==prevVal)){
      var val=getRandomInt(args.score,98);
    }
    data.push([,val])
    
    prevVal=val;
  }
  
  return (
    <Chart
      
      chartType="LineChart"
      className="w-full rounded-lg"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}