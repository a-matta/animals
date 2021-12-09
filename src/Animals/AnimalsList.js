import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

const AnimalsList = ({ query }) => {
  let filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      {filteredAnimals.map((item) => (
        <AnimalsCard key={item.name} name={item.name} />
      ))}
    </>
  );
};

export default AnimalsList;
