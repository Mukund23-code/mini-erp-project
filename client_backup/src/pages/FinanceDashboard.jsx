import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

const FinancialDashboard = () => {
  const [cashflow, setCashflow] = useState(null);

  useEffect(() => {
    const fetchCashflow = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/cashflow", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCashflow(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCashflow();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Financial Dashboard</h1>
      {cashflow ? (
        <pre>{JSON.stringify(cashflow, null, 2)}</pre>
      ) : (
        <p>Loading cashflow...</p>
      )}
    </div>
  );
};

export default FinancialDashboard;
