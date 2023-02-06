import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    // console.log(friends);
    return (
        <ul className="friend-list">
            { friends.map( ({id, name, avatar, isOnline}) => {
                return (
                    <li key={id} className="item">
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
};

FriendList.propName = {
    friends: PropTypes.array,
}