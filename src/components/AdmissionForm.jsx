import React, { useState } from 'react';
import FormField from './FormField';
import { submitAdmission } from '../services/api';
import { validateForm } from '../utils/validation';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    personalDetails: {
      fullName: '',
      address: '',
      dob: '',
      gender: '',
      caste: '',
      photoUrl: '',
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
    academics: {
      ssc: {
        board: '',
        schoolName: '',
        percentageOrCGPA: '',
        mathsMarks: '',
      },
      hsc: {
        board: '',
        collegeName: '',
        percentageOrCGPA: '',
        mathsMarks: '',
      },
    },
    admission: {
      reference: '',
      admissionDate: '',
      targetExamination: '',
    },
    standard: '',
    status: 'Pending',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      // In a real application, you would upload this to a server
      // For now, we'll just store the file name
      setFormData(prev => ({
        ...prev,
        personalDetails: {
          ...prev.personalDetails,
          photoUrl: file.name,
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    // Validate required fields
    const requiredFields = [
      'personalDetails.fullName',
      'contact.parentMobile',
      'standard',
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
      // In a real application, you would handle file upload separately
      const result = await submitAdmission(formData);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: 'Form Submitted Successfully! Your admission application has been received.' });
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

  const standardOptions = [
    { value: '11', label: 'Class 11' },
    { value: '12', label: 'Class 12' },
    { value: 'Others', label: 'Others' },
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: 'var(--spacing-xl)', backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">Student Admission Form</h1>
          <p className="form-subtitle">Please fill in the details below to complete your admission</p>
        </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="form-section">
          <h2 className="section-title">Personal Details</h2>
          <div className="form-grid">
            <FormField
              label="Full Name"
              name="personalDetails.fullName"
              value={formData.personalDetails.fullName}
              onChange={handleChange}
              required
              error={errors['personalDetails.fullName']}
              placeholder="Enter full name"
            />
            
            <FormField
              label="Date of Birth"
              name="personalDetails.dob"
              type="date"
              value={formData.personalDetails.dob}
              onChange={handleChange}
              error={errors['personalDetails.dob']}
            />
            
            <FormField
              label="Gender"
              name="personalDetails.gender"
              type="select"
              value={formData.personalDetails.gender}
              onChange={handleChange}
              options={genderOptions}
              error={errors['personalDetails.gender']}
            />
            
            <FormField
              label="Caste"
              name="personalDetails.caste"
              value={formData.personalDetails.caste}
              onChange={handleChange}
              placeholder="Enter caste"
              error={errors['personalDetails.caste']}
            />
            
            <div className="form-grid-full">
              <FormField
                label="Address"
                name="personalDetails.address"
                type="textarea"
                value={formData.personalDetails.address}
                onChange={handleChange}
                placeholder="Enter complete address"
                error={errors['personalDetails.address']}
              />
            </div>
            
            <FormField
              label="Photo"
              name="personalDetails.photoUrl"
              type="file"
              onChange={handleFileChange}
              error={errors['personalDetails.photoUrl']}
            />
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

        {/* Academic Details - HSC Section */}
        <div className="form-section">
          <h2 className="section-title">HSC (12th) Details</h2>
          <div className="form-grid">
            <FormField
              label="Board"
              name="academics.hsc.board"
              type="select"
              value={formData.academics.hsc.board}
              onChange={handleChange}
              options={boardOptions}
              error={errors['academics.hsc.board']}
            />
            
            <FormField
              label="College Name"
              name="academics.hsc.collegeName"
              value={formData.academics.hsc.collegeName}
              onChange={handleChange}
              placeholder="Enter college name"
              error={errors['academics.hsc.collegeName']}
            />
            
            <FormField
              label="Percentage / CGPA"
              name="academics.hsc.percentageOrCGPA"
              type="number"
              value={formData.academics.hsc.percentageOrCGPA}
              onChange={handleChange}
              placeholder="e.g., 85 or 8.5"
              error={errors['academics.hsc.percentageOrCGPA']}
            />
            
            <FormField
              label="Maths Marks"
              name="academics.hsc.mathsMarks"
              type="number"
              value={formData.academics.hsc.mathsMarks}
              onChange={handleChange}
              placeholder="Enter maths marks"
              error={errors['academics.hsc.mathsMarks']}
            />
          </div>
        </div>

        {/* Admission Details Section */}
        <div className="form-section">
          <h2 className="section-title">Admission Details</h2>
          <div className="form-grid">
            <FormField
              label="Standard"
              name="standard"
              type="select"
              value={formData.standard}
              onChange={handleChange}
              options={standardOptions}
              required
              error={errors['standard']}
            />

            <FormField
              label="Reference"
              name="admission.reference"
              value={formData.admission.reference}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              error={errors['admission.reference']}
            />
            
            <FormField
              label="Admission Date"
              name="admission.admissionDate"
              type="date"
              value={formData.admission.admissionDate}
              onChange={handleChange}
              error={errors['admission.admissionDate']}
            />
            
            <FormField
              label="Target Examination"
              name="admission.targetExamination"
              value={formData.admission.targetExamination}
              onChange={handleChange}
              placeholder="e.g., JEE, NEET, CET"
              error={errors['admission.targetExamination']}
            />
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
              'Submit Admission'
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

export default AdmissionForm;
