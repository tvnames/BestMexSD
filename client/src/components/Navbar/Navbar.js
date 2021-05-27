import { useAuth } from "../../util/auth";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Navbar() {
  const auth = useAuth();
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <i>"LogoHere"</i>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Find A Taco Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submit">
                Submit A Taco Shop
              </NavLink>
            </li>
          </ul>
          <button className="nav-buttons" onClick={() => auth.logout()}>
            Logout
          </button>
          {/* hide actions if user is logged in */}
          {!auth.isLoggedIn() && (
            <>
              <button
                className="nav-buttons"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
              <button
                className="nav-buttons"
                onClick={() => history.push("/signup")}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </nav>
    </>

  );
}

export default Navbar;
