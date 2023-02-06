import styled from 'styled-components';

export const Button = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #DDDDDD;
  cursor: pointer;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const DatePickerInput = styled.input`
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
