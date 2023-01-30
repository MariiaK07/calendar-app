import styled from 'styled-components';


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

const FormWrapper = styled.div`
  width: 200px;
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
  padding: 4px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

const ButtonsWrapper = styled.div`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #F55C47;
`;


const Form = ({ event, saveEvent, setOpenForm, changeEventHandler }) => {
  return (
    <FormPositionWrapper onClick={() => setOpenForm(false)}>
      <FormWrapper onClick={(e) => e.stopPropagation()}>
        <Input
          value={event.title}
          placeholder="Title"
          onChange={(e) => changeEventHandler(e.target.value, 'title')}
        />
        <Input
          value={event.description}
          placeholder="Description"
          onChange={(e) => changeEventHandler(e.target.value, 'description')}
        />
        <ButtonsWrapper>
          <Button onClick={() => saveEvent(event.id)}>
            Save
          </Button>
        </ButtonsWrapper>
      </FormWrapper>
    </FormPositionWrapper>
  );
};

export default Form;
