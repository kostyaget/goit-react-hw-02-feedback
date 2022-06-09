import propTypes from 'prop-types'
import s from './section.module.css'

export default function Section({ title, children }) {
    return (
        <div className={s.contsiner}>
            <h1 className='feedback_title'>{title}</h1>
            {children}
        </div>
    );
}

Section.propTypes = {
  title: propTypes.string,
};