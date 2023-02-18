import * as Styled from './style';
import moment from 'moment';
import DayEvents from '../DayEvents';


const CalendarGrid = (props) => {
  const {
    totalDays,
    startDay,
    date,
    events,
    openFormHandler
  } = props;

  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => date.isSame(day, 'month');


  return (
    <Styled.GridWrapper>
      {daysMap.map((dayItem) => (
        <Styled.CellWrapper
          key={dayItem.unix()}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          isSelectedMonth={isSelectedMonth(dayItem)}
          isCurrentDay={isCurrentDay(dayItem)}
          onClick={(e) => openFormHandler(e, undefined, dayItem.format('X'))}
        >
          <Styled.DayWrapper
            isCurrentDay={isCurrentDay(dayItem)}
          >
            <span>{dayItem.format('dd')}</span>
            <span>{dayItem.format('D')}</span>
          </Styled.DayWrapper>

          <DayEvents
            dayItem={dayItem}
            events={events}
            isCurrentDay={isCurrentDay}
            openFormHandler={openFormHandler}
          />
        </Styled.CellWrapper>
      ))}
    </Styled.GridWrapper>
  );
};

export default CalendarGrid;
