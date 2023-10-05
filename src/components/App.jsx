import { Component } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedback/FeedBack';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    showStatistics: false,
  };
  //*SUM
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; //!!!
    return good + neutral + bad;
  };
  //*PERCENT
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percent =
      totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
    return percent;
  };
  handleRating = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      showStatistics: true,
    }));
  };
  //*RENDER
  render() {
    const { good, neutral, bad, showStatistics } = this.state;
    const percent = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();
    const feedbackOptions = ['good', 'neutral', 'bad'];
    return (
      <div>
        <Section tittle="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleRating}
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
}
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
