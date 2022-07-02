import React, { useContext } from "react";
import { appContext } from "../../Context/AppContext";
import ClusterSelection from "./ClusterSelection/ClusterSelection";
import FixedCountSelection from "./FixedCountSelection/FixedCountSelection";
import WorkFlowSelection from "./WorkFlowSelection/WorkflowSelection";
import styles from "./Input.module.css";
import DowntimeSelection from "./DowntimeSelection/DowntimeSelection";

const Input = () => {
  const {
    clusterName,
    setClusterName,
    workflowName,
    setWorkflowName,
    fixedCount,
    setFixedCount,
    downtime,
    setDowntime,
    getTarget,
    setTarget,
    setArrayOfProdDetails,
    setCalculatedProd,
  } = useContext(appContext);

  const submitHandler = (e) => {
    if ((getTarget !== 0 && fixedCount !== 0) || downtime !== 0) {
      setArrayOfProdDetails((prev) => [
        ...prev,
        {
          id: Math.random(),
          clusterName,
          workflowName,
          fixedCount: +fixedCount,
          downtime: +downtime,
          getTarget: +getTarget,
        },
      ]);
      setClusterName("Select");
      setWorkflowName("Select");
      setFixedCount(0);
      setDowntime(0);
      setTarget(0);
      setCalculatedProd(0);
    }

    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.inputs}>
        <ClusterSelection />
        {clusterName !== "Select" && <WorkFlowSelection />}
        {clusterName !== "Select" &&
          clusterName !== "Downtime" &&
          workflowName !== "Select" &&
          workflowName !== "Downtime" && <FixedCountSelection />}
        {clusterName === "Downtime" && workflowName === "Downtime" && (
          <DowntimeSelection />
        )}
      </div>
      {clusterName !== "Select" && workflowName !== "Select" && (
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default Input;
