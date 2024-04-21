import React from "react";
import pisu_speriat from "./img/pisu_scarry.png";
import fundal from "./img/curves_r.png";
import Aristocrat_Vet from "./img/parteneri/Aristocrat-Vet-Logo.png";
import Gia_vet from "./img/parteneri/Gia_Vet.png";
import MediVet from "./img/parteneri/MediVet.png";
import MegaVetPet from "./img/parteneri/MegaVetPet.png";
import premium_vet from "./img/parteneri/premium-vet.png";
import quick_vet from "./img/parteneri/quick_vet.jpg";
import vetwell from "./img/parteneri/vetwell.png";
import Vetzone from "./img/parteneri/Vetzone.png";
import wave_veterinary from "./img/parteneri/wave_veterinary.png";

export const Cabinete = () => {
  const cabinete = [
    { image: Aristocrat_Vet },
    { image: Gia_vet },
    { image: MediVet },
    { image: MegaVetPet },
    { image: quick_vet },
    { image: premium_vet },
    { image: vetwell },
    { image: Vetzone },
    { image: wave_veterinary },
  ];

  return (
    <React.Fragment>
      <div className="relative menu">
        <img
          src={fundal}
          className="absolute w-screen h-screen z-0"
          alt="fundal"
        />
        <div className="absolute transform translate-y-96 right-0">
          <img
            src={pisu_speriat}
            className="w-auto h-auto"
            alt="pisu speriat"
          />
        </div>
        <div className="">
          <p className="text-4xl text-black font-bold relative z-10 text-center transform translate-y-10">
            Cabinete Veterinare din Constanța
          </p>
          <div className="grid grid-cols-5 gap-2 justify-center items-start mt-40 relative z-10">
            {cabinete.map((cabinet, index) => (
              <div key={index} className="relative">
                <img
                  src={cabinet.image}
                  className="w-40 h-auto object-cover relative z-10 mx-auto mt-3 hover:scale-150"
                  alt="cabinet"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
