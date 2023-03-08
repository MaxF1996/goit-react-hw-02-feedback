import PropTypes from 'prop-types';
import { FeedbackButtonsList, FeedbackBtnItem, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const typesFeedbacks = Object.keys(options);

  return (
    <FeedbackButtonsList>
      {typesFeedbacks.map(option => (
        <FeedbackBtnItem key={option}>
          <FeedbackButton type="button" name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        </FeedbackBtnItem>
      ))}
    </FeedbackButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
