import { useAuth } from "../../util/auth";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "./bestmexlogo.png";
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                <img src={logo} />
              </NavLink>
            </li>
            <li className="nav-item nav-control">
              <NavLink className="nav-link" to="/shop">
                Find A Taco Shop
              </NavLink>
            </li>
            <li className="nav-item nav-control">
              <NavLink className="nav-link " to="/submitshop">
                Submit A Taco Shop
              </NavLink>
            </li>
          </ul>
          {/* hide actions if user is logged in */}
        </div>
        {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
      </nav>
    </>
  );
}
// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  const history = useHistory();
  return (
    <>
      <button className="nav-buttons"
        onClick={() => auth.logout()}>Logout</button>
    </>
  );
}
function GuestNavs() {
  const history = useHistory();
  return (
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
  );
}

export default Navbar;

