import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Blog from './pages/Blog';
import Fruits from './pages/Fruits';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" end>Blog</NavLink>
        <NavLink to="/fruits">Fruits et thèmes</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/fruits" element={<Fruits />} />
      </Routes>
    </BrowserRouter>
  );
}
