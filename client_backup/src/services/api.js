import axios from "axios";

// Replace this with your deployed backend URL
const BASE_URL = "https://your-deployed-backend.onrender.com/api";

// Auth API
export const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Finance APIs (protected routes)
export const getCashFlow = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/cashflow`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getInvoices = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/invoices`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getRiskScore = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/risk-score`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export default {
  register,
  login,
  getCashFlow,
  getInvoices,
  getRiskScore,
};
