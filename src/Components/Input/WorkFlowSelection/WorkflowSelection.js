import React, { useContext } from "react";
import UGC from "./Workflows/UGC";
import MIM from "./Workflows/MIM";
import HA from "./Workflows/HA";
import { appContext } from "../../../Context/AppContext";
import styles from "../Input.module.css";
import Downtime from "./Workflows/Downtime";

const WorkFlowSelection = () => {
  const { clusterName } = useContext(appContext);

  return (
    <div className={styles.workflowSelection}>
      <label>Workflow: </label>
      {clusterName === "UGC" && <UGC />}
      {clusterName === "MIM" && <MIM />}
      {clusterName === "HA" && <HA />}
      {clusterName === "Downtime" && <Downtime />}
    </div>
  );
};

export default WorkFlowSelection;
