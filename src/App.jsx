import React from "react";
// import Note from "./components/Note";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card from "./components/Card";
import contacts from "./contacts";


function createCard(contacts){
  return(
    <Card 
      key={contacts.id}
      num={contacts.id}
      name={contacts.name} 
      img={contacts.img}  
      type={contacts.type}  
      site={contacts.site}  
      colors={contacts.colors}  
    />
  )
}


const Keeper = () =>{
  return (
    <div style={{display:"flex"}}>
      {contacts.map(createCard)}
    </div>
  )
}


export default Keeper;