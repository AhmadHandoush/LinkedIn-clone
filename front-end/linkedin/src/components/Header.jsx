import "../styles/header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container flex-between">
        <div className="logo flex">
          <i class="fa-brands fa-linkedin"></i>
          <div className="search ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <nav>
          <ul className="main-nav flex-items">
            <li>
              <NavLink to="/Home" className="link flex column flex-center">
                <i class="fa-solid fa-house"></i> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link flex column flex-center">
                {" "}
                <i class="fa-solid fa-briefcase"></i>
                <span>Jobs</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link flex column flex-center">
                <i class="fa-solid fa-user-group"></i> <span> My Networks</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <div className="pro-photo">
                  <img src="" alt="" />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
