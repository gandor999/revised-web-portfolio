import { useSpring, animated } from "react-spring";
import github from "../images/github-mark.png";
import linkedIn from "../images/linkedin_icon.png";
import gmail from "../images/gmail.png";

export default function About({ preload }) {
  console.log(preload);

  const slideFromTop = useSpring({
    from: { opacity: 0, scale: 0, y: -100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: 280,
  });

  const slideFromBottom = useSpring({
    from: { opacity: 0, scale: 0, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: 280,
  });

  const logoLinks = () => (
    <animated.h1 style={slideFromTop} className="text-black" id="big-ass-name">
      <a href="https://github.com/gandor999" target="_blank">
        <img src={github} width="20" height="20" />
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/geodor-ruales-9ba246181/"
        target="_blank"
      >
        <img src={linkedIn} width="20" height="20" />
      </a>
    </animated.h1>
  );

  const bigName = () => (
    <animated.h1 style={slideFromTop} className="text-black" id="big-ass-name">
      Geodor Ruales
    </animated.h1>
  );

  const description = () => (
    <animated.section
      style={slideFromBottom}
      className="text-black align-items-center p-4 border-top about-section-level"
    >
      <p>
        Looking back I never really thought that I would like making stuff like
        this... I was usually just sulking around studying for the next exams or
        waiting for my friends to come over and just go someplace.
      </p>
      <p>
        I'm glad I picked up my old C++ compiler and just went and decided to
        learn programming again. I would have never made websites like{" "}
        <a href="https://gandor999.github.io/webportfolio/" target="_blank">
          this
        </a>{" "}
        and to say that I'm glad that I did hehe.
      </p>
      <p>Hello!</p>
      <p>
        My name is Geodor. Though you can call me Geo. Born from the city of
        Dumaguete, I'm a guy who took up the hobby programming because I wanted
        to try and make a game on an android phone at least once. <br /> I was
        able to make the{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.GandorGames.BOLA&pli=1"
          target="_blank"
        >
          game
        </a>{" "}
        but then I realized that I had a lot more to learn when it came to
        programming... <br />
        That's why I came to focus more on learning to program and put off game
        development for the time being. <br />
      </p>
    </animated.section>
  );

  return (
    <div className="font-link">
      <header className="page-about-bg about-header justify-content-center flex-column">
        {logoLinks()}
        {bigName()}
        {description()}
      </header>
    </div>
  );
}
