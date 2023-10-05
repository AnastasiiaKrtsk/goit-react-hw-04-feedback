import React from 'react';
import styles from './FeedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.bntul}>
      {options.map(option => (
        <li key={option}>
          <button
            className={styles.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

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
