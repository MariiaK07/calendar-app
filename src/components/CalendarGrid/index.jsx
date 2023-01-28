import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  padding-top: 1px;
  background-color: #404040;
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 100px;
  background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21'};
  color: ${props => props.isSelectedMonth ? '#DDDCDD' : '#555759'};
`;

const CellRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 2px 2px 6px;
`;

const DayWrapper = styled.div`
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentDay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: #f00;
  color: #1E1F21;
  border-radius: 50%;
`;


const CalendarGrid = ({ totalDays, startDay, today }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => today.isSame(day, 'month');

  return (
    <GridWrapper>
      {
        daysMap.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <CellRow>
              <span>{dayItem.format('dd')}</span>
              <DayWrapper>
                {!isCurrentDay(dayItem)
                  ? dayItem.format('D')
                  : <CurrentDay>{dayItem.format('D')}</CurrentDay>
                }
              </DayWrapper>
            </CellRow>
          </CellWrapper>
        ))
      }
    </GridWrapper>
  );
};

export default CalendarGrid;
