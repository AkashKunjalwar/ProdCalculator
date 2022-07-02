import React, { useContext } from "react";
import { appContext } from "../../Context/AppContext";
import styles from "./Output.module.css";
import Buttons from "./Buttons/Buttons";
import Table from "./Table/Table";
import About from "./About/About";

const Output = () => {
  const { calculatedProd, arrayOfProdDetails } = useContext(appContext);

  return (
    <div className={styles.output}>
      {arrayOfProdDetails.length > 0 ? (
        <>
          {calculatedProd !== 0 ? (
            <h2>Your Prod is {calculatedProd} hours </h2>
          ) : (
            <h2>The Prod Table </h2>
          )}
          <Table />
          <Buttons />
        </>
      ) : (
        <About />
      )}
    </div>
  );
};

export default Output;
