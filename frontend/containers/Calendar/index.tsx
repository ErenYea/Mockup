import React, { useEffect } from "react";
import moment from "moment";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
// import { events } from "./data";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { addDays } from "date-fns";

import CreateOrUpdateEvent from "./CreateOrUpdateEvent";
import MonthModal from "./MonthModal";
import { Cell, Grid } from "baseui/layout-grid";
const localizer: any = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);
type Props = {
  events: Array<Object>;
  view: any;
  setView: any;
  state: any;
  setState: any;
  date: any;
  setDate: any;
};

function CalendarApp(props) {
  const [onNavigate, setOnNavigate] = React.useState(null);
  // const [events, setEvents] = useState<any>([]);
  // const [view, setView] = React.useState("week");
  // const [date, setDate] = React.useState(new Date());
  const [count, setCount] = React.useState(0);

  const handleView = (newview) => {
    // setDate(date);
    console.log("hamza");
    console.log("view", newview);
    props?.setView(newview);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState("create");
  const [event, setEvent] = React.useState(null);
  const [monthevent, setMonthEvent] = React.useState([]);
  const eventPropGetter = (event) => {
    const style = {
      backgroundColor: event.color,
      borderRadius: "10px",
      opacity: 0.8,
      color: "white",
      weight: "bold",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  // const [state, setState] = React.useState({
  //   events: [],
  // });
  const getDate = async () => {
    if (props?.state?.events.length == 0) {
      const response = await fetch("https://MongooseAPI.erenyea.repl.co/get");
      const post = await response.json();
      console.log(post);
      if (post.success === true) {
        const senddata = post?.data?.map((i) => {
          var d = i;
          d.start = new Date(i?.start);
          d.end = new Date(i?.end);
          d.id = i?._id;

          return d;
        });
        props?.setState({ events: senddata });
      }
    }
  };
  const getMonth = async () => {
    if (monthevent.length == 0) {
      const response = await fetch(
        "https://MongooseAPI.erenyea.repl.co/getmonth"
      );
      const month = await response.json();
      console.log(month);
      if (month?.success === true) {
        const senddata = month?.data?.map((i) => {
          var d = i;
          d.start = new Date(i?.start);
          d.end = new Date(i?.end);
          d.id = i?._id;
          d.title = i?.title + ": " + i?.jobs.toString();
          return d;
        });
        setMonthEvent(senddata);
      }
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
  const handleNavigate = (date, view) => {
    console.log("navigate", date, view);
    props?.setDate(date);
    props?.setView(view);
  };

  // console.log("state", props.events);
  function moveEvent({
    event,
    start,
    end,
    isAllDay: droppedOnAllDaySlot,
  }: any) {
    const { events } = props.state;

    const idx = events.indexOf(event);
    let allDay = event?.allDay;

    if (!event?.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event?.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    props.setState({
      ...props.state,
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  function resizeEvent({ event, start, end }: any) {
    const { events } = props.state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    props.setState({
      ...props.state,
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  }
  const sendEvent = async (event: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(event);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://MongooseAPI.erenyea.repl.co/post",
      requestOptions
    );
    const data = await response.json();
    return data;
  };

  async function newEvent(event: any) {
    // let idList = state.events.map((a) => a.id);
    // let newId = Math.max(...idList) + 1;
    console.log("event", event);
    var starttime = parseInt(event?.starttime.split(":")[0]);
    var starttimeminute = parseInt(event?.starttime.split(":")[1]);
    var endtime = parseInt(event?.endtime.split(":")[0]);
    var endtimeminute = parseInt(event?.endtime.split(":")[1]);
    var start = event?.slots.length == 1 ? event?.start : event?.slots[0];
    var end = event?.slots.length == 1 ? event?.end : event?.slots[1];
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
    var title = `Sunroof fitment for ${event?.work} (No. of Jobs= ${event?.title})`;
    let hour = {
      // id: newId,
      title: title,
      cars: event?.title,
      workshop: event?.workshop,
      model: event?.work,
      // allDay: event.slots.length == 1,

      start: newstartdate,
      end: newenddate,
      color: event?.color,
    };
    console.log(hour);
    const response = await sendEvent(hour);
    if (response.success == true) {
      props?.setState({
        ...props?.state,
        events: props?.state?.events.concat([hour]),
      });
    } else {
      alert(response?.message);
    }

    return;
  }
  function updateEvent(event: any) {
    var start = event?.slots.length == 1 ? event?.start : event?.slots[0];
    var end = event?.slots.length == 1 ? event.end : event?.slots[1];
    var starttime = parseInt(event?.starttime.split(":")[0]);
    var starttimeminute = parseInt(event?.starttime.split(":")[1]);
    var endtime = parseInt(event?.endtime.split(":")[0]);
    var endtimeminute = parseInt(event?.endtime.split(":")[1]);
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
      id: event?.id,
      title: event?.title,
      person: event?.person,
      start: newstartdate,
      end: newenddate,
      model: event?.model,
    };
    updateCalendar(updatedEvent);
    props?.setState({
      ...props?.state,
      events: props?.state?.events.map((item) =>
        item?.id === updatedEvent?.id ? updatedEvent : item
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
    if (props?.view == "month") {
      getMonth();
    } else {
      getDate();
    }
  }, [props?.view]);
  useEffect(() => {
    function getElementByXpath(path) {
      return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
    }

    console.log(props?.view);
    console.log("data", props?.date);
    if (props?.view == "week") {
      var ele = getElementByXpath(
        `//div[@data-baseweb="block"]//button[contains(text(),'Back')]`
      ) as HTMLButtonElement;
      ele.disabled = false;
      var ele = getElementByXpath(
        `//div[@data-baseweb="block"]//button[contains(text(),'Next')]`
      ) as HTMLButtonElement;
      ele.disabled = false;
    } else {
      if (count == 0) {
        var ele = getElementByXpath(
          `//div[@data-baseweb="block"]//button[contains(text(),'Back')]`
        ) as HTMLButtonElement;
        ele.disabled = true;
      } else {
        var ele = getElementByXpath(
          `//div[@data-baseweb="block"]//button[contains(text(),'Back')]`
        ) as HTMLButtonElement;
        ele.disabled = false;
      }
      if (count == 2) {
        var ele = getElementByXpath(
          `//div[@data-baseweb="block"]//button[contains(text(),'Next')]`
        ) as HTMLButtonElement;
        ele.disabled = true;
      } else {
        var ele = getElementByXpath(
          `//div[@data-baseweb="block"]//button[contains(text(),'Next')]`
        ) as HTMLButtonElement;
        ele.disabled = false;
      }
      if (props.date.getMonth() == new Date().getMonth()) {
        setCount(0);
      }
      if (props.date.getMonth() == new Date().getMonth() + 1) {
        setCount(1);
      }
      if (props.date.getMonth() == new Date().getMonth() + 2) {
        setCount(2);
      }
    }
    // if (date.getMonth() == new Date().getMonth() + 3) {
    //   setCount(3);
    // }
  }, [props?.view, props?.date, count]);
  // useEffect(() => {
  //   setOnNavigate((date, view, action) => {
  //     console.log("onNavigate", date, view, action);
  //   });
  // }, []);
  return (
    <>
      {props?.view == "month" ? (
        <Calendar
          popup
          selectable={props?.view == "month" ? false : true}
          localizer={localizer}
          events={props?.view == "month" ? monthevent : props?.state?.events}
          // onEventDrop={moveEvent}
          // onEventResize={resizeEvent}
          onSelectSlot={props?.view == "month" ? null : onSelectSlot}
          onSelectEvent={props?.view == "month" ? null : onSelectEvent}
          onDragStart={console.log}
          // defaultView={Views.Month}
          showMultiDayTimes={true}
          showNavigation={true}
          eventPropGetter={eventPropGetter}
          defaultDate={today}
          // view={"agenda"}
          startAccessor="start"
          // components={{
          //   month: { header: CustomHeader },
          //   week: { header: CustomHeader },
          // }}
          endAccessor="end"
          view={props?.view}
          views={["month", "week"]}
          date={props?.date}
          onNavigate={handleNavigate}
          onView={handleView}
          // date={
          //   new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)
          // }
          timeslots={15}
          step={1}
          min={
            new Date(
              today.getFullYear(),
              today.getMonth() - 1,
              today.getDate(),
              8
            )
          }
          max={
            new Date(
              today.getFullYear(),
              today.getMonth() + 1,
              today.getDate(),
              18,
              15
            )
          }
          // defaultView="week"
        />
      ) : (
        <>
          <Calendar
            popup
            selectable={props?.view == "month" ? false : true}
            localizer={localizer}
            events={props?.view == "month" ? monthevent : props?.state?.events}
            // onEventDrop={moveEvent}
            // onEventResize={resizeEvent}
            onSelectSlot={props?.view == "month" ? null : onSelectSlot}
            onSelectEvent={props?.view == "month" ? null : null}
            // onDragStart={console.log}
            // defaultView={Views.Month}
            showMultiDayTimes={true}
            showNavigation={true}
            eventPropGetter={eventPropGetter}
            // defaultDate={today}
            // view={"agenda"}
            startAccessor="start"
            // components={{
            //   month: { header: CustomHeader },
            //   week: { header: CustomHeader },
            // }}
            endAccessor="end"
            view={props?.view}
            views={["month", "week"]}
            date={props?.date}
            onNavigate={handleNavigate}
            onView={handleView}
            // date={
            //   new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)
            // }
            timeslots={15}
            step={1}
            min={
              new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                today.getDate(),
                8
              )
            }
            max={
              new Date(
                today.getFullYear(),
                today.getMonth() + 1,
                today.getDate(),
                18,
                15
              )
            }

            // defaultView="week"
          />
        </>
      )}

      {event &&
        (props?.view == "week" ? (
          <CreateOrUpdateEvent
            onClose={close}
            isOpen={isOpen}
            event={event}
            type={actionType}
            onSubmit={(value: any) => onSubmit(value)}
          />
        ) : (
          ""
        ))}
    </>
  );
}

export default CalendarApp;
