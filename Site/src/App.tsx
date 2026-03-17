import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import './App.css'
import Layout from './components/Layout.tsx';
import Purchase from './pages/Purchase.tsx';
import Success from './pages/Success.tsx';
import Download from './pages/Download.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/download" element={<Download />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App