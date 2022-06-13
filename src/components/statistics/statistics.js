import propTypes from "prop-types";
import s from "./statistics.module.css";

const Statistics = ({
    good,neutral,bad,total,positivePercentage,
}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>

            <p className={s.total}>Total: {total}</p>
            <p className={s.percentage}>Positive Percentage: {positivePercentage}%</p>
        </div>
    );
}

Statistics.prototypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    otal: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
};

export default Statistics;