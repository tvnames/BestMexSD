import { NavLink } from "react-router-dom";
import style from "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import taco1 from "./taco1.jpg";
import taco2 from "./taco2.jpg";
import taco3 from "./taco3.jpg";

function Hero({ children }) {
  return (
    // <div class="jumbotron jumbotron-fluid">
    //   <div class="container">
    //     <h1 class="display-4">{children}</h1>
    //     <p class="lead">
    //       This is a modified jumbotron that occupies the entire horizontal space
    //       of its parent.
    //     </p>
    //   </div>
    // </div>
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        autoWidth: true,
        speed: 500,
      }}
    >
      <SplideSlide>
        <img src={taco1} alt="taco shop hero" />
      </SplideSlide>
      <SplideSlide>
        <img src={taco2} alt="taco hero close up" />
      </SplideSlide>
      <SplideSlide>
        <img src={taco3} alt="taco hero close up" />
      </SplideSlide>
    </Splide>
  );
}
export default Hero;
