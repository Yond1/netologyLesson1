import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarDate from "./CalendarDate";

const Calendar = ({date}) => {

    console.log(date);

  return (
    <div className="ui-datepicker">
      <CalendarHeader date={date} />
      <CalendarDate date={date} />
    </div>
  );
};

export default Calendar;
