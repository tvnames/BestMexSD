import { useAuth } from "../../util/auth";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Navbar() {
  const auth = useAuth();
  return (
<<<<<<< HEAD
    <nav>
      <ul>
        <Nav exact to="/">
          Home
        </Nav>
        <Nav to="/private">Submit Taco Shop (Gracias!)</Nav>
        <Nav to="/login">Login</Nav>
        <Nav to="/signup">Sign Up</Nav>
        <button onClick={() => auth.logout()}>Logout</button>
      </ul>
    </nav>
=======
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
              <NavLink className="nav-link" to="/submit">Submit A Taco Shop</NavLink>
            </li>
          </ul>
          <button onClick={() => auth.logout()}>Logout</button>
        </div>
      </nav>
    </>

>>>>>>> a82a4eff27038b66175bc5476d9f8f9c2b6afddf
  );
}

export default Navbar;
