import React from 'react';
import './Contact.css';



class Contact extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    online: (this.props.status === "online" ? true : false)

  };
}

  render(){
    return(
      <div className="Contact">
        <img  className="avatar"src={this.props.image}/>
      <div>
      <div className="name">{this.props.name}</div>
      <div className="status">
        <p className ="status-text">{this.props.quote}</p>
        
        <span id="pastille couleur" 
         className={this.state.online ? "status-online" : "status-offline"}
         
         onClick={event => {const isOffLine = !this.state.online;
         this.setState({online : isOffLine});
        }} 
        >
        </span>

        <span id="online-offline"
      className="status-text">
      {this.state.online ? "online" : "offline"}
      
      </span>
        
      </div>
    </div>
  </div>
    );
}
}


export default Contact;
