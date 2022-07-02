import React, { useContext } from "react";
import { appContext } from "../../Context/AppContext";
import styles from "./Footer.module.css";

const Footer = () => {
  const { clusterName, workflowName, arrayOfProdDetails } =
    useContext(appContext);
  return (
    <footer
      className={
        (clusterName === "Select" ||
          clusterName === "" ||
          workflowName === "Select" ||
          workflowName === "") &&
        arrayOfProdDetails.length < 1
          ? styles.footerByDefault
          : styles.footer
      }
    >
      <p>
        Copyright <span>&copy;</span> KnowYourProd {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
