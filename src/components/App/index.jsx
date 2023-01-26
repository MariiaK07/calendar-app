import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Header from '../Header';
import Monitor from '../Monitor';
import CalendarGrid from '../CalendarGrid';


const ShadowWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;


const App = () => {
  moment.updateLocale('en', {week: {dow: 1}});
  const startDay = moment().startOf('month').startOf('week');

  return (
    <ShadowWrapper>
      <Header />
      <Monitor />
      <CalendarGrid startDay={startDay} />
    </ShadowWrapper>
  );
};

export default App;
