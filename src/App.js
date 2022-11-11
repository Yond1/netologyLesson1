import React from "react";
import Calendar from "./components/Calendar/Calendar";
// import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc';
// import ShopItemClass from "./components/ShopItemClass";
import moment from "moment";
import 'moment/locale/ru';

const App = () => {
  moment.locale('ru')
  const now = moment()


  return <Calendar date={now} />;
};

export default App;
