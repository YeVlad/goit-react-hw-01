import './profile.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="card">
      <div>
        <img className="avatar" src={image} alt="User avatar" />
        <p className="text-profile name-text"> {name}</p>
        <p className="text-profile gray-text">@{tag}</p>
        <p className="text-profile gray-text">{location}</p>
      </div>

      <ul className="list-stats">
        <li className="element-stat">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="element-stat">
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="element-stat">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
