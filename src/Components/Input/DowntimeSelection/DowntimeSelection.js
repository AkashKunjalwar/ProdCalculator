import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import styles from "../Input.module.css";

const DowntimeSelection = () => {
  const { downtime, setDowntime } = useContext(appContext);

  const changeHandler = (e) => {
    setDowntime(+e.target.value);
  };

  return (
    <div className={styles.downtimeSelection}>
      <label>Downtime: </label>
      <input
        type="number"
        min="0"
        step="0.25"
        value={downtime}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DowntimeSelection;
