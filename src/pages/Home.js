import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const popOut = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
    delay: 280,
  });

  return (
    <div className="font-link">
      <header className="page-cloud-bg hello justify-content-center flex-column text-center p-2 container-fluid">
        <animated.section
          style={popOut}
          className="d-flex justify-content-center mb-4 p-3 flex-column welcome-section"
        >
          <div
            id="welcome-wrapper"
            className="rounded-pill container-fluid border border-2 border-dark"
          >
            <h1 className="welcome">
              <strong>Welcome</strong>
            </h1>
          </div>
          <div id="" className="pt-4">
            <p className="home-text">To Geodor's web portfolio</p>
          </div>
        </animated.section>

        <animated.section style={popOut} className="mt-4 home-text p-4">
          <p>
            Take a look at the stuff he's done{" "}
            <Link to="/personal-web-portfolio/projects" className="text-dark">
              here
            </Link>{" "}
            or about{" "}
            <Link to="/personal-web-portfolio/aboutme" className="text-dark">
              him
            </Link>
          </p>
        </animated.section>
      </header>
    </div>
  );
}
