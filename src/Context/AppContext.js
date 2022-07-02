import { createContext, useState } from "react";

const appContext = createContext({});

const AppContextProvider = (props) => {
  const [clusterName, setClusterName] = useState("Select");
  const [workflowName, setWorkflowName] = useState("Select");
  const [fixedCount, setFixedCount] = useState(0);
  const [downtime, setDowntime] = useState(0);
  const [calculatedProd, setCalculatedProd] = useState(0);
  const [arrayOfProdDetails, setArrayOfProdDetails] = useState([]);
  const [getTarget, setTarget] = useState(0);

  const ctxValue = {
    clusterName,
    setClusterName,
    workflowName,
    setWorkflowName,
    fixedCount,
    setFixedCount,
    downtime,
    setDowntime,
    calculatedProd,
    setCalculatedProd,
    arrayOfProdDetails,
    setArrayOfProdDetails,
    getTarget,
    setTarget,
  };

  return (
    <appContext.Provider value={ctxValue}>{props.children}</appContext.Provider>
  );
};

export { appContext };
export default AppContextProvider;
