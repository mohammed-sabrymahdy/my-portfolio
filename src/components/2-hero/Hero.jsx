import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./images/mohammed.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software developer
        </motion.h1>

        <p className="sub-title">I’m mohammed sabry, a software developer</p>

        <div className="all-icons flex">
          <div className="icon ">
            <a
              href="https://github.com/mohammed-sabrymahdy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github"></i>
            </a>
          </div>

          <div className="icon ">
            <a
              href="https://www.linkedin.com/in/mohamed-sabry-a9b3b5325/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
