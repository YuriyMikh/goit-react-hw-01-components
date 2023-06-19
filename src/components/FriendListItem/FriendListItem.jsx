import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
console.table(css);

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span
        className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
