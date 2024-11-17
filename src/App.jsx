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
      <Card name="Microsoft" img="/images/logo4.png" alt="Brand Logo" type="Tech Company" email="support@microsoft.com" />
      <Card name="Meta" img="/images/logo3.png" alt="Brand Logo" type="Tech Company" email="info@meta.com" />

      <Footer />
    </div>
  )
}



export default Keeper;