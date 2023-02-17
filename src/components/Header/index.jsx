import moment from 'moment';
import * as Styled from './style';
import { Calendar } from '@styled-icons/bootstrap';
import { ArrowIosBackOutline, ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';


const Header = (props) => {
  const {
    date,
    setDate,
    prevMonthHandler,
    nextMonthHandler
  } = props;


  return (
    <Styled.DivWrapper>
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
        <Styled.Button onClick={() => setDate(moment())}>
          <Calendar size="18" />
        </Styled.Button>
      </Styled.FlexWrapper>
    </Styled.DivWrapper>
  );
};

export default Header;
