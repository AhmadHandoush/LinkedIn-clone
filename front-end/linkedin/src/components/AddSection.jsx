import "../styles/home.css";

function AddSection() {
  return (
    <div className="add">
      <form className="form flex column">
        <div className="one">
          <div className="image">
            <img src="/WhatsApp Image 2024-03-24 at 11.03.54 PM.jpeg" alt="" />
          </div>
          <div className="input-add">
            <input type="text" name="post" id="" placeholder="Start a Post" />
          </div>
        </div>
        <div className="two flex-between">
          <input type="file" name="image" id="" placeholder="Media" />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default AddSection;
