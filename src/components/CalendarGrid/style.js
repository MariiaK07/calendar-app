import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  padding-top: 1px;
  background-color: #404040;
`;

export const CellWrapper = styled.div`
  width: 144px;
  height: 96px;
  background-color: #1E1F21;
  color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};

  ${props => props.isWeekend && `
    background-color: #272829;
  `}

  ${props => props.isCurrentDay && `
    background-color: #F55C47;
  `}
`;

export const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px 4px;
  line-height: 1;

  ${props => props.isCurrentDay && `
    color: #1E1F21;
    font-weight: 600;
  `}
`;
