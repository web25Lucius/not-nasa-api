import React from "react";

function PostCard(props) {
    return (
      <div className="imgDesc">
        <img src={props.src} alt={props.title}></img>
        <p> {props.info} </p>
        <span>Special thanks to {props.thanks}</span>
      </div>
    );
  }
  
  export default PostCard;