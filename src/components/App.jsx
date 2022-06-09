import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOpt from './feedbackOpt';
import Notification from './notification';
import Section from './section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = e => {
    const { id } = e.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 }
    })
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    )
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.floor(this.countPositiveFeedbackPercentage());
    const eventHandler = this.onIncrement;

    return (
      <Section title="Please leave feedback">
        <FeedbackOpt options={['good', 'neutral', 'bad']} onLeaveFeedback={eventHandler} />
        {!total ? (
          <Notification title = "There is on Feedback" />
                  ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
          /> 
        ) }
      </Section>
    )
  }
}

export default App

