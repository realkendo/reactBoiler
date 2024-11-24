import React from "react";
// import Note from "./components/Note"
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card from "./components/card";
import contacts from "./contacts";

function createCard(contacts){
  return(
    <Card 
      name={contacts.name} 
      img={contacts.img}  
      type={contacts.type}  
      site={contacts.site}  
      colors={contacts.colors}  
    />

  )
}


function Keeper(){
  return (
    <div style={{display:"flex"}}>
      {contacts.map(createCard)}
      {/* {/* <Card name="Netflix" img="/images/netflix.png" alt="Brand Logo" type="Streaming Services" email="netflix.com" colors="red" />
      <Card name={contacts[0].name} img={contacts[0].img}  type={contacts[0].type}  site={contacts[0].site}  colors={contacts[0].colors}  />
      <Card name={contacts[1].name}  img={contacts[1].img} type={contacts[1].type}  site={contacts[1].site}  colors={contacts[1].colors}  /> */}
      {/* <Card name="Meta" img="/images/meta.png" alt="Brand Logo" type="Social Media" email="facebook.com" colors="blue" /> */}
      {/* <Card name={contacts[2].name}  img={contacts[2].img} type={contacts[2].type}  site={contacts[2].site}  colors={contacts[2].colors}  /> */} 
    </div>
  )
}


export default Keeper;