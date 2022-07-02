import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import styles from "../Output.module.css";

const Buttons = () => {
  const { setCalculatedProd, setArrayOfProdDetails } = useContext(appContext);

  const clickHandler = (e) => {
    const table = document.getElementById("dataTable");
    const collection = [
      ...table.getElementsByTagName("tbody").item(0).children,
    ];
    let prod = 0;
    for (let i = 1; i < collection.length; i++) {
      prod += +[...collection[i].children][5].innerHTML;
    }
    setCalculatedProd(prod);
    e.preventDefault();
  };

  const deleteAllHandler = (e) => {
    setArrayOfProdDetails([]);
    setCalculatedProd(0);
    e.preventDefault();
  };

  return (
    <div className={styles.buttons}>
      <button onClick={clickHandler} className={styles.prodButton}>
        Calculate Prod
      </button>
      <button onClick={deleteAllHandler} className={styles.deleteAllButton}>
        Clear All
      </button>
    </div>
  );
};

export default Buttons;
