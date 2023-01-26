import React from 'react';
import styled from 'styled-components';


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: #404040;
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 80px;
  background-color: ${props => props.isWeekend ? '#272829' : ' #1E1F21'};
  color: #DDDCDD;
`;

const CellRow = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
`;

const DayWrapper = styled.div`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CalendarGrid = ({ startDay }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <GridWrapper>
      {
        daysMap.map((dayItem) => (
          <CellWrapper
            key={dayItem.format('DDMMYYY')}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          >
            <CellRow justifyContent="flex-end">
              <DayWrapper>
                {dayItem.format('D')}
              </DayWrapper>
            </CellRow>
          </CellWrapper>
        ))
      }
    </GridWrapper>
  );
};

export default CalendarGrid;
