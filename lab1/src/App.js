import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import Success from "./pages/success/Success";



function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/success' element={<Success />} />
          </Routes>
      </Router>

  );
}

export default App;
