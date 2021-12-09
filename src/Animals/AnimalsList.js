import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

const AnimalsList = () => {
  return (
    <>
      {animals.map((item) => (
        <AnimalsCard key={item.name} name={item.name} />
      ))}
    </>
  );
};

export default AnimalsList;
