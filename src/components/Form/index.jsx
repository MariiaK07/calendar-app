import { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import {Trash3 } from '@styled-icons/bootstrap';


const Form = (props) => {
  const {
    event,
    events,
    setEvent,
    setEvents,
    setOpenForm
  } = props;

  const inputRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  const eventExists = (eventId) => events.find(event => event.id === eventId);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const changeEventHandler = (text, field) => {
    setShowMessage(false);
    setEvent(prev => ({
      ...prev,
      [field]: text
    }));
  };

  const saveEvent = (e, eventId) => {
    e.preventDefault();

    if (event.title) {
      setEvents(prevEvents => {
        const existedEvent = eventExists(eventId);

        if (existedEvent) {
          return (
            prevEvents.map(prevEvent => prevEvent === existedEvent ? event : prevEvent)
          );
        }

        return [...prevEvents, event];
      });

      setOpenForm(false);
      setEvent(null);
    } else {
      setShowMessage(true);
      inputRef.current.focus();
    }
  };

  const deleteEvent = (eventId) => {
    setEvents(prevEvents => prevEvents
      .filter(prevEvent => prevEvent.id !== eventId)
    );

    setOpenForm(false);
    setEvent(null);
  };

  const handleBlur = () => {
    setOpenForm(false);
    setEvent(null);
  };


  return (
    <Styled.FormPositionWrapper onClick={handleBlur}>
      <Styled.FormWrapper onClick={(e) => e.stopPropagation()}>
        <Styled.Input
          value={event.title}
          placeholder={showMessage ? 'Title is required' : 'Title'}
          onChange={(e) => changeEventHandler(e.target.value, 'title')}
          ref={inputRef}
          showMessage={showMessage}
        />
        <Styled.Input
          value={event.description}
          placeholder="Description"
          onChange={(e) => changeEventHandler(e.target.value, 'description')}
        />
        <Styled.ButtonsWrapper>
          <Styled.IconButton
            type="button"
            onClick={() => deleteEvent(event.id)}
            eventExists={eventExists(event.id)}
          >
            <Trash3 size="20" />
          </Styled.IconButton>
          <Styled.Button
            type="submit"
            onClick={(e) => saveEvent(e, event.id)
          }>
            Save
          </Styled.Button>
        </Styled.ButtonsWrapper>
      </Styled.FormWrapper>
    </Styled.FormPositionWrapper>
  );
};

export default Form;
