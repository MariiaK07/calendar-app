import styled from 'styled-components';

export const FormPositionWrapper = styled.div`
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

export const FormWrapper = styled.form`
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

export const Input = styled.input`
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

  ::-webkit-calendar-picker-indicator {
    filter: invert(0.9);
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 4px 26px;
  border: none;
  border-radius: 4px;
  background-color: #F55C47;
  color: #DDDDDD;
  cursor: pointer;
`;

export const IconButton = styled.button`
  display: ${props => props.eventExists ? 'block' : 'none'};
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  color: #DDDDDD;
  cursor: pointer;
`;
