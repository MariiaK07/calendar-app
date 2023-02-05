import styled from 'styled-components';
import moment from 'moment';
import { Plus } from '@styled-icons/bootstrap';
import { ArrowIosBackOutline, ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';
import DatePicker from '../DatePicker';


const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #1E1F21;
  color: #DDDCDD;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap ? props.gap : ''};
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #E6E6E6;
  cursor: pointer;
`;

const TextWrapper = styled.span`
  margin-top: -4px;
  font-size: 1.2rem;
`;


const Header = (props) => {
  const {
    date,
    setDate,
    prevMonthHandler,
    nextMonthHandler,
    openFormHandler
  } = props;


  return (
    <DivWrapper>
      <Button onClick={(e) => openFormHandler(e, undefined, moment().format('X'))}>
        <Plus size="32" />
      </Button>
      <FlexWrapper gap="16px">
        <FlexWrapper>
          <Button onClick={prevMonthHandler}>
            <ArrowIosBackOutline size="24" />
          </Button>
          <TextWrapper>
            {date.format('MMMM')} {date.format('YYYY')}
          </TextWrapper>
          <Button onClick={nextMonthHandler}>
            <ArrowIosForwardOutline size="24" />
          </Button>
        </FlexWrapper>
        <DatePicker date={date} setDate={setDate} />
      </FlexWrapper>
    </DivWrapper>
  );
};

export default Header;
