import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftNav from './pages/leftNav';
import Dashboard from './pages/dashboard';
import Teachers from './pages/teachers';
import Students from './pages/students';
import Subjects from './pages/subjects';

const App = () => {
    return (
        <Router>
            <div className="d-flex">
                {/* Left Navigation */}
                <LeftNav />

                {/* Main Content Area */}
                <div className="flex-grow-1 p-3">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/subjects" element={<Subjects />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
