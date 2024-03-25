import "../styles/main.css";
import "../styles/profile.css";

function EditUser() {
  return (
    <div className="user-editing flex">
      <form>
        <input type="text" name="username" placeholder="New name" />
        <input type="text" name="Job" placeholder="Job..." />
        <input type="text" name="adress" placeholder="Address..." />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditUser;
