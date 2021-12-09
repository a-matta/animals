import React from "react";
import { Link } from "react-router-dom";
import "./AnimalCard.css";

const AnimalCard = (props) => {
  return (
    <div
      className="card animal-card"
      style={{ width: "18rem", margin: "1rem", padding: 0 }}
    >
      <div className="card-header text-center text-capitalize">
        {props.name}
      </div>
      <img
        className="card-img-top"
        src={`http://source.unsplash.com/1600x900/?${props.name}`}
        alt="animal_image"
      />
      <div className="card-body">
        <p className="card-text text-center">
          <Link
            style={{ textDecoration: "none", color: "#444444" }}
            to={`${props.url}/${props.name}`}
          >
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
