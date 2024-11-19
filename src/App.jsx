import React from "react";
// import Note from "./components/Note"
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card from "./components/card";


function Keeper(){
  return (
    <div style={{display:"flex"}}>
      {/* <Card name="Netflix" img="/images/netflix.png" alt="Brand Logo" type="Streaming Services" email="netflix.com" colors="red" /> */}
      <Card name="Google" img="/images/google.png" alt="Brand Logo" type="Search Engine" site="google.com" colors="green" />
      <Card name="Apple" img="/images/apple.png" alt="Brand Logo" type="Personal Computers" site="apple.org" colors="orange" />
      {/* <Card name="Meta" img="/images/meta.png" alt="Brand Logo" type="Social Media" email="facebook.com" colors="blue" /> */}
      <Card name="Microsoft" img="/images/microsoft.png" alt="Brand Logo" type="Operating System" site="microsoft.com" colors="red" />
    </div>
  )
}


export default Keeper;