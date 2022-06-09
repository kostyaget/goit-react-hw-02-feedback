import s from "./feedbackOpt.module.css"

export default function FeedbackOpt({ options, onLeaveFeedback }) {
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