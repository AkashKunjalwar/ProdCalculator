const Functions = () => {
  const calculateHZN = (fixedCount, target, downtime) => {
    if (downtime === 0) {
      let multiplier = fixedCount / target;
      let value = multiplier.toFixed(2) - Math.floor(multiplier);
      if (value < 0.25) return Math.floor(multiplier);
      if (value >= 0.25 && value < 0.5) return Math.floor(multiplier) + 0.25;
      if (value >= 0.5 && value < 0.75) return Math.floor(multiplier) + 0.5;
      if (value >= 0.75 && value < 1) return Math.floor(multiplier) + 0.75;
    } else return downtime;
  };

  const calculateNHC = (fixedCount, target, downtime) => {
    if (downtime !== 0) return 0;
    return calculateHZN(fixedCount, target, downtime) + 0.25;
  };

  const calculateCount = (fixedCount, target, downtime) => {
    return target * calculateNHC(fixedCount, target, downtime) - fixedCount;
  };

  return {
    calculateHZN,
    calculateNHC,
    calculateCount,
  };
};

export default Functions;
