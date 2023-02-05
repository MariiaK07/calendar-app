import styled from 'styled-components';
import moment from 'moment';
import { Calendar } from '@styled-icons/bootstrap';


const Button = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #E6E6E6;
  cursor: pointer;
`;

const DatePickerWrapper = styled.div`
  position: relative;
`;

const DatePickerInput = styled.input`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;

  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;


const DatePicker = ({ setDate }) => {
  return (
    <DatePickerWrapper>
      <Button>
        <Calendar size="20" />
      </Button>
      <DatePickerInput
        type="month"
        onChange={(e) => setDate(moment(e.target.value))}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
