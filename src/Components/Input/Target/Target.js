import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import styles from "../Input.module.css";
import workflowData from "../../../Data/Data";

const Target = () => {
  const { getTarget, setTarget, workflowName } = useContext(appContext);

  const changeHandler = (e) => {
    setTarget(e.target.value);
  };

  return (
    <div className={styles.fixedCountSelection}>
      <label>Hour Target: </label>
      {workflowName !== "Downtime" && workflowName !== "Select" && (
        <select id="targetSelection" value={getTarget} onChange={changeHandler}>
          <option value="Select">Select</option>
          {workflowData.map(
            (workflow) =>
              workflow.workflow === workflowName && (
                <option
                  key={workflow.targetCountForHour}
                  value={workflow.targetCountForHour}
                >
                  {workflow.targetCountForHour}
                </option>
              )
          )}
        </select>
      )}
    </div>
  );
};

export default Target;
