import React from "react";

const AnimalsCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-header text-center text-uppercase ">
        {props.name}
      </div>

      <div className="card-body">
        <p className="card-text text-center">Read More</p>
      </div>
    </div>
  );
};

export default AnimalsCard;
