import React from "react";

const AnimalsCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-header text-center text-uppercase ">
        {props.name}
      </div>
      <img
        className="card-img-top "
        src={`http://source.unsplash.com/1600x900/?${props.name}`}
        alt="animal_image"
      />
      <div className="card-body">
        <p className="card-text text-center">Read More</p>
      </div>
    </div>
  );
};

export default AnimalsCard;
