import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tulum from './pages/Tulum';
import PlayaDelCarmen from './pages/PlayaDelCarmen';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tulum" element={<Tulum />} />
        <Route path="/playadelcarmen" element={<PlayaDelCarmen />} />
      </Routes>
    </Router>
  );
}


export default App;
