import { useState } from "react";
import { useHistory, useLocation, Redirect } from "react-router";
import { useAuth } from "../../util/auth";

function LoginPage() {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Use from to redirect user back to page which preceded the login page or
  // home page. See https://reactrouter.com/web/example/auth-workflow.
  const from = location.state?.from || { pathname: "/" };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!password || password.length < 8) {
      return alert("Invalid password. Must contain at least 8 characters.");
    }
    if (!email) {
      return alert("Must provide an email address.");
    }
    await auth.login({ email, password });
    history.replace(from);
  };

  const message = auth.pending
    ? "Processing request..."
    : auth.error || "Please complete the form and click submit.";

  return (
    <div className="container-fluid">
      <h1>Login Below for Access</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          readOnly={auth.pending}
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          readOnly={auth.pending}
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <br />
        <button type="submit" disabled={auth.pending}>
          {auth.pending ? "⌛" : "Submit"}
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginPage;
