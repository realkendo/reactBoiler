import React from "react";
import Note from "./components/Note"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/card";

function Keeper(){
  return (
    <div>
      <Header />
      <Note />
      <Card name="BiteExpress" img="/images/logo2.png" alt="Brand Logo" type="Delivery Company" email="info@biteexpress.ng" />
      <Footer />
      <Display />
    </div>
  )
}

function Display(){
  return(
    <img src="/images/cctv.png" alt="image" />
  )
}



export default Keeper;