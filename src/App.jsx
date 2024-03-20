import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Registerservice from "./pages/RegisterService";
import GeneratingPDF from "./pages/generatingPDF";
import ConsultService from "./pages/consultService";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/register-service" element={<Registerservice />}></Route>
            <Route path="/consult-service" element={<ConsultService />}></Route>
            <Route path="/budget/generating-pdf" element={<GeneratingPDF />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};