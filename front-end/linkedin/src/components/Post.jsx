import "../styles/home.css";

function Post() {
  return (
    <div className="post">
      <div className="top flex">
        <div className="user-image">
          <img src="" alt="" />
        </div>
        <div className="infos">
          <h3>Ahmad Handoush</h3>
          <small>Full stack web developer</small>
          <small>2days ago</small>
        </div>
      </div>
      <div className="post-info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          provident repellendus libero temporibus et ab delectus tempore
          ratione, facilis eum cupiditate nostrum quam consequuntur magni porro
          aut exercitationem, molestias nihil!
        </p>
        <div className="post-image">
          <img src="/WhatsApp Image 2024-03-24 at 11.03.54 PM.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Post;
