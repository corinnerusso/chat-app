import React from 'react';
import './App.css';
import Contact from './components/Contacts';
import PersonList from './components/Contact-List';


function App() {
  return (
    <div className="">
     {/* <Contact image ="https://randomuser.me/api/portraits/women/76.jpg"
               name ="Alain Souchon"
               
               online />

      <Contact image = "https://randomuser.me/api/portraits/men/78.jpg"
               name ="Alex Terieur"
               offline />

      <Contact image = "https://randomuser.me/api/portraits/women/72.jpg"
               name ="Amy Molette"
               
  online />*/}
    <PersonList />
      
    </div>
  );
}

export default App;
