import React from "react";
import "./Exercise13_2.css";

function Card({ name, email, cell, picture }) {
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Cell: {cell}</p>
      <img src={picture}></img>
    </div>
  );
}

export default Card;
