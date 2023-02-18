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

const getDateFromLocalStorage = () => {
  const savedDate = localStorage.getItem('date');

  return savedDate > 0 ? moment.unix(savedDate) : moment();
};

const getEventsFromLocalStorage = () => {
  const savedEvents = localStorage.getItem('events');
  const localEvents = JSON.parse(savedEvents);

  return localEvents || [];
};


const App = () => {
  moment.updateLocale('en', {week: {dow: 1}});
  const [targetedDate, setTargetedDate] = useState(getDateFromLocalStorage());
  const startDay = targetedDate.clone().startOf('month').startOf('week');
  const [events, setEvents] = useState(getEventsFromLocalStorage());
  const [event, setEvent] = useState(null);
  const [openForm, setOpenForm] = useState(false);


  const startDateQuery = startDay.clone().format('X');
  const endDateQuery = startDay.clone().add(totalDays, 'days').format('X');

  const currentMonthEvents = events.filter(event =>
    event.date > startDateQuery &&
    event.date < endDateQuery
  );


  useEffect(() => {
    setTargetedDate(getDateFromLocalStorage());
    setEvents(getEventsFromLocalStorage());
  }, []);

  useEffect(() => {
    localStorage.setItem('date', targetedDate.format('X'));
  }, [targetedDate]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  const prevMonthHandler = () => {
    setTargetedDate(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setTargetedDate(prev => prev.clone().add(1, 'month'));
  };

  const openFormHandler = (e, eventToUpdate = defaultEvent, date) => {
    e.stopPropagation();
    setOpenForm(true);
    setEvent(eventToUpdate);
    defaultEvent.date = date;
    defaultEvent.id = moment().format('X');
  };


  return <>
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
        targetedDate={targetedDate}
        setTargetedDate={setTargetedDate}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
      />
      <CalendarGrid
        totalDays={totalDays}
        startDay={startDay}
        targetedDate={targetedDate}
        events={currentMonthEvents}
        openFormHandler={openFormHandler}
      />
    </Styled.ShadowWrapper>
  </>;
};

export default App;
