import styled from 'styled-components';

export const FeedbackBlock = styled.div`
  margin-left: 10px;
  height: 100vh;
`;
export const FeedbackHeader = styled.h1``;
export const FeedbackButtonsList = styled.ul`
  display: flex;
  column-gap: 10px;
  padding-bottom: 18px;
`;
export const FeedbackBtnItem = styled.li``;
export const FeedbackButton = styled.button`
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
  :active {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
  }
`;
export const FeedbackSubheader = styled.h2``;
export const FeedbackStatsList = styled.ul``;
export const FeedbackStat = styled.li`
  font-weight: 600;
`;
export const Indicator = styled.span``;
