import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import PageTitle from "components/UiElements/PageTitle/PageTitle";
import ApexChart from "components/UiElements/ApexChart/ApexChart";
import Head from "next/head";
import LineBarv2 from "./lineGraphv2";
import CalendarApp from "../../containers/Calendar/oem/newcalendar/index";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import Container from "components/UiElements/Container/Container";
import { Block } from "baseui/block";
import LineBar from "./lineGraph";

type Props = {};

const index = (props) => {
  const [event, setEvent] = useState(false);
  const [works, setWorks] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  function onSubmit(value: any) {
    setIsOpen(false);
    console.log(value);
    setWorks([...works, value]);
  }
  const handleClick = () => {
    console.log("hamza");
    setEvent(true);
    setIsOpen(true);
  };
  function close() {
    setIsOpen(false);
    setEvent(null);
  }

  var workshopData=[
    {name:'Workshop 1',
     load:[24, 28, 32, 35, 28, 29, 36, 39, 42, 11, 17, 23, 27],
    },
    {name:'Workshop 2',
    load:[17, 25, 16, 17, 19, 25, 32, 15, 31, 42, 17, 24, 20],
    },
    {name:'Workshop 3',
    load:[28, 18, 22, 25, 18, 19, 26, 29, 32, 15, 17, 24, 25],
    },
  ];
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
      calendar: [
        {
          _id: "63db6f01bdb9fbea8ad6211c",
          title: "Ford GT",
          start: "2023-02-01T03:00:00.000Z",
          end: "2023-02-01T03:55:00.000Z",
          model: "for",
          person: "Sean Davidson",
          __v: 0,
          id: "63db6f01bdb9fbea8ad6211c",
          color: "#42dd60",
        },
        {
          _id: "63dbd51e99035c5d474c48e1",
          title: "Ford F-150",
          start: "2023-02-02T03:00:00.000Z",
          end: "2023-02-02T03:30:00.000Z",
          model: "nis",
          person: "Sean Davidson",
          __v: 0,
          id: "63dbd51e99035c5d474c48e1",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-02-03T05:30:00.000Z",
          end: "2023-02-03T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-02-06T05:30:00.000Z",
          end: "2023-02-06T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-02-09T05:30:00.000Z",
          end: "2023-02-09T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-10T05:30:00.000Z",
          end: "2023-02-10T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-13T05:30:00.000Z",
          end: "2023-02-13T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-02-16T05:30:00.000Z",
          end: "2023-02-16T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-17T05:30:00.000Z",
          end: "2023-02-17T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-02-20T05:30:00.000Z",
          end: "2023-02-20T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-24T05:30:00.000Z",
          end: "2023-02-24T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-02-29T05:30:00.000Z",
          end: "2023-02-29T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-01T05:30:00.000Z",
          end: "2023-03-01T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-06T05:30:00.000Z",
          end: "2023-03-06T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-03-08T05:30:00.000Z",
          end: "2023-03-08T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-09T05:30:00.000Z",
          end: "2023-03-09T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-03-10T05:30:00.000Z",
          end: "2023-03-10T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-03-10T05:30:00.000Z",
          end: "2023-03-10T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-13T05:30:00.000Z",
          end: "2023-03-13T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-15T05:30:00.000Z",
          end: "2023-03-15T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-17T05:30:00.000Z",
          end: "2023-03-17T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-20T05:30:00.000Z",
          end: "2023-03-20T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-03-23T05:30:00.000Z",
          end: "2023-03-23T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-03-24T05:30:00.000Z",
          end: "2023-03-24T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-03-28T05:30:00.000Z",
          end: "2023-03-28T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-30T05:30:00.000Z",
          end: "2023-03-30T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-04-03T05:30:00.000Z",
          end: "2023-04-03T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-04-03T05:30:00.000Z",
          end: "2023-04-03T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Lexus RX",
          start: "2023-04-05T05:30:00.000Z",
          end: "2023-04-05T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-06T05:30:00.000Z",
          end: "2023-04-06T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-07T05:30:00.000Z",
          end: "2023-04-07T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-04-10T05:30:00.000Z",
          end: "2023-04-10T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X3",
          start: "2023-04-12T05:30:00.000Z",
          end: "2023-04-12T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-04-14T05:30:00.000Z",
          end: "2023-04-14T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-04-06T05:30:00.000Z",
          end: "2023-04-06T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-17T05:30:00.000Z",
          end: "2023-04-17T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-04-17T05:30:00.000Z",
          end: "2023-04-17T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-18T05:30:00.000Z",
          end: "2023-04-18T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-04-19T05:30:00.000Z",
          end: "2023-04-19T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-04-21T05:30:00.000Z",
          end: "2023-04-21T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Ford F-150",
        //   start: "2023-04-22T05:30:00.000Z",
        //   end: "2023-04-22T06:00:00.000Z",
        //   model: "hon",
        //   person: "Sean Davidson",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-04-24T05:30:00.000Z",
          end: "2023-04-24T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-24T05:30:00.000Z",
          end: "2023-04-24T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-04-25T05:30:00.000Z",
          end: "2023-04-25T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-04-26T05:30:00.000Z",
          end: "2023-04-26T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-04-28T05:30:00.000Z",
          end: "2023-04-28T06:00:00.000Z",
          model: "hon",
          person: "Sean Davidson",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Kia Sportage",
        //   start: "2023-04-29T05:30:00.000Z",
        //   end: "2023-04-29T06:00:00.000Z",
        //   model: "hon",
        //   person: "Sean Davidson",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        // },
      ],
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

      calendar: [
        {
          _id: "63db6f01bdb9fbea8ad6211c",
          title: "Ford GT",
          start: "2023-02-01T03:00:00.000Z",
          end: "2023-02-01T03:55:00.000Z",
          model: "for",
          person: "Dennis Ray",
          __v: 0,
          id: "63db6f01bdb9fbea8ad6211c",
          color: "#f408a4",
        },
        {
          _id: "63dbd51e99035c5d474c48e1",
          title: "Ford F-150",
          start: "2023-02-02T03:00:00.000Z",
          end: "2023-02-02T03:30:00.000Z",
          model: "nis",
          person: "Dennis Ray",
          __v: 0,
          id: "63dbd51e99035c5d474c48e1",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-02-06T05:30:00.000Z",
          end: "2023-02-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-02-07T05:30:00.000Z",
          end: "2023-02-07T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-02-09T05:30:00.000Z",
          end: "2023-02-09T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-10T05:30:00.000Z",
          end: "2023-02-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-13T05:30:00.000Z",
          end: "2023-02-13T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-02-16T05:30:00.000Z",
          end: "2023-02-16T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-21T05:30:00.000Z",
          end: "2023-02-21T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-02-20T05:30:00.000Z",
          end: "2023-02-20T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-27T05:30:00.000Z",
          end: "2023-02-27T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-02-29T05:30:00.000Z",
          end: "2023-02-29T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-01T05:30:00.000Z",
          end: "2023-03-01T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-06T05:30:00.000Z",
          end: "2023-03-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-03-08T05:30:00.000Z",
          end: "2023-03-08T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-09T05:30:00.000Z",
          end: "2023-03-09T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-03-10T05:30:00.000Z",
          end: "2023-03-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-03-13T05:30:00.000Z",
          end: "2023-03-13T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-14T05:30:00.000Z",
          end: "2023-03-14T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-15T05:30:00.000Z",
          end: "2023-03-15T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-17T05:30:00.000Z",
          end: "2023-03-17T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-20T05:30:00.000Z",
          end: "2023-03-20T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-03-23T05:30:00.000Z",
          end: "2023-03-23T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "BMW X5",
        //   start: "2023-03-25T05:30:00.000Z",
        //   end: "2023-03-25T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#f408a4",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-03-28T05:30:00.000Z",
          end: "2023-03-28T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-30T05:30:00.000Z",
          end: "2023-03-30T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "BMW X5",
        //   start: "2023-04-01T05:30:00.000Z",
        //   end: "2023-04-01T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#f408a4",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Lexus RX",
          start: "2023-04-05T05:30:00.000Z",
          end: "2023-04-05T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-06T05:30:00.000Z",
          end: "2023-04-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-07T05:30:00.000Z",
          end: "2023-04-07T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-04-10T05:30:00.000Z",
          end: "2023-04-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-04-14T05:30:00.000Z",
          end: "2023-04-14T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Hyundai Santa Fe",
        //   start: "2023-04-16T05:30:00.000Z",
        //   end: "2023-04-16T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#42dd60",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-18T05:30:00.000Z",
          end: "2023-04-18T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-04-19T05:30:00.000Z",
          end: "2023-04-19T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-04-21T05:30:00.000Z",
          end: "2023-04-21T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Kia Sportage",
        //   start: "2023-04-23T05:30:00.000Z",
        //   end: "2023-04-23T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#42dd60",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-24T05:30:00.000Z",
          end: "2023-04-24T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-04-25T05:30:00.000Z",
          end: "2023-04-25T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-04-28T05:30:00.000Z",
          end: "2023-04-28T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-04-28T05:30:00.000Z",
          end: "2023-04-28T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
      ],
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
      calendar: [
        {
          _id: "63db6f01bdb9fbea8ad6211c",
          title: "Ford GT",
          start: "2023-02-01T03:00:00.000Z",
          end: "2023-02-01T03:55:00.000Z",
          model: "for",
          person: "Dennis Ray",
          __v: 0,
          id: "63db6f01bdb9fbea8ad6211c",
          color: "#f408a4",
        },
        {
          _id: "63dbd51e99035c5d474c48e1",
          title: "Ford F-150",
          start: "2023-02-02T03:00:00.000Z",
          end: "2023-02-02T03:30:00.000Z",
          model: "nis",
          person: "Dennis Ray",
          __v: 0,
          id: "63dbd51e99035c5d474c48e1",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-02-06T05:30:00.000Z",
          end: "2023-02-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-02-07T05:30:00.000Z",
          end: "2023-02-07T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-02-09T05:30:00.000Z",
          end: "2023-02-09T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-10T05:30:00.000Z",
          end: "2023-02-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-13T05:30:00.000Z",
          end: "2023-02-13T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-02-16T05:30:00.000Z",
          end: "2023-02-16T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-02-20T05:30:00.000Z",
          end: "2023-02-20T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-02-21T05:30:00.000Z",
          end: "2023-02-21T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-02-27T05:30:00.000Z",
          end: "2023-02-27T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-02-29T05:30:00.000Z",
          end: "2023-02-29T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-01T05:30:00.000Z",
          end: "2023-03-01T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-03T05:30:00.000Z",
          end: "2023-03-03T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-06T05:30:00.000Z",
          end: "2023-03-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-03-08T05:30:00.000Z",
          end: "2023-03-08T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-09T05:30:00.000Z",
          end: "2023-03-09T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-03-10T05:30:00.000Z",
          end: "2023-03-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-03-13T05:30:00.000Z",
          end: "2023-03-13T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-03-14T05:30:00.000Z",
          end: "2023-03-14T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Camry",
          start: "2023-03-15T05:30:00.000Z",
          end: "2023-03-15T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Ford F-150",
          start: "2023-03-17T05:30:00.000Z",
          end: "2023-03-17T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-03-20T05:30:00.000Z",
          end: "2023-03-20T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-03-23T05:30:00.000Z",
          end: "2023-03-23T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-03-27T05:30:00.000Z",
          end: "2023-03-27T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-03-28T05:30:00.000Z",
          end: "2023-03-28T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Honda CR-V",
          start: "2023-03-30T05:30:00.000Z",
          end: "2023-03-30T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "BMW X5",
          start: "2023-04-03T05:30:00.000Z",
          end: "2023-04-03T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Lexus RX",
          start: "2023-04-05T05:30:00.000Z",
          end: "2023-04-05T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-06T05:30:00.000Z",
          end: "2023-04-06T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-07T05:30:00.000Z",
          end: "2023-04-07T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Audi Q5",
          start: "2023-04-10T05:30:00.000Z",
          end: "2023-04-10T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Nissan Altima",
          start: "2023-04-14T05:30:00.000Z",
          end: "2023-04-14T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-17T05:30:00.000Z",
          end: "2023-04-17T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#42dd60",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Subaru Forester",
          start: "2023-04-18T05:30:00.000Z",
          end: "2023-04-18T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota Tacoma",
          start: "2023-04-19T05:30:00.000Z",
          end: "2023-04-19T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Ford F-150",
        //   start: "2023-04-21T05:30:00.000Z",
        //   end: "2023-04-21T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#f408a4",
        // },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Kia Sportage",
          start: "2023-04-21T05:30:00.000Z",
          end: "2023-04-21T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Hyundai Santa Fe",
          start: "2023-04-24T05:30:00.000Z",
          end: "2023-04-24T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Mazda CX-5",
          start: "2023-04-25T05:30:00.000Z",
          end: "2023-04-25T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        {
          _id: "63dd5642cae0ebbc1270e96f",
          title: "Toyota RAV4",
          start: "2023-04-28T05:30:00.000Z",
          end: "2023-04-28T06:00:00.000Z",
          model: "hon",
          person: "Dennis Ray",
          __v: 0,
          id: "63dd5642cae0ebbc1270e96f",
          color: "#f408a4",
        },
        // {
        //   _id: "63dd5642cae0ebbc1270e96f",
        //   title: "Kia Sportage",
        //   start: "2023-04-28T05:30:00.000Z",
        //   end: "2023-04-28T06:00:00.000Z",
        //   model: "hon",
        //   person: "Dennis Ray",
        //   __v: 0,
        //   id: "63dd5642cae0ebbc1270e96f",
        //   color: "#42dd60",
        // },
      ],
    },
  ];
  var data = [
    {
      name: "Ford",
      vehiclesSold: [
        [24, 28, 32, 35, 28, 29, 36, 39, 42, 11, 17, 23, 27],
        [34, 38, 23, 12, 34, 56, 34, 23, 36, 38, 17, 27, 43],
        [10, 13, 27, 12, 32, 22, 32, 24, 11, 44, 14, 23, 29],
        [11, 26, 16, 23, 29, 31, 33, 26, 28, 29, 29, 24, 21],
        [16, 19, 23, 32, 26, 27, 28, 32, 33, 16, 19, 21, 27]
      ],
      sunroof: [
        [10, 12, 15, 17, 19, 10, 9, 15, 12, 5, 10, 15, 20],
        [12, 9, 5, 10, 9, 10, 10, 15, 8, 6, 12, 5, 8],
        [9, 5, 5, 4, 10, 15,12, 11, 15, 5, 12, 15, 10],
        [5, 10, 10, 15, 10, 15, 19, 10, 10, 15, 5, 5, 10],
        [5, 5, 16, 11, 9, 15, 19, 10, 5, 10, 15, 16, 17],
    ],
      oemCapacity:[ 
        [30, 43, 45, 35, 35, 35, 35, 35, 29, 35, 33, 44, 27],
        [29, 44, 28, 28, 25, 28, 29, 44, 34, 26, 45, 45, 45],
        [43, 34, 43, 32, 30, 30, 30, 30, 28, 27, 43, 44, 29],
        [27, 44, 25, 28, 27, 34, 34, 43, 33, 26, 29, 44, 44],
        [44, 31, 29, 32, 32, 32, 32, 32, 27, 44, 34, 30, 30]
      ],
      models:[
        'Ford F-150',
        'Ford Bronco Sport',
        'Ford Edge',
        'Ford F-250',
        'Ford Taurus X',
      ]
    },
    {
      name: "Nissan",
      vehiclesSold: [
        [14, 18, 22, 25, 18, 19, 26, 29, 32, 11, 17, 13, 25],
        [22, 32,22 , 24, 35, 36, 39, 33, 35, 40, 27, 37, 45],
        [15, 15, 22, 22, 35, 25, 33, 25, 14, 46, 23, 33, 39],
        [23, 26, 14, 25, 32, 30, 40, 25, 38, 49, 39, 25, 30],
        [26, 29, 33, 35, 30, 25, 25, 35, 33, 19, 23, 44, 27]
      ],
      sunroof: [
        [15, 11, 12, 17, 19, 15, 19, 11, 9, 15, 12, 11, 13],
        [13, 14, 15, 10, 9, 10, 12, 13, 8, 6, 4, 3, 9],
        [10, 15, 15, 4, 8, 7,14, 13, 13, 15, 11, 14, 14],
        [15, 11, 10, 15, 10, 15, 9, 10, 10, 15, 7, 5, 9],
        [5, 15, 16, 11, 9, 15, 19, 4, 5, 10, 15, 16, 7],
    ],
    oemCapacity:[ 
      [30, 43, 33, 44, 44, 26, 45, 43, 29, 45, 33, 45, 44],
      [33, 35, 35, 35, 35, 35, 29, 35, 44, 35, 35, 35, 43],
      [43, 27, 43, 27, 27, 33, 44, 43, 27, 43, 34, 28, 44],
      [27, 26, 45, 26, 44, 44, 28, 45, 29, 45, 34, 43, 27],
      [43, 44, 29, 27, 28, 28, 43, 33, 33, 26, 44, 43, 34]
    ],
      models:[
        'Nissan 350Z',
        'Nissan GT-R',
        'Nissan Atima',
        'Nissan NV200',
        'Nissan Sentra',
      ]
    },
    {
      name: "Hyundai",
      vehiclesSold: [
        [32, 33, 36, 31, 19, 21, 31, 34, 36, 33, 38, 23, 36],
        [17, 18, 15, 19, 22, 34, 32, 38, 23, 32, 32, 17, 25],
        [26, 39, 19, 34, 38, 18, 19, 23, 39, 22, 23, 32, 17],
        [34, 23, 26, 39, 34, 19, 33, 17, 25, 19, 11, 25, 18],
        [17, 24, 17, 18, 19, 25, 23, 16, 19, 15, 34, 37, 18]
      ],
      sunroof: [
        [18, 19, 19, 5, 20, 14, 9, 5, 17, 19, 9, 5, 11],
        [19, 17, 16, 15, 9, 19, 20, 20, 15, 20, 17, 18, 8],
        [17, 9, 5, 20, 18, 17, 12, 12, 19, 9, 11, 5, 18],
        [15, 11, 20, 8, 8, 19, 20, 11, 11, 19, 11, 16, 15],
        [17, 5, 8, 11, 14, 5, 16, 20, 8, 8, 15, 8, 18]
    ],
    oemCapacity:[ 
      [44, 26, 45, 45, 45, 43, 30, 29, 43, 27, 30, 33, 29],
      [27, 35, 35, 35, 35, 35, 35, 35, 29, 26, 35, 35, 44],
      [29, 44, 43, 27, 43, 43, 33, 33, 33, 29, 44, 27, 45],
      [29, 43, 45, 43, 29, 45, 27, 33, 33, 33, 33, 27, 43],
      [45, 33, 33, 33, 43, 27, 44, 44, 33, 33, 27, 33, 43]
    ],
      models:[
        'Hyundai Santa Fe',
        'Hyundai Accent',
        'Hyundai Elantra GT',
        'Hyundai Kona N',
        'Hyundai Ioniq',
      ],
    },
    {
      name: "Honda",
      vehiclesSold: [
        [37, 34, 31, 25, 26, 37, 27, 38, 34, 31, 31, 38, 36],
        [24, 25, 23, 19, 32, 32, 34, 19, 22, 22, 25, 26, 38],
        [26, 33, 26, 18, 24, 32, 28, 39, 17, 32, 31, 28, 26],
        [31, 18, 11, 27, 21, 34, 37, 31, 18, 26, 17, 11, 39],
        [17, 21, 15, 19, 32, 17, 21, 19, 25, 11, 36, 21, 33]
      ],
      sunroof: [
        [12, 20, 8, 12, 19, 17, 14, 8, 19, 14, 5, 19, 17],
        [11, 8, 19, 20, 11, 12, 14, 19, 14, 14, 14, 19, 5],
        [20, 5, 12, 8, 9, 5, 19, 8, 9, 5, 20, 15, 11],
        [5, 19, 8, 20, 11, 8, 15, 5, 8, 19, 20, 12, 12],
        [18, 12, 11, 9, 14, 14, 14, 17, 19, 19, 8, 20, 5]
    ],
    oemCapacity:[ 
      [30, 43, 33, 33, 30, 30, 30, 30, 45, 45, 27, 29, 44],
      [30, 45, 45, 45, 33, 33, 43, 43, 33, 33, 43, 33, 33],
      [33, 44, 33, 33, 33, 33, 33, 30, 30, 30, 30, 45, 45],
      [44, 45, 43, 45, 45, 43, 33, 33, 33, 45, 45, 43, 45],
      [43, 33, 45, 45, 45, 45, 45, 45, 45, 33, 45, 45, 45]
    ],
      models:[
        'Honda CR-V',
        'Honda HR-V',
        'Honda Accord Sedan',
        'Honda Insight',
        'Honda Odyssey',
      ]
    },
    {
      name: "Toyota",
      vehiclesSold: [
        [17, 22, 28, 29, 21, 32, 33, 38, 31, 23, 29, 36, 23],
        [18, 31, 23, 19, 29, 21, 32, 33, 17, 31, 21, 39, 18],
        [24, 36, 27, 19, 32, 25, 16, 22, 23, 33, 17, 26, 35],
        [23, 22, 26, 27, 37, 38, 36, 21, 16, 17, 21, 28, 37],
        [33, 25, 38, 26, 33, 29, 16, 19, 28, 36, 25, 17, 31]
      ],
      sunroof: [
        [12, 17, 15, 18, 17, 12, 5, 8, 19, 11, 8, 17, 19],
        [5, 20, 9, 5, 15, 17, 9, 19, 18, 14, 14, 19, 11],
        [12, 15, 20, 12, 9, 5, 11, 18, 19, 14, 20, 12, 19],
        [19, 9, 18, 14, 14, 14, 14, 17, 8, 9, 5, 19, 18],
        [20, 8, 12, 15, 20, 8, 19, 18, 8, 17, 11, 9, 19]
    ],
    oemCapacity:[ 
      [40, 26, 43, 42, 33, 39, 31, 34, 25, 28, 43, 29, 44],
      [42, 39, 34, 40, 40, 40, 25, 32, 40, 40, 44, 32, 28],
      [40, 25, 26, 29, 39, 44, 28, 28, 31, 43, 25, 39, 44],
      [29, 42, 44, 40, 40, 43, 40, 40, 33, 40, 44, 32, 28],
      [43, 44, 31, 32, 32, 29, 27, 33, 42, 33, 43, 25, 25]
    ],
      models:[
        'Toyota RAV4',
        'Toyota Camry',
        'Toyota Tacoma',
        'Toyota GR 86',
        'Toyota Prius',
      ],
    },
  ];

    
  const [Index, setIndex] = useState<number>(0);
  const [IndexModel, setIndexModel] = useState<number>(0);
  const [Workshop, setWorkshop] = useState<number>(0);
  useEffect(() => {
    document
      .querySelectorAll(".rbc-btn-group")
      .forEach((p: HTMLElement, i: number, arr: NodeListOf<HTMLElement>) => {
        p.style.display = "None";
      });
    document.getElementsByTagName("nav")[0].style.display = "None";  
    if(sessionStorage.emailType.includes('toyota')){
      setIndex(4);
    }
    else if(sessionStorage.emailType.includes('honda')){
      setIndex(3);
    }
    else if(sessionStorage.emailType.includes('hyundai')){
      setIndex(2);
    }
    else if(sessionStorage.emailType.includes('nissan')){
      setIndex(1);
    }
    else if(sessionStorage.emailType.includes('ford')){
      setIndex(0);
    }
    else{
      setIndex(0)
    }
  }, []);

   function showInfo() {
    // (document.getElementById("dropdown") as HTMLInputElement).value
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdown") as HTMLInputElement).value
    );
    setIndexModel(value);
  }

  function showInfoWorkshop() {
    // (document.getElementById("dropdown") as HTMLInputElement).value
    // var element: HTMLInputElement = document.getElementById("dropdown");
    var value: number = parseInt(
      (document.getElementById("dropdown2") as HTMLInputElement).value
    );
    setWorkshop(value);
  }
  return (
    <>
      <Head>
        <title>Retailer/Dealership</title>
      </Head>
      <PageTitle title={"Retailer/Dealership"} subtitle={""} />
      <div className="w-full flex flex-col items-center justify-center">
        <span className="m-2 text-6xl font-black text-customDarkBlue z-10">
              {data[Index]['name']}
        </span>
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
            Select Model
          </label>
          <select
            id="dropdown"
            onChange={showInfo}
            className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {data[Index]['models'].map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold">
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
          <span className="text-2xl font-black">Forecasted total market demand and OEM Installation Capacity</span>
          <LineBarv2 args={data[Index]["sunroof"][IndexModel]} args2={data[Index]["oemCapacity"][IndexModel]} sunroof={true} />
          <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            {/* <span className="text-sm text-black">Prediction</span> */}
          </div>
        </div>
        <div className="w-full flex-row flex justify-center items-center z-10 mb-10 mt-10">
          <label className="m-2 text-xl font-semibold text-customDarkBlue">
            Select Workshop
          </label>
          <select
            id="dropdown2"
            onChange={showInfoWorkshop}
            className="w-1/4 p-2.5 text-gray-700 font-bold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            {workshopData.map((val, ind) => {
              return (
                <option value={ind} key={ind} className="font-bold">
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-2xl font-black">Workshop Load</span>
          <LineBar args={workshopData[Workshop]['load']} />
          {/* <div className="w-[83%] flex flex-row items-start justify-end -mt-[44px]">
            <span className="text-sm text-black">Prediction</span>
          </div> */}
        </div>

      </div>
      <div>
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="font-black text-4xl">Next 3 months Schedule </h1>
            <span className="font-black text-xl">
              No. of Booked Jobs: {jsonData[Workshop]["calendar"].length}
            </span>
          </div>
          <div className="flex flex-row justify-evenly items-start space-x-10 mb-10">
              <div className="w-1/3 ml-10 !h-[500px]">
                <CalendarApp
                  args={new Date("2023-02-01T00:00:00Z")}
                  calendarData={jsonData[Workshop]["calendar"]}
                  className="!h-[400px]"
                />
              </div>
              <div className="w-1/3 !h-[500px]">
                <CalendarApp
                  args={new Date("2023-03-01T00:00:00Z")}
                  calendarData={jsonData[Workshop]["calendar"]}
                  className="!h-[400px]"
                />
              </div>
            </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-1/3 !h-[500px]">
              <CalendarApp
                args={new Date("2023-04-01T00:00:00Z")}
                calendarData={jsonData[Workshop]["calendar"]}
                className="!h-[400px]"
              />
            </div>
          </div>
      </div>
    </>
  );
};

export default index;
