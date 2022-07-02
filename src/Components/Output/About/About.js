import React from "react";
import styles from "../Output.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h3>About Us</h3>
      <p>
        This is the first version of the application "KNOW YOUR PROD". There are
        yet many changes that are required to make this application work in any
        device. However, it is to be noted that this is a web application. As
        mentioned earlier, the application is being developed to be able to
        support mobile devices or any other non-desktop devices. The contents in
        the application might distort based on browser zooming. The application
        works in an expected manner when the browser zoom is in between 70% to
        130% with best at 100% and the width of the screen is between 760px to
        1280px.
      </p>
    </div>
  );
};

export default About;
