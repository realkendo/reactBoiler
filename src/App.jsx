import React from "react";
// import Note from "./components/Note"
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card from "./components/card";


function Keeper(){
  return (
    <div style={{display:"flex"}}>
      <Card name="Google" img="/images/google.png" alt="Brand Logo" type="Search Engine" email="google.com" />
      <Card name="Meta" img="/images/meta.png" alt="Brand Logo" type="social media" email="facebbook.com" />
      <Card name="Microsoft" img="/images/microsoft.png" alt="Brand Logo" type="Operating System" email="microsoft.com" />
    </div>
  )
}


export default Keeper;