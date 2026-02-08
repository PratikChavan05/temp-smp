import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import InquiryForm from './components/InquiryForm';
import AdmissionForm from './components/AdmissionForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inquiry" element={<InquiryForm />} />
            <Route path="/admission" element={<AdmissionForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;