import AddSection from "../components/AddSection";
import Post from "../components/Post";
import "../styles/main.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <AddSection />
        <section className="posts">
          <Post />
        </section>
      </div>
    </div>
  );
}

export default Home;
