import React, { useState } from "react";
import { Animal_info } from "./Animal_info";
import { Animal_Breed } from "./Animal_Breed";
import { pets } from "./animalute.ts";

export const AnimalRegPage = () => {
  const [numeAnimalut, setNumeAnimalut] = useState<string | null>(null);
  const [animalSelectat, setAnimalSelectat] = useState<string | null>(null);

  const handleAnimalSelect = (petName: string) => {
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
