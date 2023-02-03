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
import { data } from "containers/Calendar/oem/data";

export default ({ onClose, isOpen, onSubmit }: any) => {
  const [title, setTitle] = React.useState("");
  const [model, setModel] = React.useState("");
  // const [person, setPerson] = React.useState(event.person ? event.person : "");
  // const [slots, setSlots] = React.useState<any>([event.start, event.end]);
  const [selectedData, setSelectedData] = React.useState<any>([]);
  const [personSelect, setPersonSelect] = React.useState<any>("");

  const [modalModal, setModalModal] = React.useState<any>([
    "Ford Motors",
    "Nissan",
    "Hyundai",
    "Honda",
    "Toyota",
  ]);
  const getthecar = (value: any) => {
    return modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() == value
    )[0];
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    var workshop = selectedData.filter((item) => item.id == personSelect)[0];
    var carname = modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() == model
    )[0];
    onSubmit({ car: parseInt(title), model: carname, workshop });
  }
  // const
  const modelHandler = () => {
    const value = (document.getElementById("models") as HTMLInputElement).value;
    console.log(value);
    const filteredData = data;
    filteredData.sort(
      (a, b) => b.modaldata[value].performance - a.modaldata.toy.performance
    );
    setSelectedData(filteredData);

    setModel(value);
  };
  const personHandler = (e) => {
    // if (e.target.querySelector("#name")) {
    //   console.log(e.target.querySelector("#name").textContent);
    // } else if (e.target.parentElement.querySelector("#name")) {
    //   console.log(e.target.parentElement.querySelector("#name").textContent);
    // } else {
    //   console.log(
    //     e.target.parentElement.parentElement.querySelector("#name").textContent
    //   );
    // }
    const key = e.target.getAttribute("data-key");
    console.log("key", key);
    // console.log(document.querySelector(`main[data-key='${key}']`));
    if (document.querySelector(`main[data-key='${key}']`)) {
      document
        .querySelector(`main[data-key='${key}']`)
        .classList.add("bg-gray-900");
    }
    setPersonSelect(key);
    console.log(e);
    // .target.parentNode.querySelector("div")
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
        <ModalBody>
          <FormControl label="Set Number of Cars">
            <Input
              id="input-id"
              value={title}
              type="number"
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
                <option selected={model != "" ? false : true} disabled>
                  Choose a Model
                </option>
                {modalModal.map((item, index) => (
                  <option
                    key={index}
                    value={item.slice(0, 3).toLowerCase()}
                    selected={
                      model != ""
                        ? model == item.slice(0, 3).toLowerCase()
                          ? true
                          : false
                        : false
                    }
                  >
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

          <FormControl label="Select Workshop">
            <>
              <div className="flex border rounded justify-center border-gray-800 h-[300px] w-full bg-gray-600">
                {model == ""
                  ? ""
                  : selectedData?.map((i, ind) => (
                      <main
                        key={ind}
                        onClick={(e) => personHandler(e)}
                        data-key={i.id}
                        className={
                          "flex w-[130px] flex-col border border-gray-900 rounded items-center hover:bg-gray-900  hover:cursor-pointer active:bg-gray-900" +
                          (personSelect != ""
                            ? personSelect == i.id
                              ? "bg-gray-900"
                              : ""
                            : "")
                        }
                      >
                        {/* <img
                          data-key={i.id}
                          src={i.img}
                          alt=""
                          className="w-[130px] h-[100px] rounded"
                        /> */}
                        <div
                          data-key={i.id}
                          id="name"
                          className=" text-purple-600 text-bold text-lg"
                        >
                          {i.name}
                        </div>
                        <div
                          className=" text-red-600 text-base h-[24px]"
                          ddata-key={i.id}
                        >
                          {ind == 0 ? "Recomended*" : ""}
                        </div>
                        <div
                          className="flex flex-col items-center border-gray-400"
                          data-key={i.id}
                        >
                          <div
                            className="text-white text-[14px] text-center"
                            data-key={i.id}
                          >
                            Performance:{" "}
                            <span
                              className=" text-yellow-300 text-center w-full"
                              data-key={i.id}
                            >
                              {i.modaldata[model].performance}/10
                            </span>
                          </div>
                          <div
                            className="text-white text-[14px] text-center"
                            data-key={i.id}
                          >
                            Material Present:{" "}
                            <span
                              className=" text-yellow-300 text-center w-full"
                              data-key={i.id}
                            >
                              {i.modaldata[model].material ? "Yes" : "No"}
                            </span>
                          </div>
                          <div
                            className="text-white text-[14px] text-center"
                            data-key={i.id}
                          >
                            Workload:{" "}
                            <span
                              className=" text-yellow-300 text-center w-full"
                              data-key={i.id}
                            >
                              {i.workload} cars this week (
                              {ind == 0
                                ? getthecar(model) + " only"
                                : "except " + getthecar(model)}
                              )
                            </span>
                          </div>
                        </div>
                      </main>
                    ))}
              </div>
              {/* <select
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
              </select> */}
            </>
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
