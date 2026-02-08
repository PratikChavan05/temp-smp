import React, { useState } from 'react';
import FormField from './FormField';
import { submitInquiry } from '../services/api';
import { validateForm } from '../utils/validation';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    studentDetails: {
      fullName: '',
      gender: '',
      address: '',
    },
    parents: {
      father: {
        name: '',
        occupation: '',
      },
      mother: {
        name: '',
        occupation: '',
      },
    },
    contact: {
      parentMobile: '',
      studentMobile: '',
      email: '',
    },
    reference: '',
    interestedStudentNote: '',
    academics: {
      ssc: {
        board: '',
        schoolName: '',
        percentageOrCGPA: '',
        mathsMarks: '',
      },
      eleventh: {
        board: '',
        collegeName: '',
        percentageOrCGPA: '',
        mathsMarks: '',
      },
    },
    specialRequirement: '',
    status: 'New',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setFormData(prev => {
      const newData = { ...prev };
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    // Validate required fields
    const requiredFields = [
      'studentDetails.fullName',
      'contact.parentMobile',
    ];
    
    const validation = validateForm(formData, requiredFields);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields correctly.' });
      
      // Scroll to top of form to show error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Alternatively, scroll to the first error field
      setTimeout(() => {
        const firstErrorField = document.querySelector('.form-field.error input, .form-field.error select, .form-field.error textarea');
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstErrorField.focus();
        }
      }, 100);
      
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await submitInquiry(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Form Submitted Successfully! Your inquiry has been received and we will contact you soon.' });
        // Reset form
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setSubmitStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  const boardOptions = [
    { value: 'State Board', label: 'State Board' },
    { value: 'CBSE', label: 'CBSE' },
    { value: 'ICSE', label: 'ICSE' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: 'var(--spacing-xl)', backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">Student Inquiry Form</h1>
          <p className="form-subtitle">Please fill in the details below to submit your inquiry</p>
        </div>

      <form onSubmit={handleSubmit}>
        {/* Student Details Section */}
        <div className="form-section">
          <h2 className="section-title">Student Details</h2>
          <div className="form-grid">
            <FormField
              label="Full Name"
              name="studentDetails.fullName"
              value={formData.studentDetails.fullName}
              onChange={handleChange}
              required
              error={errors['studentDetails.fullName']}
              placeholder="Enter full name"
            />
            
            <FormField
              label="Gender"
              name="studentDetails.gender"
              type="select"
              value={formData.studentDetails.gender}
              onChange={handleChange}
              options={genderOptions}
              error={errors['studentDetails.gender']}
            />
            
            <div className="form-grid-full">
              <FormField
                label="Address"
                name="studentDetails.address"
                type="textarea"
                value={formData.studentDetails.address}
                onChange={handleChange}
                placeholder="Enter complete address"
                error={errors['studentDetails.address']}
              />
            </div>
          </div>
        </div>

        {/* Parent Details Section */}
        <div className="form-section">
          <h2 className="section-title">Parent Details</h2>
          <div className="form-grid">
            <FormField
              label="Father's Name"
              name="parents.father.name"
              value={formData.parents.father.name}
              onChange={handleChange}
              placeholder="Enter father's name"
              error={errors['parents.father.name']}
            />
            
            <FormField
              label="Father's Occupation"
              name="parents.father.occupation"
              value={formData.parents.father.occupation}
              onChange={handleChange}
              placeholder="Enter occupation"
              error={errors['parents.father.occupation']}
            />
            
            <FormField
              label="Mother's Name"
              name="parents.mother.name"
              value={formData.parents.mother.name}
              onChange={handleChange}
              placeholder="Enter mother's name"
              error={errors['parents.mother.name']}
            />
            
            <FormField
              label="Mother's Occupation"
              name="parents.mother.occupation"
              value={formData.parents.mother.occupation}
              onChange={handleChange}
              placeholder="Enter occupation"
              error={errors['parents.mother.occupation']}
            />
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="form-section">
          <h2 className="section-title">Contact Details</h2>
          <div className="form-grid">
            <FormField
              label="Parent Mobile"
              name="contact.parentMobile"
              type="tel"
              value={formData.contact.parentMobile}
              onChange={handleChange}
              required
              placeholder="10-digit mobile number"
              error={errors['contact.parentMobile']}
            />
            
            <FormField
              label="Student Mobile"
              name="contact.studentMobile"
              type="tel"
              value={formData.contact.studentMobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              error={errors['contact.studentMobile']}
            />
            
            <FormField
              label="Email"
              name="contact.email"
              type="email"
              value={formData.contact.email}
              onChange={handleChange}
              placeholder="email@example.com"
              error={errors['contact.email']}
            />
          </div>
        </div>

        {/* Academic Details - SSC Section */}
        <div className="form-section">
          <h2 className="section-title">SSC (10th) Details</h2>
          <div className="form-grid">
            <FormField
              label="Board"
              name="academics.ssc.board"
              type="select"
              value={formData.academics.ssc.board}
              onChange={handleChange}
              options={boardOptions}
              error={errors['academics.ssc.board']}
            />
            
            <FormField
              label="School Name"
              name="academics.ssc.schoolName"
              value={formData.academics.ssc.schoolName}
              onChange={handleChange}
              placeholder="Enter school name"
              error={errors['academics.ssc.schoolName']}
            />
            
            <FormField
              label="Percentage / CGPA"
              name="academics.ssc.percentageOrCGPA"
              type="number"
              value={formData.academics.ssc.percentageOrCGPA}
              onChange={handleChange}
              placeholder="e.g., 85 or 8.5"
              error={errors['academics.ssc.percentageOrCGPA']}
            />
            
            <FormField
              label="Maths Marks"
              name="academics.ssc.mathsMarks"
              type="number"
              value={formData.academics.ssc.mathsMarks}
              onChange={handleChange}
              placeholder="Enter maths marks"
              error={errors['academics.ssc.mathsMarks']}
            />
          </div>
        </div>

        {/* Academic Details - 11th Section */}
        <div className="form-section">
          <h2 className="section-title">11th Standard Details</h2>
          <div className="form-grid">
            <FormField
              label="Board"
              name="academics.eleventh.board"
              type="select"
              value={formData.academics.eleventh.board}
              onChange={handleChange}
              options={boardOptions}
              error={errors['academics.eleventh.board']}
            />
            
            <FormField
              label="College Name"
              name="academics.eleventh.collegeName"
              value={formData.academics.eleventh.collegeName}
              onChange={handleChange}
              placeholder="Enter college name"
              error={errors['academics.eleventh.collegeName']}
            />
            
            <FormField
              label="Percentage / CGPA"
              name="academics.eleventh.percentageOrCGPA"
              type="number"
              value={formData.academics.eleventh.percentageOrCGPA}
              onChange={handleChange}
              placeholder="e.g., 85 or 8.5"
              error={errors['academics.eleventh.percentageOrCGPA']}
            />
            
            <FormField
              label="Maths Marks"
              name="academics.eleventh.mathsMarks"
              type="number"
              value={formData.academics.eleventh.mathsMarks}
              onChange={handleChange}
              placeholder="Enter maths marks"
              error={errors['academics.eleventh.mathsMarks']}
            />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="form-section">
          <h2 className="section-title">Additional Information</h2>
          <div className="form-grid">
            <FormField
              label="Reference"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              error={errors['reference']}
            />
            
            <div className="form-grid-full">
              <FormField
                label="Interested Student Note"
                name="interestedStudentNote"
                type="textarea"
                value={formData.interestedStudentNote}
                onChange={handleChange}
                placeholder="Any additional notes or interests"
                error={errors['interestedStudentNote']}
              />
            </div>
            
            <div className="form-grid-full">
              <FormField
                label="Special Requirements"
                name="specialRequirement"
                type="textarea"
                value={formData.specialRequirement}
                onChange={handleChange}
                placeholder="Any special requirements or accommodations needed"
                error={errors['specialRequirement']}
              />
            </div>
          </div>
        </div>

        {/* Alert Message */}
        {submitStatus && (
          <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="btn-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </button>
          <button type="reset" className="btn btn-secondary" onClick={() => window.location.reload()}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default InquiryForm;
