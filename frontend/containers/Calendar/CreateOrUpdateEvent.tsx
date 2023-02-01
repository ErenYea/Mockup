import React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Datepicker } from "baseui/datepicker";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
export default ({ onClose, isOpen, onSubmit, event }: any) => {
  const [title, setTitle] = React.useState(event.title ? event.title : "");
  const [desc, setDescription] = React.useState(event.desc ? event.desc : "");
  const [slots, setSlots] = React.useState<any>([event.start, event.end]);
  const [starttime, setStartTime] = React.useState<any>(
    event.starttime ? event.starttime : ""
  );
  const [endtime, setEndTime] = React.useState<any>(
    event.endtime ? event.endtime : ""
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit({ ...event, title, desc, slots, starttime, endtime });
  }
  return (
    <Modal
      onClose={onClose}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Root: {
          style: {
            zIndex: 99999,
          },
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          <FormControl label="Set Title">
            <Input
              id="input-id"
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
              required
            />
          </FormControl>
          <FormControl label="Set Description">
            <Textarea
              id="textarea-id"
              value={desc}
              onChange={(event) => setDescription(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl label="Set Date">
            <Datepicker
              range
              value={slots}
              onChange={({ date }) => setSlots(date)}
              placeholder="YYYY/MM/DD – YYYY/MM/DD"
            />
          </FormControl>
          <FormControl label="Start Time">
            <Input
              id="starttime"
              value={starttime}
              onChange={(event) => setStartTime(event.currentTarget.value)}
              placeholder={"00:00"}
              required
            />
          </FormControl>
          <FormControl label="End Time">
            <Input
              id="endtime"
              value={endtime}
              onChange={(event) => setEndTime(event.currentTarget.value)}
              placeholder={"00:00"}
              required
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ModalButton type="button" onClick={onClose}>
            Cancel
          </ModalButton>
          <ModalButton>Okay</ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
