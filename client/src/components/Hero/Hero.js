import { NavLink } from "react-router-dom";
import style from "./style.css";

function Hero({ children }) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{children}</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
    );
}
export default Hero;
