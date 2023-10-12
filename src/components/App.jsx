import React, { useState } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedback/FeedBack';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [showStatistics, setShowStatistics] = useState(false);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const percent =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    return percent;
  };

  const handleRating = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
    setShowStatistics(true);
  };

  const percent = countPositiveFeedbackPercentage();
  const totalFeedback = countTotalFeedback();
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleRating}
        />
      </Section>

      <Section title="Statistics">
        {showStatistics ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percent={percent}
          />
        ) : (
          <Notification message="Click any button to see statistics" />
        )}
      </Section>
    </div>
  );
}

export default App;
