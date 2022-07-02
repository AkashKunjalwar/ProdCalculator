import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import styles from "../Input.module.css";
import Target from "../Target/Target";

const FixedCountSelection = () => {
  const { fixedCount, setFixedCount } = useContext(appContext);

  const changeHandler = (e) => {
    setFixedCount(+e.target.value);
  };

  return (
    <>
      <Target />
      <div className={styles.fixedCountSelection}>
        <label>Fixed Count: </label>
        <input
          type="number"
          min="0"
          value={fixedCount}
          onChange={changeHandler}
        />
      </div>
    </>
  );
};

export default FixedCountSelection;
