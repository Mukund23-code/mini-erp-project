exports.getRiskScore = (req, res) => {
  const delayedInvoices = 4;
  const budgetOverrun = 18; // %
  const progressGap = 12;

  const score =
    delayedInvoices * 10 +
    budgetOverrun * 2 +
    progressGap * 2;

  res.json({
    project_id: 1,
    risk_score: score,
    risk_level: score > 80 ? "High" : score > 40 ? "Medium" : "Low",
  });
};
