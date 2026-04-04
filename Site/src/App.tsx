import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // 👈 ADD THIS
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
import Features from './pages/Features.tsx';
import Failed from './pages/Failed.tsx';

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AblCgQ0JJTi66wvx4z1lbxJXYCnFI4j4hsN_1dGrpmR_z7fEz05I48R4MGO-66qT08W5J6s_lsWa8UXe", // 🔑 replace this
        currency: "USD",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/download_page" element={<Download_Page/>}/>
            <Route path="/download" element={<Download />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/docs" element={<Docs/>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/features" element={<Features/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  )
}

export default App;