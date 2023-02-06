import moment from 'moment';
import * as Styled from './style';
import { Plus } from '@styled-icons/bootstrap';
import { ArrowIosBackOutline, ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';
import DatePicker from '../DatePicker';


const Header = (props) => {
  const {
    date,
    setDate,
    prevMonthHandler,
    nextMonthHandler,
    openFormHandler
  } = props;


  return (
    <Styled.DivWrapper>
      <Styled.Button onClick={(e) => openFormHandler(e, undefined, moment().format('X'))}>
        <Plus size="32" />
      </Styled.Button>
      <Styled.FlexWrapper gap="16px">
        <Styled.FlexWrapper>
          <Styled.Button onClick={prevMonthHandler}>
            <ArrowIosBackOutline size="24" />
          </Styled.Button>
          <Styled.TextWrapper>
            {date.format('MMMM')} {date.format('YYYY')}
          </Styled.TextWrapper>
          <Styled.Button onClick={nextMonthHandler}>
            <ArrowIosForwardOutline size="24" />
          </Styled.Button>
        </Styled.FlexWrapper>
        <DatePicker date={date} setDate={setDate} />
      </Styled.FlexWrapper>
    </Styled.DivWrapper>
  );
};

export default Header;
