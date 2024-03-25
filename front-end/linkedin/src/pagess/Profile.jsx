import { useEffect, useState } from "react";
import "../styles/main.css";
import "../styles/profile.css";
import EditUser from "../components/EditUser";

function Profile() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("user-id")));
  const [add, setAdd] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { UserID, Username, Email, Experience, Education, Skills, Bio } = data;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `http://localhost/linkedin/backend/getUser.php?id=${id}`
        );
        if (!res.ok) throw new Error("UR internet has interrupted");

        const data = await res.json();

        if (data.Response === "False") throw new Error("data not found");
        setData(data.user);
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, [id]);
  console.log(data);

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
            <h1>{Username}</h1>
            <p>Job: {Skills}</p>
            <div className="adress"> Experience: {Experience}</div>
            <div className="show-more">
              <p>Bio: {Bio}</p>
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
