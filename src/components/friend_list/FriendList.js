import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friend_list/friend_list_item/FriendListItem';

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
  )
};
