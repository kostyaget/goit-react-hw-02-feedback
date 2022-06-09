import propTypes from "prop-types";
import s from "./statistics.module.css";

export default function Statistics({
    good,neutral,bad,total,positivePercentage,
}) {
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
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    otal: propTypes.number,
    positivePercentage: propTypes.number,
};