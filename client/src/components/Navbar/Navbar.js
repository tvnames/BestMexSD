import { useAuth } from "../../util/auth";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Navbar() {
  const auth = useAuth();
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <i>"LogoHere"</i>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">Find A Taco Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/submitshop">Submit A Taco Shop</NavLink>
            </li>
          </ul>
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
        {auth.isLoggedIn() ? <UserNavs auth={auth} /> : <GuestNavs />}
      </nav>
    </>

  );
}

// Renders navigation controls intended for authenticated users
function UserNavs({ auth }) {
  return (
    <>
      <Nav to="/private">UserNavs</Nav>
      <button onClick={() => auth.logout()}>Logout</button>
    </>
  );
}

function GuestNavs() {
  return (
    <>
      <Nav to="/login">Login</Nav>
      <Nav to="/signup">Sign Up</Nav>
    </>
  );
}

export default Navbar;
