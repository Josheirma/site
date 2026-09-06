import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import "./styles/global.css"
import "./App.css"

import Layout from "./components/Layout.tsx"

import Purchase from "./pages/Purchase.tsx"
import Eula from "./pages/Eula.tsx"

import Success from "./pages/Success.tsx"
import Download from "./pages/Download.tsx"
import About from "./pages/About.tsx"
import Changelog from "./pages/Changelog.tsx"
import Contacts from "./pages/Contacts.tsx"
import Docs from "./pages/Docs.tsx"
import Faq from "./pages/Faq.tsx"
import Refund from "./pages/Refund.tsx"
import Terms from "./pages/Terms.tsx"
import Privacy from "./pages/Privacy.tsx"
import Download_Page from "./pages/Download_Page.tsx"
import Features from "./pages/Features.tsx"
import Failed from "./pages/Failed.tsx"

function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <BrowserRouter>
        <Routes>

          {/* =====================================================
              NORMAL APPLICATION PAGES
              These pages use Layout (header + footer)
             ===================================================== */}

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/purchase" element={<Purchase />} />

            <Route
              path="/download_page"
              element={<Download_Page />}
            />

            <Route path="/download" element={<Download />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/features" element={<Features />} />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Route>


          {/* =====================================================
              EULA PAGE
              IMPORTANT: This is OUTSIDE Layout.
              Therefore there is NO header or footer.
             ===================================================== */}

          <Route path="/eula" element={<Eula />} />

        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  )
}

export default App

