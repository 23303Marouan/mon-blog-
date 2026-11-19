import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Taches from './pages/Taches';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/taches">Taches</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Blog />} />
        <Route path="/taches" element={<Taches />} />
      </Routes>
    </BrowserRouter>
  );
}