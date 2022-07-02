import React, { useContext } from "react";
import workflowData from "../../../../Data/Data";
import { appContext } from "../../../../Context/AppContext";

const MIM = () => {
  const { workflowName, setWorkflowName } = useContext(appContext);

  const changeHandler = (e) => {
    setWorkflowName(e.target.value);
  };

  return (
    <select id="MIM-Workflow" value={workflowName} onChange={changeHandler}>
      <option value="Select">Select</option>
      {workflowData.map(
        (workflow) =>
          workflow.clusterName === "MIM" && (
            <option value={workflow.workflow} key={workflow.workflow}>
              {workflow.workflow}
            </option>
          )
      )}
    </select>
  );
};

export default MIM;
