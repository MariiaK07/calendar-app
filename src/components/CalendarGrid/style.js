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

export const List = styled.ul`
  margin: 0;
  padding: 3px 4px;
  list-style-position: inside;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-top: 4px;
  padding: 4px;
  line-height: 1;
  border-radius: 4px;
  background-color: ${props => props.isCurrentDay
    ? `rgba(30, 31, 33, 0.5)`
    : `rgba(245, 92, 71, 0.2)`
  };
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
`;

export const EllipsisWrapper = styled.p`
  margin-top: -9px;
  padding-left: 4px;
  letter-spacing: 1px;
`;
