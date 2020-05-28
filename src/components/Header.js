import React from "react";

function Header(props) {
    return (
      <div className="Header">
        <h1>Nasa Photo of the Day : {props.title}</h1>
        <h3>Today's Date : {props.date}</h3>
      </div>
    );
  }
  
  export default Header;