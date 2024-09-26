import React from "react";
import Note from "./components/Note"
import Header from "./components/Header";
import Footer from "./components/Footer";


// let data = new Object();
// data = {
//   "name": "ken",
//   "age": 30,
//   "class":"1st"
// } 


function Keeper(){
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  )
}

export default Keeper;