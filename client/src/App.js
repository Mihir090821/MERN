import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Message from './components/Message';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Message /> */}
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path='*' element={< Errorpage />} />
        {/* </Switch> */}
      </Routes>
    </>
  )
}

export default App