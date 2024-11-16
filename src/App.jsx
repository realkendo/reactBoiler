import React from "react";
import Note from "./components/Note"
import Header from "./components/Header";
import Footer from "./components/Footer";

function Keeper(){
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  )
}

export default Keeper;