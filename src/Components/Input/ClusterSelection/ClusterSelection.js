import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import { clusterData } from "../../../Data/Data";
import styles from "../Input.module.css";

const ClusterSelection = () => {
  const { clusterName, setClusterName } = useContext(appContext);

  const changeHandler = (e) => {
    setClusterName(e.target.value);
  };

  return (
    <div className={styles.clusterSelection}>
      <label>Cluster: </label>
      <select id="selectedCluster" value={clusterName} onChange={changeHandler}>
        {clusterData.map((cluster) => (
          <option value={cluster.clusterName} key={cluster.clusterName}>
            {cluster.clusterName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClusterSelection;
