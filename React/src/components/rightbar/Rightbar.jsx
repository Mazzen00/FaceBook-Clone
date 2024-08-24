import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar(profile) {
  const HomeRightbar = function() {
    return (
        <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assests/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
          </div>
        <img className="rightbarAd" src="assests/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
          
          </>
      
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">About</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Sogout</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Turkey</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Job:</span>
            <span className="rightbarInfoValue">Solider</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assests/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Engin Altan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ali Yaar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ahmed</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dawood</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Engin</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ertugrul</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
