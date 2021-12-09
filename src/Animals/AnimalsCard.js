import React from "react";

const AnimalsCard = (props) => {
  return (
    <div>
      <div className="card flex " style={{ width: "18rem" }}>
        <div className="card-header ">{props.name}</div>
        <img
          className="card-img-top "
          src={`http://source.unsplash.com/1600x900/?${props.name}`}
          alt="animal_image"
        />
        <div className="card-body">
          <p className="card-text">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalsCard;
