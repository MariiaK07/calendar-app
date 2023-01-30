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
  width: 144px;
  height: 96px;
  background-color: #1E1F21;
  color: ${props => props.isSelectedMonth ? '#DDDCDD' : '#555759'};

  ${props => props.isWeekend && `
    background-color: #272829;
  `}

  ${props => props.isCurrentDay && `
    background-color: #F55C47;
  `}
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px 4px;
  color: ${props => props.isCurrentDay && `#1E1F21`};
  font-weight: ${props => props.isCurrentDay && `600`};
  line-height: 1;
`;

const List = styled.ul`
  margin: 0;
  padding: 3px 4px 4px;
  list-style-position: inside;
  list-style-type: none;
`;

const ListItem = styled.li`
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

const EllipsisWrapper = styled.p`
  margin-top: -9px;
  letter-spacing: 1px;
`;


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
    <GridWrapper>
      {daysMap.map((dayItem) => (
        <CellWrapper
          key={dayItem.unix()}
          isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          isSelectedMonth={isSelectedMonth(dayItem)}
          isCurrentDay={isCurrentDay(dayItem)}
          onClick={(e) => openFormHandler(e, undefined, dayItem.format('X'))}
        >
          <DayWrapper
            isCurrentDay={isCurrentDay(dayItem)}
          >
            <span>{dayItem.format('dd')}</span>
            <span>{dayItem.format('D')}</span>
          </DayWrapper>

          <List>
            {events
              .filter(event => event.date >= dayItem.format('X') &&
                event.date <= dayItem.clone().endOf('day').format('X')
              )
              .map((event, index) => (
                index === 2 ? (
                  <EllipsisWrapper key={index}>...</EllipsisWrapper>
                ) : (
                  <ListItem
                    key={event.id}
                    onClick={(e) => openFormHandler(e, event)}
                    isCurrentDay={isCurrentDay(dayItem)}
                  >
                    {event.title}
                  </ListItem>
                )
              ))
            }
          </List>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
