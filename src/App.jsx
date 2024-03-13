import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/budget" element={<Budget />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};