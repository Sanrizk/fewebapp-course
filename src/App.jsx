import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Input from "./Input";

function Home() {
  return <h1>Ini Halaman Home di App.jsx</h1>;
}

export default function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Beranda</Link>
          <Link to="/input">Input Data</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/input" element={<Input />} />
        </Routes>
      </Router>    
    </div>
  )
}
