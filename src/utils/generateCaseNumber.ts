const generateCaseNumber = () => {
  const today = new Date();
  const datePart = today.toISOString().slice(0, 10).replace(/-/g, ""); // YYYYMMDD
  const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
  return `SR-${datePart}-${randomPart}`;
};

export { generateCaseNumber };