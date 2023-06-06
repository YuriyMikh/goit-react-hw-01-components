import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
console.log(css);

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span className={css.status}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
