import React, { useContext } from "react";
import { appContext } from "../../../Context/AppContext";
import Functions from "../Functions/Functions";
import styles from "../Output.module.css";

const Table = () => {
  const { setCalculatedProd, arrayOfProdDetails, setArrayOfProdDetails } =
    useContext(appContext);

  const { calculateHZN, calculateNHC, calculateCount } = Functions();

  const deleteHandler = (e) => {
    setArrayOfProdDetails((prev) =>
      prev.filter((row) => row.id !== +e.target.id)
    );
    setCalculatedProd(0);
    e.preventDefault();
  };

  return (
    <div className={styles.tableDiv}>
      <table id="dataTable" className={styles.table}>
        <tbody>
          <tr>
            <th>Cluster</th>
            <th>Workflow</th>
            <th>Fixed Count</th>
            <th>Downtime</th>
            <th>Target</th>
            <th>HZN Clocking</th>
            <th>Nearest Hour Count</th>
            <th>Count to complete an hour</th>
            <th>Average in %</th>
            <th>Del</th>
          </tr>

          {arrayOfProdDetails.map((row) => (
            <tr key={row.id}>
              <td>{row.clusterName}</td>
              <td>{row.workflowName}</td>
              <td>{row.fixedCount}</td>
              <td>{row.downtime}</td>
              <td>{row.getTarget}</td>
              <td>
                {calculateHZN(row.fixedCount, row.getTarget, row.downtime)}
              </td>
              <td>
                {calculateNHC(row.fixedCount, row.getTarget, row.downtime)}
              </td>
              <td>
                {calculateCount(row.fixedCount, row.getTarget, row.downtime)}
              </td>
              <td>
                {row.downtime !== 0
                  ? "NA"
                  : ((row.fixedCount / row.getTarget) * 100).toFixed(2)}
              </td>
              <td style={{ color: "red" }} onClick={deleteHandler} id={row.id}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
