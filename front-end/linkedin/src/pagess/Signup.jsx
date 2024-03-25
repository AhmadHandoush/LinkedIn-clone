import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://localhost/linkedin/backend/signup.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      setTimeout(() => navigate("/"), 2000);
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup flex-center">
      <div className="signup-form rounded">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>

          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label> Password(6+ characters)</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>
            By clicking Agree & Join or Continue, you agree to the LinkedIn
          </small>
          <p className="des">
            User Agreement, Privacy Policy,<span>and</span> Cookie Policy.
          </p>
          <button type="submit" className="join">
            Agree & Join
          </button>
          {success && <p className="success"> userAdded Successfully</p>}
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
          <span className="go-log" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
