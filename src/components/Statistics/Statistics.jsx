import PropTypes from 'prop-types';
import { FeedbackStatsList, FeedbackStat, Indicator } from './Statistics.styled';

const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0 }) => {
  return (
    <FeedbackStatsList>
      <FeedbackStat>
        Good: <Indicator>{good}</Indicator>
      </FeedbackStat>
      <FeedbackStat>
        Neutral: <Indicator>{neutral}</Indicator>
      </FeedbackStat>
      <FeedbackStat>
        Bad: <Indicator>{bad}</Indicator>
      </FeedbackStat>
      <FeedbackStat>
        Total: <Indicator>{total}</Indicator>
      </FeedbackStat>
      <FeedbackStat>
        Positive feedback: <Indicator>{positivePercentage}%</Indicator>
      </FeedbackStat>
    </FeedbackStatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
