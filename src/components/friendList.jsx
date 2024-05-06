import './friendList.css';
import FriendListItem from './friendListItem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className="list-friends">
      {friends.map(friend => {
        return (
          <li key={friend.id} className="friend-card">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
