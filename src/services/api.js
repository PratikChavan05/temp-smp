import axios from 'axios';

// Get API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5005';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit inquiry form data
 * @param {Object} inquiryData - Inquiry form data
 * @returns {Promise} API response
 */
export const submitInquiry = async (inquiryData) => {
  try {
    const response = await api.post('/api/inquiries/create', inquiryData);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || 'Failed to submit inquiry',
    };
  }
};

/**
 * Submit admission form data
 * @param {Object} admissionData - Admission form data
 * @returns {Promise} API response
 */
export const submitAdmission = async (admissionData) => {
  try {
    const response = await api.post('/api/admissions/create', admissionData);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || error.message || 'Failed to submit admission',
    };
  }
};

export default api;
