
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import ProductPage from "./landing_page/products/ProductPage";
import Pricing from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import PageNotFound from "./landing_page/PageNotFound"; // Import the PageNotFound component
import LoginPage from "./landing_page/logInPage/Login";
import ForgotPassword from "./landing_page/forgotPassword/ForgotPassword";
import ResetPassword from "./landing_page/resetPassword/ResetPassword";



function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/forgot-password" element = {<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
