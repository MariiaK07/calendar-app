import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Header from '../Header';
import CalendarGrid from '../CalendarGrid';


const ShadowWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;


const App = () => {
  moment.updateLocale('en', {week: {dow: 1}});
  const totalDays = 42;
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');


  const prevMonthHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  const currentMonthHandler = () => {
    setToday(moment());
  };


  return (
    <ShadowWrapper>
      <Header
        today={today}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        currentMonthHandler={currentMonthHandler}
      />
      <CalendarGrid
        totalDays={totalDays}
        startDay={startDay}
        today={today}
      />
    </ShadowWrapper>
  );
};

export default App;
