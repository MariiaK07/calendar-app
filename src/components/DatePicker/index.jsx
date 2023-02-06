import moment from 'moment';
import * as Styled from './style';
import { Calendar } from '@styled-icons/bootstrap';


const DatePicker = ({ setDate }) => {
  return (
    <Styled.DatePickerWrapper>
      <Styled.Button>
        <Calendar size="20" />
      </Styled.Button>
      <Styled.DatePickerInput
        type="month"
        onChange={(e) => setDate(moment(e.target.value))}
      />
    </Styled.DatePickerWrapper>
  );
};

export default DatePicker;
