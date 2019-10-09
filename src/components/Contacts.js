import React from 'react';
import './Contact.css';



function Contact (props){
    return(
<div className="Contact">
    <img  className="avatar"src={props.image}/>
    <div>
      <div className="name">{props.name}</div>
      <div className="status">
        <p className ="status-text">{props.quote}</p>
        <span className={props.status==="online" ? "status-online" : "status-offline"}></span>
        <span className="status-text">{props.status==="online" ? "online" : "offline"}</span>
        
      </div>
    </div>
  </div>
    )
}


export default Contact;
