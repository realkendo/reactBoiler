import React from "react";
// import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Entry from "./components/Entry";

// objects import
import contacts from "./contacts";
import emojipedia from "./emojipedia";


// function to create a contact card 
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


// function to create an emoji card
function createEmoji(emojipedia){
  return (
    <>
      <Entry
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    </>
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
        <div>
          <h2>Emojipedia</h2>
          <div>
            {emojipedia.map(createEmoji)}
          </div>
        </div>
      <Footer />
    </>
  )
}


export default Keeper;