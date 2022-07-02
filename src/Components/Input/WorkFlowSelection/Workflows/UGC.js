import React, { useContext } from "react";
import { appContext } from "../../../../Context/AppContext";
import workflowData from "../../../../Data/Data";

const UGC = () => {
  const { workflowName, setWorkflowName } = useContext(appContext);

  const changeHandler = (e) => {
    setWorkflowName(e.target.value);
  };

  return (
    <select id="UGC-Workflow" value={workflowName} onChange={changeHandler}>
      <option value="Select">Select</option>
      {workflowData.map(
        (workflow) =>
          workflow.clusterName === "UGC" && (
            <option value={workflow.workflow} key={workflow.workflow}>
              {workflow.workflow}
            </option>
          )
      )}
    </select>
  );
};

export default UGC;
