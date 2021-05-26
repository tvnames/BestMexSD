import { useAuth } from "../../util/auth";
import Nav from "./Nav";

function Navbar() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <Nav exact to="/">
          Home
        </Nav>
        <Nav to="/private">Private</Nav>
        <Nav to="/login">Login</Nav>
        <Nav to="/signup">Sign Up</Nav>
        <button onClick={() => auth.logout()}>Logout</button>
      </ul>
    </nav>
  );
}

export default Navbar;
