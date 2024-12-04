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
      <div className="p-8 bg-gray-100">
        {/* Contacts Section */}
        <div className="mb-8">
          <h1 className="text-center text-2xl font-bold mb-4 title">Contact Cards</h1>
          <div className="">
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
        </div>

        {/* Emojipedia Section */}
        <hr className="border-t-2 border-gray-300 my-8" />
        <div>
          <h1 className="text-center text-2xl font-bold mb-4 title">Emojipedia 😎</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
