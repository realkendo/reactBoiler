// library imports
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Entry from "./components/Entry";

// objects import
import contacts from "./contacts";
import emojipedia from "./emojipedia";

// Keeper Component
const Keeper = () => {
  return (
    <>
      <Header />
      <div>
        <div className="flex items-center justify-center min-h-screen md:flex-row flex-col">  
          {contacts.map((contact) => (
            <Card 
              key={contact.id}
              num={contact.id}
              name={contact.name} 
              img={contact.img}  
              type={contact.type}  
              site={contact.site}  
              colors={contact.colors}  
            />
          ))}
        </div>
        <hr />
        <div>
          <h1 className="title">Emojipedia</h1>
          <div className="flex items-center justify-center">
            {emojipedia.map((emoji) => (
              <Entry
                key={emoji.id}
                num={emoji.id}
                emoji={emoji.emoji}
                name={emoji.name}
                meaning={emoji.meaning}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Keeper;
