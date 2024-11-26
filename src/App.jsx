import React from "react";
// import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Emoji from "./components/Emoji";

// objects import
import contacts from "./contacts";
import emojis from "./emoji";


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
    <>
      <Header />
        <div className="flex items-center justify-center min-h-screen md:flex-row flex-col">  
          {contacts.map(createCard)}
        </div>
        <hr />
        <Emoji />
      <Footer />
    </>
  )
}


export default Keeper;