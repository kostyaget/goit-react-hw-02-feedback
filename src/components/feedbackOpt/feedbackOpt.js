import PropTypes from 'prop-types';
import s from "./feedbackOpt.module.css"

const FeedbackOpt = ({ options, onLeaveFeedback }) => {
    return (
    <div className="buttons_block">
        {options.map(elem => {
            return (
                <button
                    id={elem}
                    key={elem}
                    className={s.elem}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {elem}
                </button>
            );
        })}
    </div> 
    )
}

FeedbackOpt.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOpt;