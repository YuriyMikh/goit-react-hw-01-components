import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = props => {
  const { friends } = props;

  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <div key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </div>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
