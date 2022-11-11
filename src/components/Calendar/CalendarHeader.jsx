import React from "react";

const CalendarHeader = ({ date }) => {
  const month = date.format("MMMM");
  const day = date.format("DD");
  const year = date.format("YYYY");

  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{month}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{month}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
    </>
  );
};

export default CalendarHeader;
