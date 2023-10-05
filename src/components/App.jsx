// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedback/FeedBack';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [showStatistics, setShowStatistics] = useState(false);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    const percent =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    return percent;
  };

  const handleRating = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
    setShowStatistics(true);
  };

  const { good, neutral, bad } = feedback;
  const percent = countPositiveFeedbackPercentage();
  const totalFeedback = countTotalFeedback();
  const feedbackOptions = ['good', 'neutral', 'bad'];

  useEffect(() => {
    setShowStatistics(totalFeedback > 0);
  }, [totalFeedback]);

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
          <div>
            <Statistics good={good} neutral={neutral} bad={bad} />
            <p>Positive feedback: {percent}%</p>
          </div>
        ) : (
          <Notification message="Click any button to see statistics" />
        )}
      </Section>
    </div>
  );
};

export default App;
//*LAYOUT
// return (
//   <>
//     <p className={styles.text}>Please leave feedback</p>
//     <ul>
//       <li>
//         <button
//           name="good"
//           onClick={this.handleRating}
//           className={styles.btn}
//           type="button"
//         >
//           Good
//         </button>
//       </li>
//       <li>
//         <button
//           name="neutral"
//           onClick={this.handleRating}
//           className={styles.btn}
//           type="button"
//         >
//           Neutral
//         </button>
//       </li>
//       <li>
//         <button
//           name="bad"
//           onClick={this.handleRating}
//           className={styles.btn}
//           type="button"
//         >
//           Bad
//         </button>
//       </li>
//     </ul>
//     <p className="text">Statistics</p>
//     <ul>
//       <li>Good:{good}</li>
//       <li>Neutral:{neutral}</li>
//       <li>Bad:{bad}</li>
//       <li>Positive feedback:{percent}%</li>
//     </ul>
//   </>
// );
