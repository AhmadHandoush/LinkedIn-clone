import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { useState } from "react";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://localhost/linkedin/backend/login.php",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user-id", JSON.stringify(data.UserID));
        navigate("/home");
      } else {
      }

      // setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="signin flex-center">
      <div className="signin-form rounded">
        <h1>Sign in</h1>
        <p className="info">Stay updated on your professional world</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email...."
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"../../Signup"}>Forget Password?</Link>

          <button type="submit" className="join">
            Sign in
          </button>
        </form>
        <div className="hr">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <small>
          By clicking Agree & Join or Continue, you agree to the LinkedIn
        </small>
        <p className="des">
          User Agreement, Privacy Policy,<span>and</span> Cookie Policy.
        </p>
        <button className="google">
          <i class="fa-brands fa-google"></i>Continue with Google
        </button>{" "}
        <button className="google">
          <i class="fa-brands fa-apple"></i>Continue with Google
        </button>{" "}
        <button className="google">
          <i class="fa-brands fa-google"></i>Continue with Google
        </button>
        <p className="to-signup">
          New to LinkedIn?
          <span onClick={() => navigate("/signup")}>Join now</span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
