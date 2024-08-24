import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src="assests/person/9.jpeg" alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
