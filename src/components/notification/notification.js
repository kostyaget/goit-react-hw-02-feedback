import s from "./notification.module.css";
import propTypes from 'prop-types'

const Notification = ({ title }) => {
    return <p className={s.header}>{title}</p>
}

Notification.propTypes = {
    title: propTypes.string.isRequired,
};
export default Notification;