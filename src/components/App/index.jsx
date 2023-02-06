import React, { useState, useEffect } from 'react';
import moment from 'moment';
import * as Styled from './style';
import Header from '../Header';
import CalendarGrid from '../CalendarGrid';
import Form from '../Form';


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
      <Styled.ShadowWrapper>
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
      </Styled.ShadowWrapper>
    </>
  );
};

export default App;
