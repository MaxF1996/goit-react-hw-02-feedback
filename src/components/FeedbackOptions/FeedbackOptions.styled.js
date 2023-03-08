import styled from 'styled-components';

export const FeedbackButtonsList = styled.ul`
  display: flex;
  column-gap: 10px;
  padding-bottom: 18px;
`;

export const FeedbackBtnItem = styled.li``;

export const FeedbackButton = styled.button`
  text-transform: capitalize;
  border: 2px solid black;
  padding: 7px;
  border-radius: 5px;
  line-height: 1;
  cursor: pointer;
  color: black;
  font-weight: 700;
  :hover {
    color: white;
    border-color: white;
    background-color: black;
  }
  &[name='good']:active {
    border-color: green;
    color: green;
  }
  &[name='neutral']:active {
    border-color: yellow;
    color: yellow;
  }
  &[name='bad']:active {
    border-color: red;
    color: red;
  }
`;
