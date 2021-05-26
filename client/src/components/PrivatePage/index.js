import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function SubmitTacoShop() {
  const auth = useAuth();
  return <h1>Submit a new spot! , {auth.user.username}!</h1>;
}

export default SubmitTacoShop;
