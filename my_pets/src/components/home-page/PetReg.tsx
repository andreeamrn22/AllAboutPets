import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import cutu_dragu from "./img/cutu_dragu.png";
import pisu_dragu from "./img/pisu_dragu.png";
import paw1 from "./img/paw11.png";
import { Link } from "react-router-dom";

export const PetReg = () => {
  const floatVariants = {
    animate: {
      y: ["0%", "-10%", "0%"],
      transition: {
        y: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center relative z-10 mt-96 menu">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 flex justify-start">
            <motion.img
              src={cutu_dragu}
              className="absolute"
              variants={floatVariants}
              animate="animate"
              alt="cutu"
            />
            <img
              src={paw1}
              className="relative z-10 h-32 w-32 ml-64 mt-auto"
              alt="paw1"
            />
            <img
              src={paw1}
              className="absolute h-14 w-14 ml-80 mt-56 -rotate-45"
              alt="paw1"
            />
          </div>
          <div className="text-center col-span-1">
            <p className="text-5xl font-extrabold">
              Fii Alături de Prietenii Tăi cu Lăbuțe: Înregistrează-i Acum!
            </p>
            <p className="text-xl mt-20 text-gray-500">
              Înregistrarea animalului tău de companie pe site-ul nostru îți
              deschide uși către o lume de beneficii personalizate. Prin acest
              proces simplu și rapid, vei putea programa vizite la cabinete
              veterinare și vei primi sfaturi adaptate nevoilor tale și ale
              prietenului tău necuvântător.
            </p>
            <div className="flex justify-center items-center w-full mt-10">
              <button className="flex items-center bg-orange-200 rounded-full px-6 py-3 hover:scale-110">
                <p className="text-xl font-bold mr-2">
                  <Link to="/animal-registration">
                    Înregistrează-ți animăluțul
                  </Link>
                </p>
                <FaPaw />
              </button>
            </div>
          </div>
          <div className="col-span-1 flex justify-end">
            <motion.img
              src={pisu_dragu}
              className="absolute"
              variants={floatVariants}
              animate="animate"
              alt="pisu"
            />
            <img
              src={paw1}
              className="absolute h-24 w-24 -rotate-45 -translate-y-10 -translate-x-6"
              alt="paw1"
            />
            <img
              src={paw1}
              className="absolute h-14 w-14 mr-80 mt-52 -rotate-12 "
              alt="paw1"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
