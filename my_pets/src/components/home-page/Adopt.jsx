import React from "react";
import victor from "./img/victor.png";
import lucas from "./img/lucas.png";
import hamster from "./img/hamster.png";
import iepure from "./img/iepure.png";
import { FaPaw, FaShieldAlt } from "react-icons/fa";

export const Adopt = () => {
  const pets = [
    {
      name: "Victor",
      age: "3 luni",
      gender: "Mascul",
      image: victor,
    },
    {
      name: "Lucas",
      age: "8 luni",
      gender: "Mascul",
      image: lucas,
    },
    {
      name: "Squeaky",
      age: "5 luni",
      gender: "Femela",
      image: hamster,
    },
    {
      name: "Fluffy",
      age: "7 luni",
      gender: "Femela",
      image: iepure,
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-gradient-to-t from-orange-200 to-white pb-40">
        <div className="flex flex-col justify-center items-center p-6 mt-10 menu container mx-auto relative">
          <div className="text-center mb-10">
            <p className="text-5xl font-extrabold">Adoptă Partenerul Ideal</p>
            <p className="text-gray-500 text-lg mt-5">
              Îmbrățișează bucuria și iubirea unui animal de companie prin
              adoptarea celui perfect pentru tine. În fiecare suflet animal
              există o poveste minunată și o dorință de a face parte dintr-o
              familie iubitoare. În loc să cumperi, alege să adopți un prieten
              care îți va aduce fericire și conexiune pe termen lung.
            </p>
          </div>
          <div className="flex justify-center items-center flex-nowrap">
            {pets.map((pet, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-xl rounded-3xl p-4 m-2 hover:scale-95"
                style={{ minWidth: "250px" }}
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="object-cover rounded-full shadow-xl"
                />
                <p className="text-xl font-bold mt-4">{pet.name}</p>
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <FaShieldAlt />
                  <span className="text-lg text-orange-400">
                    Vârstă: {pet.age}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <FaPaw />
                  <span className="text-lg text-orange-400">
                    Gen: {pet.gender}
                  </span>
                </div>
              </div>
            ))}
            <div className="justify-center items-center">
              <button className="text-2xl font-bold border-2 border-black rounded-3xl p-4 ml-2 bg-orange-50 hover:text-orange-400 hover:scale-95">
                VEZI MAI MULTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
