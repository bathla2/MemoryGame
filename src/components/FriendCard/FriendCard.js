import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <span onClick={() => props.clickedCard(props.id)} className="memory" href = "#">
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src= {props.image} /> 
    </div>
  <div className="content">
    <ul>
      <li>
        <strong>Name:</strong> {props.name}
      </li>
    </ul>
    </div>
  </div>
  </span>
);

export default FriendCard;
