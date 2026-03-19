import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';
import './App.css'
import Layout from './components/Layout.tsx';
import Purchase from './pages/Purchase.tsx';
import Success from './pages/Success.tsx';
import Download from './pages/Download.tsx'
import About from './pages/About.tsx';
import Changelog from './pages/Changelog.tsx';
import Contacts from './pages/Contacts.tsx';
import Docs from './pages/Docs.tsx';
import Faq from './pages/Faq.tsx';
import Refund from './pages/Refund.tsx';
import Terms from './pages/Terms.tsx';
import Privacy from  './pages/Privacy.tsx';
import Download_Page from './pages/Download_Page.tsx';
////
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/download_page" element={<Download_Page/>}/>
          <Route path="/download" element={<Download />} />
          
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/docs" element={<Docs/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={< Terms/>} />
          <Route path="/privacy" element={< Privacy/>} />
          
          {/* <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App