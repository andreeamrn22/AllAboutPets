import React from "react";
import { animal } from "./animalute";

export const Animal_info: React.FC<{
  pets: animal[];
  numeAnimalut: string | null;
  setNumeAnimalut: Function;
  handleAnimalSelect: Function;
  animalutSelectat: string | null; // numele animalutului selectat
}> = ({
  pets,
  numeAnimalut,
  setNumeAnimalut,
  handleAnimalSelect,
  animalutSelectat,
}) => {
  const handleInputChange = (e: any) => {
    setNumeAnimalut(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="bg-orange-200 h-screen w-full flex flex-col items-center justify-center menu ">
        <h1 className="text-5xl font-extrabold text-center mb-10">
          Profilul animalului tău
        </h1>
        <div className="w-full max-w-2xl">
          <div className="mb-4">
            <label htmlFor="numeAnimalut" className="block text-2xl mb-2">
              Care este numele animalului tău?
            </label>
            <input
              id="numeAnimalut"
              type="text"
              placeholder="Nume"
              className="w-full px-4 py-3 rounded-md mt-2 focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-10">
            <div className="text-2xl mb-4">
              Ce tip de animal este <strong>{numeAnimalut}</strong>?
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {pets.map((pet) => (
                <div
                  key={pet.name}
                  className={`flex flex-col items-center p-4 border-2 border-gray-400 hover:border-blue-900 rounded-3xl shadow-md hover:scale-95 cursor-pointer ${
                    animalutSelectat === pet.name
                      ? "border-4 border-green-800"
                      : ""
                  }`}
                  onClick={() => handleAnimalSelect(pet.name)}
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-32 h-32 mb-3"
                  />
                  <span>{pet.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
