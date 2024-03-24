import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/signin.css";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="signin flex-center">
      <div className="signin-form rounded">
        <h1>Sign in</h1>
        <p className="info">Stay updated on your professional world</p>
        <form>
          <input type="text" name="email" placeholder="Email or Phone" />

          <input type="password" name="password" placeholder="Password" />
          <Link to={"../../Signup"}>Forget Password?</Link>

          <button className="join">Sign in</button>
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
