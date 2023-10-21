import React, { useEffect, useState } from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import { data } from 'containers/Calendar/oem/data';

export default ({ onClose, isOpen, onSubmit, index }) => {
  const [title, setTitle] = React.useState('');
  const [model, setModel] = React.useState('');
  const [selectedData, setSelectedData] = React.useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null); // Track the selected person

  const [date, setDate] = React.useState('');
  const [modalModal, setModalModal] = React.useState([
    'Ford',
    'Nissan',
    'Hyundai',
    'Honda',
    'Toyota',
  ]);

  useEffect(() => {
    console.log(selectedPerson);
  }, [selectedPerson]);

  const getthecar = (value) => {
    return modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() === value
    )[0];
  };

  function handleSubmit(e) {
    e.preventDefault();
    var workshop = selectedData.find((item) => item.id === selectedPerson);
    var carname = modalModal.find(
      (item) => item.slice(0, 3).toLowerCase() === model
    );
    var startdate = new Date(
      parseInt(date.slice(0, 4)),
      parseInt(date.slice(5, 7)),
      parseInt(date.slice(8, 10))
    );
    var enddate;
    var noofcars = parseInt(title);
    if (noofcars <= 4) {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10))
      );
    } else if (noofcars <= 8) {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10)) + 2
      );
    } else {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10)) + 4
      );
    }
    onSubmit({
      car: parseInt(title),
      model: carname,
      workshop: workshop ? workshop : {
        "id": "1",
        "name": "WorkShop 1",
        "img": "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
        "modaldata": {
            "toy": {
                "performance": 9,
                "time": 30,
                "material": true
            },
            "hon": {
                "performance": 9,
                "time": 40,
                "material": true
            },
            "nis": {
                "performance": 8,
                "time": 35,
                "material": true
            },
            "hyu": {
                "performance": 8,
                "time": 40,
                "material": true
            },
            "for": {
                "performance": 8,
                "time": 30,
                "material": true
            }
        },
        "workload": 15
      },
      startdate: startdate.toDateString(),
      enddate: enddate.toDateString(),
    });
  }

  const modelHandler = () => {
    const value = modalModal[index].slice(0, 3).toLowerCase();
    const filteredData = data;

    filteredData.forEach(function (item) {
      item.modaldata = Object.entries(item.modaldata)
        .sort((a, b) => b[1].performance - a[1].performance)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
    });

    setSelectedData(filteredData);
    setModel(value);
  };

  useEffect(() => {
    modelHandler();
  });

  const personHandler = (personId) => {
    setSelectedPerson(personId);
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
              min={1}
              required
            />
          </FormControl>

          <FormControl label="Select Model">
            <Input id="models" value={modalModal[index]} type="text" disabled />
          </FormControl>

          <FormControl label="Select Workshop">
            <>
              <div className="flex border rounded justify-center border-gray-800 h-[300px] w-full bg-white">
                {model === ''
                  ? ''
                  : selectedData?.map((i, ind) => (
                      <div
                        key={ind}
                        onClick={() => personHandler(i.id)}
                        className={`flex w-full flex-col border border-gray-900 rounded items-center justify-center text-black hover:cursor-pointer ${
                          selectedPerson === i.id ? 'bg-gray-400 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-bold text-lg">{i.name}</div>
                        <div className="text-red-600 text-base h-[24px]">
                          {ind === 0 ? 'Recommended*' : ''}
                        </div>
                        <div className="flex flex-col items-center border-gray-400">
                          <div className="text-[14px] text-center">
                            Performance:{' '}
                            <span className="text-center w-full">
                              {i.modaldata[model].performance}/10
                            </span>
                          </div>
                          <div className="text-[14px] text-center">
                            Material Present:{' '}
                            <span className="text-center w-full">
                              {i.modaldata[model].material ? 'Yes' : 'No'}
                            </span>
                          </div>
                          <div className="text-[14px] text-center">
                            Workload:{' '}
                            <span className="text-center w-full">
                              {i.workload} cars this week (
                              {ind === 0
                                ? getthecar(model) + ' only'
                                : 'except ' + getthecar(model)}
                              )
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </>
          </FormControl>
          <FormControl label="Select Start Date">
            <Input
              type="date"
              id="starttime"
              required
              value={date}
              onChange={(event) => setDate(event.currentTarget.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ModalButton>Okay</ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
