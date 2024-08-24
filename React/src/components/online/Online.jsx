import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="assests/person/8.jpeg" alt="aa" />
        <span className="rightbarOnline">And</span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
