import React from "react";
import { nanoid } from "nanoid";
import moment from "moment";

const CalendarDate = ({ date }) => {

  // Find date and create array before days in mounth and after
  const startDayWeek = date
    .clone()
    .startOf("month")
    .startOf("week")
    .format("DD");
  const lastDayWeek = date.clone().endOf("month").endOf("week").format("DD");
  const daysBeforeMonth = date
    .clone()
    .month(date.month() - 1)
    .endOf("month")
    .format("DD");
  const daysMonth = date.clone().endOf("month").format("DD");
  const beforeDays = () => {
    const arr = [];
    for (let i = +startDayWeek; i <= +daysBeforeMonth; i++) {
      if (startDayWeek < 20) {
        return null;
      }
      arr.push(i);
    }
    return arr;
  };

  const afterDays = () => {
    const arr = [];
    for (let i = 1; i <= +lastDayWeek; i++) {
      arr.push(i);
    }
    return arr;
  };

  const dayMonthNow = () => {
    const arr = [];
    for (let i = 1; i <= +daysMonth; i++) {
      arr.push(i);
    }
    return arr;
  };

  const allDaysArray = beforeDays().concat(dayMonthNow().concat(afterDays()));

  // Create doubleArray
  const allDaysArrayWeek = () => {
    const arr = [];
    let index = 0;
    let acc = 0;
    for (let i = 0; i < 5; i++) {
      arr[i] = [];
      for (let j = 0; j < 7; j++) {
        arr[i][j] = allDaysArray[index];
        index += 1;
      }
    }
    return arr;
  };

  const forRenderCalendarDay = allDaysArrayWeek();

  // summary days 

  const allDays = +daysBeforeMonth - +startDayWeek + 1 + +daysMonth + +lastDayWeek;
  // console.log(daysBeforeMonth)
  // console.log(startDayWeek);
  // console.log(lastDayWeek);
  // console.log(allDays)

  console.log(date.format("DD-MM-YYYY"));

  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" title="Понедельник">
            Пн
          </th>
          <th scope="col" title="Вторник">
            Вт
          </th>
          <th scope="col" title="Среда">
            Ср
          </th>
          <th scope="col" title="Четверг">
            Чт
          </th>
          <th scope="col" title="Пятница">
            Пт
          </th>
          <th scope="col" title="Суббота">
            Сб
          </th>
          <th scope="col" title="Воскресенье">
            Вс
          </th>
        </tr>
      </thead>
      <tbody>
        {forRenderCalendarDay.map((trItem) => {
          return (
            <tr key={nanoid()}>
              {trItem.map((tdItem) => {
                return (
                  <td
                    className={
                      moment().format(
                        `${tdItem < 10 ? "0" + tdItem : tdItem}-MM-YYYY`
                      ) === date.format("DD-MM-YYYY")
                        ? "ui-datepicker-today"
                        : null
                    }
                    key={moment().format(`${tdItem}-MM-YYYY`)}
                  >
                    {tdItem}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CalendarDate;
