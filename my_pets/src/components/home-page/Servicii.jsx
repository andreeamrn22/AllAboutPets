import React from "react";
import { FaPaw } from "react-icons/fa";
import pet_reg from "./img/reg-pet.jpg";
import pet_med from "./img/pet_med.jpg";
import pet_adoption from "./img/animal_center.png";
import pet_quiz from "./img/Quiz_animals.jpg";
import fundal from "./img/curves.png";

// Stilurile pentru caseta colorată
const boxStyle = {
  backgroundColor: "#FFE4C4",
  height: "100%",
  width: "100%",
  position: "absolute",
  borderRadius: "20px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

export const Servicii = () => {
  const servicesData = [
    {
      image: pet_reg,
      title: "Înregistrează-ți animăluțul",
      Text: "Înregistrați-vă animalul de companie și mențineți o evidență detaliată a sănătății și bunăstării acestuia pe platforma noastră specializată.",
    },
    {
      image: pet_med,
      title: "Cabinete veterinare",
      Text: "Accesați rețeaua noastră de cabinete veterinare de încredere pentru servicii medicale profesionale și consultanță specializată pentru prietenul dvs. necuvântător.",
    },
    {
      image: pet_adoption,
      title: "Centre de adopție",
      Text: "Explorați diversele opțiuni de adopție din centrele noastre partenere, unde puteți găsi animale de toate rasele și vârstele, gata să devină membri iubiți ai familiei dumneavoastră.",
    },
    {
      image: pet_quiz,
      title: "Ce animal ți se potivește?",
      Text: "Aflați ce animal de companie vi se potrivește cel mai bine cu stilul dvs. de viață și personalitatea dumneavoastră prin intermediul quiz-ului nostru interactiv de compatibilitate.",
    },
  ];

  return (
    <div className="relative mt-40 menu ">
      <img
        src={fundal}
        className="absolute w-screen h-screen z-0"
        alt="Background"
      />
      <h2 className="text-3xl text-purple-500 font-bold relative z-10 text-center mt-20 transform translate-y-28">
        Servicii
      </h2>
      <p className="text-2xl text-black font-bold relative z-10 text-center mt-10 transform translate-y-20">
        Ce putem să îți oferim
      </p>
      <div className="grid grid-cols-2 gap-2 justify-center items-start mt-20 relative z-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-start justify-start mb-8 relative mx-5 px-2 p-4 "
          >
            <div style={boxStyle}></div>
            <img
              src={service.image}
              alt={service.title}
              className="w-48 h-48 object-cover rounded-xl shadow-md mr-4 relative z-10 mt-10 ml-7 "
            />
            <div>
              <p className="text-xl font-bold mt-10 relative z-10 ">
                {service.title}
              </p>
              <p className="text-black py-6 relative z-10 ">{service.Text}</p>
              <button className="text-xl font-bold hover:font-extrabold rounded-full bg-orange-200 px-6 py-2 relative z-10 hover:scale-110">
                <div className="flex flex-row justify-center items-center gap-x-2 ">
                  Mai multe
                  <FaPaw />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
