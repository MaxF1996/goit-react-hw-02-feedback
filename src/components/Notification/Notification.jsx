import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationText>{message || 'Nothing to display'}</NotificationText>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
