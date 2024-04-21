import React from "react";
import { motion } from "framer-motion";
import cutu1 from "./img/img1.png";
import pawIcon from "./img/paw11.png";

export const Hero = () => {
  return (
    <React.Fragment>
      <div className="mt-40 relative">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex items-end relative">
              <img
                src={pawIcon}
                className="absolute w-90 h-90 z-0 ml-10 transform"
                alt="Icon labuță de pisică"
              />
              <div className="py-36 px-4 md:px-0 relative z-10 menu">
                <h1 className="text-9xl md:text-7xl font-bold text-black mb-6 ">
                  Împreună pentru sănătatea și fericirea animalelor tale!
                </h1>
                <p className="text-4xl md:text-xl text-black ">
                  Descoperă soluții pentru îngrijirea animalelor tale și găsește
                  resurse utile pentru toate nevoile tale legate de acestea.
                </p>
              </div>
            </div>
            <div className="col-span-6 text-right relative">
              <motion.img
                src={cutu1}
                className="object-cover h-[70vh] w-full ml-20"
                alt="Imagine cu animale de companie"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
