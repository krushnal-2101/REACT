import React from 'react'
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Dcard from "./components/Dcard";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  return (
   <>
    <Navbar/>
    <Slider/>
    <Card/>
    <Dcard/>
    <Footer/>
    <Content/>
   </>
  )
}

export default App