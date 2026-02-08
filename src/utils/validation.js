/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
    if (!email) return true; // Optional field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone format
 */
export const isValidPhone = (phone) => {
    if (!phone) return false; // Required field
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
};

/**
 * Validate percentage or CGPA
 * @param {number} value - Percentage or CGPA value
 * @param {boolean} isCGPA - True if validating CGPA (0-10), false for percentage (0-100)
 * @returns {boolean} True if valid
 */
export const isValidScore = (value, isCGPA = false) => {
    if (!value && value !== 0) return true; // Optional field
    const num = parseFloat(value);
    if (isNaN(num)) return false;

    if (isCGPA) {
        return num >= 0 && num <= 10;
    }
    return num >= 0 && num <= 100;
};

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @returns {boolean} True if field has a value
 */
export const isRequired = (value) => {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    return value !== null && value !== undefined && value !== '';
};

/**
 * Validate form data
 * @param {Object} formData - Form data to validate
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} Validation result with errors object
 */
export const validateForm = (formData, requiredFields = []) => {
    const errors = {};

    // Check required fields
    requiredFields.forEach(field => {
        const value = getNestedValue(formData, field);
        if (!isRequired(value)) {
            errors[field] = 'This field is required';
        }
    });

    // Validate email if present
    if (formData.contact?.email && !isValidEmail(formData.contact.email)) {
        errors['contact.email'] = 'Invalid email format';
    }

    // Validate phone numbers
    if (formData.contact?.parentMobile && !isValidPhone(formData.contact.parentMobile)) {
        errors['contact.parentMobile'] = 'Invalid phone number (10 digits starting with 6-9)';
    }

    if (formData.contact?.studentMobile && formData.contact.studentMobile.trim() && !isValidPhone(formData.contact.studentMobile)) {
        errors['contact.studentMobile'] = 'Invalid phone number (10 digits starting with 6-9)';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

/**
 * Get nested object value by path
 * @param {Object} obj - Object to get value from
 * @param {string} path - Dot-separated path (e.g., 'contact.email')
 * @returns {any} Value at path
 */
const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
};
