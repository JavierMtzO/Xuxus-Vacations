import React from 'react';
import Header from './components/Header'
import HomeComponent from './components/HomeComponent';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Header
                idChecker="true"
            />
            <HomeComponent />
        </div>
    );
}

export default HomePage;
