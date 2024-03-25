import { useState } from "react";
import "../styles/main.css";
import "../styles/profile.css";
import EditUser from "../components/EditUser";

function Profile() {
  const [add, setAdd] = useState(false);
  return (
    <div className="profile">
      <div className="container">
        <div className="card flex-items">
          <div className="user-photo">
            <img
              src="/WhatsApp Image 2024-03-24 at 11.03.54 PM.jpeg"
              alt="userphoto"
            />
          </div>
          <div className="user-infos">
            <h1>Ahmad Handoush</h1>
            <p>Job</p>
            <div className="adress">adress</div>
            <div className="show-more">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
        <div className="edit">
          {" "}
          <button className="btn-edit" onClick={() => setAdd(!add)}>
            Edit
          </button>
        </div>
        {add && <EditUser />}
      </div>
    </div>
  );
}

export default Profile;
