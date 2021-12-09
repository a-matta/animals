import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AnimalDetail = () => {
  let { animal } = useParams();
  let history = useHistory();

  return (
    <main>
      <div className="text-center mt-4">
        <h2 className="text-capitalize">{animal}</h2>
        <img
          className="img-fluid"
          style={{ maxWidth: "70%" }}
          src={`https://source.unsplash.com/1600x900/?${animal}`}
          alt={`${animal}`}
        />
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-secondary" onClick={() => history.goBack()}>
          Back to animals
        </button>
      </div>
    </main>
  );
};

export default AnimalDetail;
