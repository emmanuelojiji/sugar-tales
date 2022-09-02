import "./Homepage.scss";
import billboardImg from "../Media/billboard-img.png";
import logo from "../Media/logo.svg"

const Homepage = () => {
  return (
    <div className="Homepage">
      <header>
        <div className="page-width">
          <img src={logo} className="logo"></img>
          <h3>
            Sugar
            <br />
            Tales
          </h3>
        </div>
      </header>

      <section className="billboard">
        <div className="page-width">
          <div>
            <h1 className="animate__animated animate__backInDown">
              Interactive stories for children
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi
              arcu, iaculis ut sagittis a, aliquam vel tortor. Quisque orci
              mauris, lobortis lacinia neque vitae,
            </p>
            <button>
              Start <i class="fa-solid fa-play"></i>
            </button>
          </div>

          <div className="image-container">
            <img src={billboardImg}></img>
          </div>
        </div>
      </section>


      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <style></style>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 112.39285714285714,184.39285714285714 224.78571428571428,168.78571428571428 360,158 C 495.2142857142857,147.21428571428572 653.2499999999999,141.25 772,163 C 890.7500000000001,184.75 970.2142857142858,234.21428571428572 1075,245 C 1179.7857142857142,255.78571428571428 1309.892857142857,227.89285714285714 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#7237c5"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <section className="test">
        <h1>Hello</h1>
      </section>
    </div>
  );
};

export default Homepage;
