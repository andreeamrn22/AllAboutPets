import React, { useState } from "react";
import { Animal_info } from "./Animal_info";
import { Animal_Breed } from "./Animal_Breed";
import { pets } from "./animalute.js";

export const AnimalRegPage = () => {
  const [numeAnimalut, setNumeAnimalut] = useState(null);
  const [animalSelectat, setAnimalSelectat] = useState(null);

  const handleAnimalSelect = (petName) => {
    setAnimalSelectat(petName);
  };

  return (
    <React.Fragment>
      <Animal_info
        pets={pets}
        numeAnimalut={numeAnimalut}
        setNumeAnimalut={setNumeAnimalut}
        animalutSelectat={animalSelectat}
        handleAnimalSelect={handleAnimalSelect}
      />
      <Animal_Breed
        pets={pets}
        animalutSelectat={animalSelectat}
        numeAnimalut={numeAnimalut}
      />
    </React.Fragment>
  );
};
