import styled from 'styled-components';
import { Plus, Calendar } from '@styled-icons/bootstrap';
import { ArrowIosBackOutline, ArrowIosForwardOutline } from '@styled-icons/evaicons-outline';


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
  border: none;
  background-color: transparent;
  color: #E6E6E6;
  cursor: pointer;
`;

const TextWrapper = styled.span`
  margin-top: -4px;
  font-size: 1.2rem;
`;

const PlusIcon = styled(Plus)`
  margin-left: -6px;
`;


const Header = (props) => {
  const {
    today,
    prevMonthHandler,
    nextMonthHandler,
    currentMonthHandler
  } = props;

  return (
    <DivWrapper>
      <Button>
        <PlusIcon size="32" />
      </Button>
      <FlexWrapper gap="8px">
        <FlexWrapper>
          <Button onClick={prevMonthHandler}>
            <ArrowIosBackOutline size="24" />
          </Button>
          <TextWrapper>
            {today.format('MMMM')} {today.format('YYYY')}
          </TextWrapper>
          <Button onClick={nextMonthHandler}>
            <ArrowIosForwardOutline size="24" />
          </Button>
        </FlexWrapper>
        <Button onClick={currentMonthHandler}>
          <Calendar size="18" />
        </Button>
      </FlexWrapper>
    </DivWrapper>
  );
};

export default Header;
