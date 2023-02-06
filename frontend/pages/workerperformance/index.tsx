import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import Container from "components/UiElements/Container/Container";
import { Grid, Cell } from "baseui/layout-grid";
import ApexCharts from "./boxPlot";
import Head from "next/head";
import Calendar from "containers/Calendar";
type Props = {};
import { Block } from "baseui/block";
// import InformationBox from "pages/workshop/informationBoxv2";
import InformationBox from "./informationBox";
import Pie from "pages/charts/pie";
import LineChart from "pages/workshop/lineChart";
import CalendarApp from "../../containers/Calendar/oem/newcalendar/index";

const index = (props: Props) => {
  useEffect(()=>{
    document.querySelectorAll('.rbc-btn-group').forEach((p: HTMLElement, i:number, arr:NodeListOf<HTMLElement>) => {
      p.style.display = 'None';
     })
    // for (let index = 0; index < document.getElementsByClassName('rbc-btn-group').length; index++) {
    //     document.getElementsByClassName('rbc-btn-group')[index].style.display='None'
    // }
  
  })
  const jsonData = [
    {
      name: "Sean Davidson",
      performance: 0.92,
      address: "1883 Venture Place, Alberta",
      designation: "Senior Technician",
      totalJobs: 579,
      best: "Ford F-150",
      score: 91,
      desc: "Best and Outstanding Skills",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 11],
        ["Nissan", 2],
        ["Hyundai", 2],
        ["Honda", 2],
        ["Toyota", 7],
      ],
      pic: "/images/image.jpg",
      boxPlotValue: [
        { x: "Ford", y: [54, 66, 69, 75, 88] },
        { x: "Nissan", y: [43, 65, 69, 76, 81] },
        { x: "Hyundai", y: [31, 39, 45, 51, 59] },
        { x: "Honda", y: [39, 46, 55, 65, 71] },
        { x: "Toyota", y: [29, 31, 35, 39, 44] },
      ],
      id: "index1",
      calendar:[
        {
            "_id": "63db6f01bdb9fbea8ad6211c",
            "title": "Ford GT",
            "start": "2023-02-01T03:00:00.000Z",
            "end": "2023-02-01T03:55:00.000Z",
            "model": "for",
            "person": "Sean Davidson",
            "__v": 0,
            "id": "63db6f01bdb9fbea8ad6211c"
        },
        {
            "_id": "63dbd51e99035c5d474c48e1",
            "title": "Ford F-150",
            "start": "2023-02-02T03:00:00.000Z",
            "end": "2023-02-02T03:30:00.000Z",
            "model": "nis",
            "person": "Sean Davidson",
            "__v": 0,
            "id": "63dbd51e99035c5d474c48e1"
        },
        {
            "_id": "63dd5642cae0ebbc1270e96f",
            "title": "Toyota RAV4",
            "start": "2023-02-04T05:30:00.000Z",
            "end": "2023-02-04T06:00:00.000Z",
            "model": "hon",
            "person": "Sean Davidson",
            "__v": 0,
            "id": "63dd5642cae0ebbc1270e96f"
        },
        {
          "_id": "63dd5642cae0ebbc1270e96f",
          "title": "Honda CR-V",
          "start": "2023-02-05T05:30:00.000Z",
          "end": "2023-02-05T06:00:00.000Z",
          "model": "hon",
          "person": "Sean Davidson",
          "__v": 0,
          "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-02-09T05:30:00.000Z",
        "end": "2023-02-09T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-10T05:30:00.000Z",
        "end": "2023-02-10T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-12T05:30:00.000Z",
        "end": "2023-02-12T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-02-16T05:30:00.000Z",
        "end": "2023-02-16T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-18T05:30:00.000Z",
        "end": "2023-02-18T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-02-19T05:30:00.000Z",
        "end": "2023-02-19T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-25T05:30:00.000Z",
        "end": "2023-02-25T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-02-29T05:30:00.000Z",
        "end": "2023-02-29T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-01T05:30:00.000Z",
        "end": "2023-03-01T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-05T05:30:00.000Z",
        "end": "2023-03-05T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-03-08T05:30:00.000Z",
        "end": "2023-03-08T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-09T05:30:00.000Z",
        "end": "2023-03-09T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-03-10T05:30:00.000Z",
        "end": "2023-03-10T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-03-11T05:30:00.000Z",
        "end": "2023-03-11T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-12T05:30:00.000Z",
        "end": "2023-03-12T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-15T05:30:00.000Z",
        "end": "2023-03-15T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-17T05:30:00.000Z",
        "end": "2023-03-17T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-20T05:30:00.000Z",
        "end": "2023-03-20T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-03-23T05:30:00.000Z",
        "end": "2023-03-23T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-03-25T05:30:00.000Z",
        "end": "2023-03-25T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-03-28T05:30:00.000Z",
        "end": "2023-03-28T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-30T05:30:00.000Z",
        "end": "2023-03-30T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-04-01T05:30:00.000Z",
        "end": "2023-04-01T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-04-03T05:30:00.000Z",
        "end": "2023-04-03T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Lexus RX",
        "start": "2023-04-05T05:30:00.000Z",
        "end": "2023-04-05T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-06T05:30:00.000Z",
        "end": "2023-04-06T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-07T05:30:00.000Z",
        "end": "2023-04-07T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-04-10T05:30:00.000Z",
        "end": "2023-04-10T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X3",
        "start": "2023-04-12T05:30:00.000Z",
        "end": "2023-04-12T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-04-14T05:30:00.000Z",
        "end": "2023-04-14T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-04-06T05:30:00.000Z",
        "end": "2023-04-06T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-16T05:30:00.000Z",
        "end": "2023-04-16T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-04-17T05:30:00.000Z",
        "end": "2023-04-17T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-18T05:30:00.000Z",
        "end": "2023-04-18T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-04-19T05:30:00.000Z",
        "end": "2023-04-19T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-04-21T05:30:00.000Z",
        "end": "2023-04-21T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-04-22T05:30:00.000Z",
        "end": "2023-04-22T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-04-23T05:30:00.000Z",
        "end": "2023-04-23T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-24T05:30:00.000Z",
        "end": "2023-04-24T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-04-25T05:30:00.000Z",
        "end": "2023-04-25T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-04-26T05:30:00.000Z",
        "end": "2023-04-26T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-04-28T05:30:00.000Z",
        "end": "2023-04-28T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-04-29T05:30:00.000Z",
        "end": "2023-04-29T06:00:00.000Z",
        "model": "hon",
        "person": "Sean Davidson",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
    
    ]
    },
    {
      name: "Dennis Ray",
      performance: 0.83,
      address: "4514 Carling Avenue, Ontario",
      designation: "Junior Technician",
      totalJobs: 312,
      best: "Ford F-100",
      score: 82,
      desc: "Satisfactory Performance.",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 15],
        ["Nissan", 3],
        ["Hyundai", 14],
        ["Honda", 1],
        ["Toyota", 4],
      ],
      pic: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
      boxPlotValue: [
        { x: "Ford", y: [44, 56, 59, 65, 78] },
        { x: "Nissan", y: [33, 55, 59, 66, 71] },
        { x: "Hyundai", y: [21, 29, 35, 41, 49] },
        { x: "Honda", y: [29, 36, 45, 55, 61] },
        { x: "Toyota", y: [19, 21, 25, 29, 34] },
      ],
      id: "index2",
      
      calendar:[
        {
            "_id": "63db6f01bdb9fbea8ad6211c",
            "title": "Ford GT",
            "start": "2023-02-01T03:00:00.000Z",
            "end": "2023-02-01T03:55:00.000Z",
            "model": "for",
            "person": "Dennis Ray",
            "__v": 0,
            "id": "63db6f01bdb9fbea8ad6211c"
        },
        {
            "_id": "63dbd51e99035c5d474c48e1",
            "title": "Ford F-150",
            "start": "2023-02-02T03:00:00.000Z",
            "end": "2023-02-02T03:30:00.000Z",
            "model": "nis",
            "person": "Dennis Ray",
            "__v": 0,
            "id": "63dbd51e99035c5d474c48e1"
        },
        {
            "_id": "63dd5642cae0ebbc1270e96f",
            "title": "Toyota RAV4",
            "start": "2023-02-04T05:30:00.000Z",
            "end": "2023-02-04T06:00:00.000Z",
            "model": "hon",
            "person": "Dennis Ray",
            "__v": 0,
            "id": "63dd5642cae0ebbc1270e96f"
        },
        {
          "_id": "63dd5642cae0ebbc1270e96f",
          "title": "Honda CR-V",
          "start": "2023-02-05T05:30:00.000Z",
          "end": "2023-02-05T06:00:00.000Z",
          "model": "hon",
          "person": "Dennis Ray",
          "__v": 0,
          "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-02-09T05:30:00.000Z",
        "end": "2023-02-09T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-10T05:30:00.000Z",
        "end": "2023-02-10T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-12T05:30:00.000Z",
        "end": "2023-02-12T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-02-16T05:30:00.000Z",
        "end": "2023-02-16T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-18T05:30:00.000Z",
        "end": "2023-02-18T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-02-19T05:30:00.000Z",
        "end": "2023-02-19T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-25T05:30:00.000Z",
        "end": "2023-02-25T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-02-29T05:30:00.000Z",
        "end": "2023-02-29T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-01T05:30:00.000Z",
        "end": "2023-03-01T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-05T05:30:00.000Z",
        "end": "2023-03-05T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-03-08T05:30:00.000Z",
        "end": "2023-03-08T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-09T05:30:00.000Z",
        "end": "2023-03-09T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-03-10T05:30:00.000Z",
        "end": "2023-03-10T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-03-11T05:30:00.000Z",
        "end": "2023-03-11T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-12T05:30:00.000Z",
        "end": "2023-03-12T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-15T05:30:00.000Z",
        "end": "2023-03-15T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-17T05:30:00.000Z",
        "end": "2023-03-17T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-20T05:30:00.000Z",
        "end": "2023-03-20T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-03-23T05:30:00.000Z",
        "end": "2023-03-23T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-03-25T05:30:00.000Z",
        "end": "2023-03-25T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-03-28T05:30:00.000Z",
        "end": "2023-03-28T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-30T05:30:00.000Z",
        "end": "2023-03-30T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-04-01T05:30:00.000Z",
        "end": "2023-04-01T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Lexus RX",
        "start": "2023-04-05T05:30:00.000Z",
        "end": "2023-04-05T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-06T05:30:00.000Z",
        "end": "2023-04-06T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-07T05:30:00.000Z",
        "end": "2023-04-07T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-04-10T05:30:00.000Z",
        "end": "2023-04-10T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-04-14T05:30:00.000Z",
        "end": "2023-04-14T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-16T05:30:00.000Z",
        "end": "2023-04-16T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },

      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-18T05:30:00.000Z",
        "end": "2023-04-18T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-04-19T05:30:00.000Z",
        "end": "2023-04-19T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
 
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-04-22T05:30:00.000Z",
        "end": "2023-04-22T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-04-23T05:30:00.000Z",
        "end": "2023-04-23T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-24T05:30:00.000Z",
        "end": "2023-04-24T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-04-25T05:30:00.000Z",
        "end": "2023-04-25T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },

      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-04-28T05:30:00.000Z",
        "end": "2023-04-28T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-04-29T05:30:00.000Z",
        "end": "2023-04-29T06:00:00.000Z",
        "model": "hon",
        "person": "Dennis Ray",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
    
    ]
    },
    {
      name: "Gilbert Holland",
      performance: 0.81,
      address: "3807 rue Ontario Ouest, Quebec",
      designation: "Junior Technician",
      totalJobs: 209,
      best: "Ford GT",
      score: 88,
      desc: "Eager to learn but still needs experience!",
      pieValue: [
        ["Task", "Hours per Day"],
        ["Ford", 4],
        ["Nissan", 5],
        ["Hyundai", 11],
        ["Honda", 15],
        ["Toyota", 17],
      ],
      pic: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
      boxPlotValue: [
        { x: "Ford", y: [53, 75, 79, 86, 91] },
        { x: "Nissan", y: [64, 76, 79, 75, 98] },
        { x: "Hyundai", y: [41, 49, 55, 61, 69] },
        { x: "Honda", y: [49, 56, 65, 75, 81] },
        { x: "Toyota", y: [39, 41, 45, 49, 54] },
      ],
      id: "index3",
      calendar:[
        {
            "_id": "63db6f01bdb9fbea8ad6211c",
            "title": "Ford GT",
            "start": "2023-02-01T03:00:00.000Z",
            "end": "2023-02-01T03:55:00.000Z",
            "model": "for",
            "person": "Gilbert Holland",
            "__v": 0,
            "id": "63db6f01bdb9fbea8ad6211c"
        },
        {
            "_id": "63dd5642cae0ebbc1270e96f",
            "title": "Toyota RAV4",
            "start": "2023-02-04T05:30:00.000Z",
            "end": "2023-02-04T06:00:00.000Z",
            "model": "hon",
            "person": "Gilbert Holland",
            "__v": 0,
            "id": "63dd5642cae0ebbc1270e96f"
        },
        {
          "_id": "63dd5642cae0ebbc1270e96f",
          "title": "Honda CR-V",
          "start": "2023-02-05T05:30:00.000Z",
          "end": "2023-02-05T06:00:00.000Z",
          "model": "hon",
          "person": "Gilbert Holland",
          "__v": 0,
          "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-02-09T05:30:00.000Z",
        "end": "2023-02-09T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-10T05:30:00.000Z",
        "end": "2023-02-10T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-12T05:30:00.000Z",
        "end": "2023-02-12T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-02-16T05:30:00.000Z",
        "end": "2023-02-16T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-02-18T05:30:00.000Z",
        "end": "2023-02-18T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-02-19T05:30:00.000Z",
        "end": "2023-02-19T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-02-25T05:30:00.000Z",
        "end": "2023-02-25T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-02-29T05:30:00.000Z",
        "end": "2023-02-29T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-01T05:30:00.000Z",
        "end": "2023-03-01T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-03T05:30:00.000Z",
        "end": "2023-03-03T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-05T05:30:00.000Z",
        "end": "2023-03-05T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-03-08T05:30:00.000Z",
        "end": "2023-03-08T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-09T05:30:00.000Z",
        "end": "2023-03-09T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-03-10T05:30:00.000Z",
        "end": "2023-03-10T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-03-11T05:30:00.000Z",
        "end": "2023-03-11T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-03-12T05:30:00.000Z",
        "end": "2023-03-12T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Camry",
        "start": "2023-03-15T05:30:00.000Z",
        "end": "2023-03-15T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-03-17T05:30:00.000Z",
        "end": "2023-03-17T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-03-20T05:30:00.000Z",
        "end": "2023-03-20T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-03-23T05:30:00.000Z",
        "end": "2023-03-23T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-03-25T05:30:00.000Z",
        "end": "2023-03-25T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-03-28T05:30:00.000Z",
        "end": "2023-03-28T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-03-30T05:30:00.000Z",
        "end": "2023-03-30T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X5",
        "start": "2023-04-01T05:30:00.000Z",
        "end": "2023-04-01T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-04-03T05:30:00.000Z",
        "end": "2023-04-03T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Lexus RX",
        "start": "2023-04-05T05:30:00.000Z",
        "end": "2023-04-05T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-06T05:30:00.000Z",
        "end": "2023-04-06T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-07T05:30:00.000Z",
        "end": "2023-04-07T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-04-10T05:30:00.000Z",
        "end": "2023-04-10T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "BMW X3",
        "start": "2023-04-12T05:30:00.000Z",
        "end": "2023-04-12T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Nissan Altima",
        "start": "2023-04-14T05:30:00.000Z",
        "end": "2023-04-14T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota RAV4",
        "start": "2023-04-06T05:30:00.000Z",
        "end": "2023-04-06T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Hyundai Santa Fe",
        "start": "2023-04-16T05:30:00.000Z",
        "end": "2023-04-16T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-04-17T05:30:00.000Z",
        "end": "2023-04-17T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Subaru Forester",
        "start": "2023-04-18T05:30:00.000Z",
        "end": "2023-04-18T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Toyota Tacoma",
        "start": "2023-04-19T05:30:00.000Z",
        "end": "2023-04-19T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Audi Q5",
        "start": "2023-04-21T05:30:00.000Z",
        "end": "2023-04-21T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Ford F-150",
        "start": "2023-04-22T05:30:00.000Z",
        "end": "2023-04-22T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Kia Sportage",
        "start": "2023-04-23T05:30:00.000Z",
        "end": "2023-04-23T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },

      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Mazda CX-5",
        "start": "2023-04-25T05:30:00.000Z",
        "end": "2023-04-25T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
      {
        "_id": "63dd5642cae0ebbc1270e96f",
        "title": "Honda CR-V",
        "start": "2023-04-26T05:30:00.000Z",
        "end": "2023-04-26T06:00:00.000Z",
        "model": "hon",
        "person": "Gilbert Holland",
        "__v": 0,
        "id": "63dd5642cae0ebbc1270e96f"
      },
 
    
    ]
    },
  ];
  const [Index, setIndex] = useState<number>(0);
  function showInfo() {
    (document.getElementById("dropdown") as HTMLInputElement).value;
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdown") as HTMLInputElement).value
    );
    setIndex(value);
  }
  return (
    <>
      <Head>
        <title>Dashboard | Worker Performance Metrics</title>
      </Head>
      <PageTitle title={"Worker Performance Metrics"} subtitle={""} />
      <Container>
        <Block paddingBottom="20px">
          <div className="flex m-4 font-display text-center justify-center space-x-2">
            <label className="m-2 text-xl font-semibold text-customDarkBlue">
              Select Worker
            </label>
            <div className="relative w-full lg:max-w-sm">
              <select
                id="dropdown"
                onChange={showInfo}
                className="w-full p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                {jsonData?.map((val, ind) => {
                  return (
                    <option value={ind} key={ind} className="font-bold">
                      {val.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <DropdownComponent
              args={["Sam Davidson", "Dennis Ray", "Gilbert Holland"]}
            /> */}
          </div>
        </Block>
        <Block paddingBottom="20px">
          <div className="pt-6 h-full flex flex-row w-full bg-white justify-start items-start border-white-200 rounded-lg">
            <InformationBox args={jsonData[Index]} />
            <div className="w-11/12">
              <ApexCharts args={jsonData[Index]} />
            </div>
            
          </div>
        </Block>
        {/* <Block paddingBottom="20px">
          <Pie args={jsonData[Index]} />
        </Block> */}
        <Block paddingBottom="20px">
          
        </Block>
        <div>
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="font-black text-4xl">Next 3 months Schedule </h1>
            <span className="font-black text-xl">No. of Booked Jobs: {jsonData[Index]['calendar'].length}</span>
          </div>
          <div className="flex flex-row justify-evenly items-start space-x-10 mb-10">
            <div className="w-1/3 ml-10 !h-[400px]">
              <CalendarApp args={new Date("2023-02-01T00:00:00Z")} calendarData={jsonData[Index]['calendar']} className="!h-[400px]"/>
            </div>
            <div className="w-1/3 !h-[400px]">
              <CalendarApp args={new Date("2023-03-01T00:00:00Z")} calendarData={jsonData[Index]['calendar']} className="!h-[400px]"/>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-1/3 !h-[400px]">
              <CalendarApp args={new Date("2023-04-01T00:00:00Z")} calendarData={jsonData[Index]['calendar']} className="!h-[400px]"/>
            </div>

          </div>
        </div>
        {/* <Block paddingBottom="20px">
          <LineChart args={jsonData[Index]} />
        </Block> */}
        {/* <Grid gridColumns={12} gridGutters={16} gridMargins={0}>
          <Cell span={12}>
            <div className="pt-6 w-full bg-white justify-center items-center border-white-200 rounded-lg mx-auto">
              <InformationBox args={jsonData[Index]} />
            </div>
          </Cell>
        </Grid> */}
      </Container>
    </>
  );
};

export default index;
