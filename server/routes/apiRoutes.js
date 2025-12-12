const express = require("express");
const { getCashFlow, getInvoices } = require("../controllers/financeController");
const { getRiskScore } = require("../controllers/insightController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/cashflow", auth, getCashFlow);
router.get("/invoices", auth, getInvoices);
router.get("/risk-score", auth, getRiskScore);

module.exports = router;
