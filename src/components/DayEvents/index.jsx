import * as Styled from './style';


const DayEvents = (props) => {
  const {
    dayItem,
    events,
    isCurrentDay,
    openFormHandler
  } = props;


  return (
    <Styled.List>
      {events
        .filter(event => event.date >= dayItem.format('X') &&
          event.date <= dayItem.clone().endOf('day').format('X')
        )
        .map((event, index) => (
          index === 2 ? (
            <Styled.EllipsisWrapper key={index}>...</Styled.EllipsisWrapper>
          ) : (
            <Styled.ListItem
              key={event.id}
              onClick={(e) => openFormHandler(e, event)}
              isCurrentDay={isCurrentDay(dayItem)}
            >
              {event.title}
            </Styled.ListItem>
          )
        ))
      }
    </Styled.List>
  );
};

export default DayEvents;
