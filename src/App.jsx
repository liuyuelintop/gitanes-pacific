import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Footer from "./components/Footer"
import Header from "./components/navigation/Header"

function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full ">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto ">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
