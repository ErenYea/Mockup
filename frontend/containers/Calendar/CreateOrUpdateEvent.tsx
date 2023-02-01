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
  const [model, setModel] = React.useState("");
  const [person, setPerson] = React.useState(event.person ? event.person : "");
  const [slots, setSlots] = React.useState<any>([event.start, event.end]);
  const [modalModal, setModalModal] = React.useState<any>([
    "Ford Motors",
    "Nissan",
    "Hyundai",
    "Honda",
    "Toyota",
  ]);
  const [starttime, setStartTime] = React.useState<any>(
    event.starttime ? event.starttime : ""
  );
  const [endtime, setEndTime] = React.useState<any>(
    event.endtime ? event.endtime : ""
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit({ ...event, title, model, person, slots, starttime, endtime });
  }

  const modelHandler = () => {
    setModel(document.getElementById("models").value);
  };

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

          <FormControl label="Select Model">
            <>
              <select
                id="models"
                onChange={modelHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>
                  Choose a Model
                </option>
                {modalModal.map((item, index) => (
                  <option key={index} value={item.slice(0, 3)}>
                    {item}
                  </option>
                ))}
                {/* <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option> */}
              </select>
            </>
          </FormControl>

          <FormControl label="Select Person">
            <>
              <select
                disabled={model == ""}
                id="persons"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>
                  Choose a Person
                </option>

                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </>
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
