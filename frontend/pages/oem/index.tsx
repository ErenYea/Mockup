import React, { useState } from "react";
import CreateOrUpdateEvent from "./CreateOrUpdateEvent";
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
type Props = {};

const index = (props: Props) => {
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
  return (
    <Container>
      <Block className={"flex items-end justify-end"}>
        <ModalButton onClick={handleClick} className="right-0">
          Order Job
        </ModalButton>
      </Block>
      <Block
        marginTop={"20px"}
        className="border border-gray-700 h-full rounded bg-gray-200 "
      >
        <div className="flex flex-col p-2 min-h-[400px]">
          <div className="text-bold text-xl border p-2 text-white bg-slate-800 w-fit">
            Active Jobs
          </div>
          {works?.map((i) => (
            <div
              className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2"
              key={i.workshop.id}
            >
              <div className="text-base border-gray-700 border p-2 rounded bg-white">
                This is {i.workshop.name}
              </div>
              <div className="text-base p-2 border border-gray-700 rounded bg-white">
                This is the job of {i.car} {i.model} cars
              </div>
            </div>
          ))}
          {/* <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2">
            <div className="text-base border-gray-700 border p-2 rounded bg-white">
              This is workshop 1
            </div>
            <div className="text-base p-2 border border-gray-700 rounded bg-white">
              This is the job of 100 cars
            </div>
          </div>
          <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2">
            <div className="text-base border-gray-700 border p-2 rounded bg-white">
              This is workshop 1
            </div>
            <div className="text-base p-2 border border-gray-700 rounded bg-white">
              This is the job of 100 cars
            </div>
          </div>
          <div className="flex justify-evenly w-full border border-gray-800 bg-slate-400 rounded-lg mt-2">
            <div className="text-base border-gray-700 border p-2 rounded bg-white">
              This is workshop 1
            </div>
            <div className="text-base p-2 border border-gray-700 rounded bg-white">
              This is the job of 100 cars
            </div>
          </div> */}
        </div>
      </Block>
      {event && (
        <CreateOrUpdateEvent
          onClose={close}
          isOpen={isOpen}
          event={event}
          onSubmit={(value: any) => onSubmit(value)}
        />
      )}
    </Container>
  );
};

export default index;
