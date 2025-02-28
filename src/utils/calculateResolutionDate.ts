const calculateResolutionDate = (severity: string) => {
  const daysToAdd = severity === "Low" ? 5 : ( severity === "Medium" ? 3 : 1 );
  const resolutionDate = new Date();
  resolutionDate.setDate(resolutionDate.getDate() + daysToAdd);
  return resolutionDate.toISOString().split("T")[0];
};

export { calculateResolutionDate };