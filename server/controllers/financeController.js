exports.getCashFlow = (req, res) => {
  res.json({
    income: 120000,
    expenses: 90000,
    netCashFlow: 30000
  });
};

exports.getInvoices = (req, res) => {
  res.json([
    { id: 1, customer: "ABC Infra", amount: 50000, status: "Pending" },
    { id: 2, customer: "XYZ Builders", amount: 75000, status: "Paid" }
  ]);
};
