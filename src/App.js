import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Chat from "./pages/chat";



function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/about" exact element={<About></About>}></Route>
        <Route path="/contact-us" exact element={<ContactUs></ContactUs>}></Route>
        <Route path="/join-chat" exact element={<Chat></Chat>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
