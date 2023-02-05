import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Header from '../Header';
import CalendarGrid from '../CalendarGrid';
import Form from '../Form';


 const ShadowWrapper = styled.div`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
`;

const totalDays = 42;

const defaultEvent = {
  title: '',
  description: '',
};

const getEventsFromLocalStorage = () => {
  const savedEvents = localStorage.getItem('events');
  const localEvents = JSON.parse(savedEvents);

  return localEvents || [];
};


const App = () => {
  moment.updateLocale('en', {week: {dow: 1}});
  const [date, setDate] = useState(moment());
  const startDay = date.clone().startOf('month').startOf('week');
  const [events, setEvents] = useState(getEventsFromLocalStorage);
  const [event, setEvent] = useState(null);
  const [openForm, setOpenForm] = useState(false);


  const startDateQuery = startDay.clone().format('X');
  const endDateQuery = startDay.clone().add(totalDays, 'days').format('X');

  const currentMonthEvents = events.filter(event =>
    event.date > startDateQuery &&
    event.date < endDateQuery
  );


  useEffect(() => {
    setEvents(getEventsFromLocalStorage());
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  const prevMonthHandler = () => {
    setDate(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setDate(prev => prev.clone().add(1, 'month'));
  };

  const openFormHandler = (e, eventToUpdate = defaultEvent, date) => {
    e.stopPropagation();
    setOpenForm(true);
    setEvent(eventToUpdate);
    defaultEvent.date = date;
    defaultEvent.id = moment().format('X');
  };


  return (
    <>
      {openForm && (
        <Form
          event={event}
          events={events}
          setEvent={setEvent}
          setEvents={setEvents}
          setOpenForm={setOpenForm}
        />
      )}
      <ShadowWrapper>
        <Header
          date={date}
          setDate={setDate}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          openFormHandler={openFormHandler}
        />
        <CalendarGrid
          totalDays={totalDays}
          startDay={startDay}
          date={date}
          events={currentMonthEvents}
          openFormHandler={openFormHandler}
        />
      </ShadowWrapper>
    </>
  );
};

export default App;
