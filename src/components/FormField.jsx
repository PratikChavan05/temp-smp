import React from 'react';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  error = '',
  options = [], // For select inputs
  placeholder = '',
  className = '',
}) => {
  const inputId = `field-${name}`;
  
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            className={`form-select ${error ? 'error' : ''} ${className}`}
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`form-textarea ${error ? 'error' : ''} ${className}`}
            required={required}
          />
        );
      
      case 'file':
        return (
          <input
            id={inputId}
            name={name}
            type="file"
            onChange={onChange}
            className={`form-input ${error ? 'error' : ''} ${className}`}
            required={required}
            accept="image/*"
          />
        );
      
      default:
        return (
          <input
            id={inputId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`form-input ${error ? 'error' : ''} ${className}`}
            required={required}
          />
        );
    }
  };
  
  return (
    <div className={`form-field ${error ? 'error' : ''}`}>
      <label htmlFor={inputId} className={`form-label ${required ? 'required' : ''}`}>
        {label}
      </label>
      {renderInput()}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default FormField;
