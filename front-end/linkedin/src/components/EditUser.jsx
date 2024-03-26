import { useState } from "react";
import "../styles/main.css";
import "../styles/profile.css";

function EditUser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [id, setId] = useState(JSON.parse(localStorage.getItem("user-id")));
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("job", job);
    formData.append("bio", bio);
    formData.append("experience", experience);
    formData.append("education", education);
    formData.append("UserID", id);

    try {
      const response = await fetch(
        "http://localhost/linkedin/backend/edituser.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.success) {
        alert("user data updated successfully");
        setTimeout(window.location.reload, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="user-editing flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New name"
        />
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Job..."
        />
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio..."
        />
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Experience..."
        />
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Education..."
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditUser;
