import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup flex-center">
      <div className="signup-form rounded">
        <form>
          <label>Email</label>
          <input type="text" name="email" />
          <label> Password(6+ characters)</label>
          <input type="password" name="password" />
          <small>
            By clicking Agree & Join or Continue, you agree to the LinkedIn
          </small>
          <p className="des">
            User Agreement, Privacy Policy,<span>and</span> Cookie Policy.
          </p>
          <button className="join">Agree & Join</button>
        </form>
        <div className="hr">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <button className="google">
          <i class="fa-brands fa-google"></i>Continue with Google
        </button>
        <p className="to-login">
          Already on LinkedIn?
          <span className="go-log" onClick={() => navigate("../../Signin")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
