
// import './App.css'
import PrivateRoutes from "./routes/PrivateRoutes"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";



function App() {
  

  
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRoutes>
                  <Home />
                </PrivateRoutes>
              }
            />
            {/* Add more routes here as needed */}
          </Routes>
          {/* You can add a footer or other components here if needed */}
        </BrowserRouter>
     
      {/* You can add a header or other components here if needed */}
    </>
  );
}

export default App
