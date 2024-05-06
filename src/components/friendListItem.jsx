import './friendListItem.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  let status = isOnline ? 'online' : 'offline';
  return (
    <div className="friend-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className={status}>{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
