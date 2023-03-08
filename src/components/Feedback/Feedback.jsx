import { Component } from 'react';
import {
  FeedbackBlock,
  FeedbackHeader,
  FeedbackButtonsList,
  FeedbackBtnItem,
  FeedbackButton,
  FeedbackSubheader,
  FeedbackStatsList,
  FeedbackStat,
  Indicator,
} from './Feedback.styled';

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return Math.round((100 * this.state.good) / this.countTotalFeedback());
    } else {
      return 0;
    }
  };

  handleIncreasing = e => {
    this.setState((state, props) => ({
      [e.target.textContent.toLowerCase()]: state[e.target.textContent.toLowerCase()] + props.step,
    }));
  };

  render() {
    return (
      <FeedbackBlock>
        <FeedbackHeader>Please leave feedback</FeedbackHeader>
        <FeedbackButtonsList>
          <FeedbackBtnItem>
            <FeedbackButton type="button" onClick={this.handleIncreasing}>
              Good
            </FeedbackButton>
          </FeedbackBtnItem>
          <FeedbackBtnItem>
            <FeedbackButton type="button" onClick={this.handleIncreasing}>
              Neutral
            </FeedbackButton>
          </FeedbackBtnItem>
          <FeedbackBtnItem>
            <FeedbackButton type="button" onClick={this.handleIncreasing}>
              Bad
            </FeedbackButton>
          </FeedbackBtnItem>
        </FeedbackButtonsList>
        <FeedbackSubheader>Statistics</FeedbackSubheader>
        <FeedbackStatsList>
          <FeedbackStat>
            Good: <Indicator>{this.state.good}</Indicator>
          </FeedbackStat>
          <FeedbackStat>
            Neutral: <Indicator>{this.state.neutral}</Indicator>
          </FeedbackStat>
          <FeedbackStat>
            Bad: <Indicator>{this.state.bad}</Indicator>
          </FeedbackStat>
          <FeedbackStat>
            Total: <Indicator>{this.countTotalFeedback()}</Indicator>
          </FeedbackStat>
          <FeedbackStat>
            Positive feedback: <Indicator>{this.countPositiveFeedbackPercentage()}%</Indicator>
          </FeedbackStat>
        </FeedbackStatsList>
      </FeedbackBlock>
    );
  }
}

export default Feedback;
