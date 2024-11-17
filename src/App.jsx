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
    </div>
  )
}



export default Keeper;