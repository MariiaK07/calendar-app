import styled from 'styled-components';

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
