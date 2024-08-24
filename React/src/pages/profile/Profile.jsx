import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assests/post/7.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assests/person/10.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">SulimanShah ogul Ertugrul</h4>
                <span className="profileInfoDesc">Shehadat ve Zaffair</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
