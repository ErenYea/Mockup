import React, { useEffect } from "react";
import moment from "moment";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
// import { events } from "./data";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { addDays } from "date-fns";

import CreateOrUpdateEvent from "./CreateOrUpdateEvent";
const localizer: any = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);
type Props = {
  events: Array<Object>;
};

function CalendarApp(props) {
  // const [events, setEvents] = useState<any>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState("create");
  const [event, setEvent] = React.useState(null);

  const [state, setState] = React.useState({
    events: [],
  });
  const getDate = async () => {
    const response = await fetch("https://MongooseAPI.erenyea.repl.co/get");
    const post = await response.json();
    console.log(post);
    if (post.success === true) {
      const senddata = post.data.map((i) => {
        var d = i;
        d.start = new Date(i.start);
        d.end = new Date(i.end);
        d.id = i._id;
        return d;
      });
      setState({ events: senddata });
    }
  };
  const updateCalendar = (event: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(event);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://MongooseAPI.erenyea.repl.co/update", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  // console.log("state", props.events);
  function moveEvent({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot,
  }: any) {
    const { events } = state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setState({
      ...state,
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  function resizeEvent({ event, start, end }: any) {
    const { events } = state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setState({
      ...state,
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  }
  const sendEvent = (event: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(event);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://MongooseAPI.erenyea.repl.co/post", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  function newEvent(event: any) {
    // let idList = state.events.map((a) => a.id);
    // let newId = Math.max(...idList) + 1;
    console.log("event", event);
    var starttime = parseInt(event.starttime.split(":")[0]);
    var starttimeminute = parseInt(event.starttime.split(":")[1]);
    var endtime = parseInt(event.endtime.split(":")[0]);
    var endtimeminute = parseInt(event.endtime.split(":")[1]);
    var start = event.slots.length == 1 ? event.start : event.slots[0];
    var end = event.slots.length == 1 ? event.end : event.slots[1];
    var newstartdate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      starttime,
      starttimeminute
    );
    var newenddate = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate(),
      endtime,
      endtimeminute
    );
    let hour = {
      // id: newId,
      title: event.title,
      person: event.person,
      model: event.model,
      // allDay: event.slots.length == 1,

      start: newstartdate,
      end: newenddate,
    };
    sendEvent(hour);
    setState({
      ...state,
      events: state.events.concat([hour]),
    });

    return;
  }
  function updateEvent(event: any) {
    var start = event.slots.length == 1 ? event.start : event.slots[0];
    var end = event.slots.length == 1 ? event.end : event.slots[1];
    var starttime = parseInt(event.starttime.split(":")[0]);
    var starttimeminute = parseInt(event.starttime.split(":")[1]);
    var endtime = parseInt(event.endtime.split(":")[0]);
    var endtimeminute = parseInt(event.endtime.split(":")[1]);
    var newstartdate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      starttime,
      starttimeminute
    );
    var newenddate = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate(),
      endtime,
      endtimeminute
    );
    let updatedEvent = {
      id: event.id,
      title: event.title,
      person: event.person,
      start: newstartdate,
      end: newenddate,
      model: event.model,
    };
    updateCalendar(updatedEvent);
    setState({
      ...state,
      events: state.events.map((item) =>
        item.id === updatedEvent.id ? updatedEvent : item
      ),
    });
    return;
  }

  function onSubmit(value: any) {
    setIsOpen(false);
    setEvent(null);
    console.log(value);
    if (actionType === "create") {
      newEvent(value);
    }
    if (actionType === "update") {
      updateEvent(value);
    }
  }
  function onSelectEvent(selectedEvent: any) {
    var sendevent = selectedEvent;
    sendevent.starttime = `${
      sendevent.start.getHours().toString().length == 1
        ? "0" + sendevent.start.getHours().toString()
        : sendevent.start.getHours().toString()
    }:${
      sendevent.start.getMinutes().toString().length == 1
        ? "0" + sendevent.start.getMinutes().toString()
        : sendevent.start.getMinutes().toString()
    }`;
    sendevent.endtime = `${
      sendevent.end.getHours().toString().length == 1
        ? "0" + sendevent.end.getHours().toString()
        : sendevent.end.getHours().toString()
    }:${
      sendevent.end.getMinutes().toString().length == 1
        ? "0" + sendevent.end.getMinutes().toString()
        : sendevent.end.getMinutes().toString()
    }`;
    console.log("selectedEvent", sendevent);
    setIsOpen(true);
    setEvent(sendevent);
    setActionType("update");
  }
  function onSelectSlot(selectedSlot: any) {
    setEvent(selectedSlot);
    setActionType("create");
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
    setEvent(null);
  }
  const today = new Date();
  useEffect(() => {
    getDate();
  }, []);
  console.log(props.calendarData)
  return (
    <>
      {/* resizable */}
      <DragAndDropCalendar
        popup
        selectable
        localizer={localizer}
        events={props.calendarData}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        onDragStart={console.log}
        defaultView={Views.Month}
        defaultDate={props.args}
        timeslots={15}
        step={1}
        min={
          new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8)
        }
        max={
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            18,
            15
          )
        }
        // defaultView="week"
      />
      {event && (
        <CreateOrUpdateEvent
          onClose={close}
          isOpen={isOpen}
          event={event}
          type={actionType}
          onSubmit={(value: any) => onSubmit(value)}
        />
      )}
    </>
  );
}

export default CalendarApp;
