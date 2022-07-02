const clusterData = [
  { clusterName: "Select" },
  { clusterName: "Downtime" },
  { clusterName: "UGC" },
  { clusterName: "MIM" },
  { clusterName: "HA" },
];

const workflowData = [
  { clusterName: "UGC", workflow: "UGC Edits", targetCountForHour: 13.5 },
  {
    clusterName: "UGC",
    workflow: "Local Priority",
    targetCountForHour: 14,
  },
  { clusterName: "UGC", workflow: "Ring Fenced", targetCountForHour: 14 },
  { clusterName: "UGC", workflow: "LTO Edits", targetCountForHour: 21 },
  { clusterName: "UGC", workflow: "Covid", targetCountForHour: 14 },

  { clusterName: "MIM", workflow: "HTO Megamind", targetCountForHour: 10 },
  { clusterName: "MIM", workflow: "MM OQM GMB", targetCountForHour: 10 },
  {
    clusterName: "MIM",
    workflow: "MM Experiments",
    targetCountForHour: 12.5,
  },
  { clusterName: "MIM", workflow: "MM Flat", targetCountForHour: 10 },
  { clusterName: "MIM", workflow: "Yukon Phone", targetCountForHour: 10 },
  {
    clusterName: "MIM",
    workflow: "Yukon OQM Review",
    targetCountForHour: 10,
  },
  {
    clusterName: "MIM",
    workflow: "Righttime SH BH Review",
    targetCountForHour: 10,
  },

  {
    clusterName: "HA",
    workflow: "Hotel Knowledge Smart",
    targetCountForHour: 5,
  },

  {
    clusterName: "Downtime",
    workflow: "Downtime",
    targetCountForHour: 0,
  },
];

export { clusterData };
export default workflowData;
