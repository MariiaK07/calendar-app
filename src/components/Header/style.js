import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  background-color: #1E1F21;
  color: #DDDDDD;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.gap ? props.gap : ''};
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #DDDDDD;
  cursor: pointer;
`;

export const TextWrapper = styled.span`
  margin-top: -4px;
  font-size: 1.2rem;
`;
