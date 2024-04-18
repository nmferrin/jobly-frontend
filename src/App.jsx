import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, CompanyList, CompanyDetail, JobsList, LoginForm, SignupForm, ProfileForm } from './components';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:companyHandle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<ProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App
