import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {Trash3 } from '@styled-icons/bootstrap';


const FormPositionWrapper = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  background-color: #1E1F21;
  color: #DDDDDD;
  border-radius: 8px;
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  overflow: hidden;
`;

const Input = styled.input`
  padding: 16px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid ${props => props.showMessage ? '#F55C47' : '#464648'};

  ::placeholder {
    color: ${props => props.showMessage ? '#F55C47' : '#555759'};
  }
`;

const ButtonsWrapper = styled.div`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 26px;
  border: none;
  border-radius: 4px;
  background-color: #F55C47;
  color: #DDDCDD;
  cursor: pointer;
`;

const IconButton = styled.button`
  display: ${props => props.eventExists ? 'block' : 'none'};
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  color: #DDDCDD;
  cursor: pointer;
`;


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
    }))
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
    <FormPositionWrapper onClick={handleBlur}>
      <FormWrapper onClick={(e) => e.stopPropagation()}>
        <Input
          value={event.title}
          placeholder={showMessage ? 'Title is required' : 'Title'}
          onChange={(e) => changeEventHandler(e.target.value, 'title')}
          ref={inputRef}
          showMessage={showMessage}
        />
        <Input
          value={event.description}
          placeholder="Description"
          onChange={(e) => changeEventHandler(e.target.value, 'description')}
        />
        <Input
          type="date"
          onChange={(e) => changeEventHandler(moment(e.target.value).format('X'), 'date')}
          value={moment.unix(event.date).format('YYYY[-]DD[-]MM')}
        />
        <ButtonsWrapper>
          <IconButton
            type="button"
            onClick={() => deleteEvent(event.id)}
            eventExists={eventExists(event.id)}
          >
            <Trash3 />
          </IconButton>
          <Button type="submit" onClick={(e) => saveEvent(e, event.id)}>
            Save
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    </FormPositionWrapper>
  );
};

export default Form;
