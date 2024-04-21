import React from "react";
import { FaPaw, FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import hello_pisu from "./img/hello_pisu.png";
import logo from "./img/logo1.png";

export const Bottom = () => {
  const links = [
    { title: "Acasă", url: "/" },
    { title: "Înregistrează-ți animalul", url: "/animal-registration" },
    { title: "Cabinete Veterinare", url: "/veterinary-clinics" },
    { title: "Centre de adopție", url: "/adoption-centers" },
    { title: "Quiz", url: "/quiz" },
  ];
  return (
    <React.Fragment>
      <div className="flex justify-center items-end h-screen">
        <div className="h-3/5 w-full bg-indigo-300 absolute flex flex-col">
          <img
            src={hello_pisu}
            className="h-56 w-56 -top-60 absolute left-1/2 transform -translate-x-1/2"
            alt="hello_pisu"
          />
          <div className="mx-auto rounded-full bg-orange-200 border-2 border-black py-8 px-7 relative z-10 -top-20 w-2/4 shadow-xl ">
            <div className="menu">
              <p className="flex w-1/2 ml-10 mt-5 text-4xl font-semibold">
                Abonează-te la newsletter-ul nostru
              </p>
              <div className="ml-auto rounded-full bg-white border-2 border-black py-2 relative z-10 w-2/4 -top-14 flex items-center justify-end">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="rounded-xl py-2 flex-grow ml-3 focus:outline-none"
                />
                <button className="bg-orange-200 font-bold py-2 px-4 rounded-full hover:scale-90 flex items-center mr-4">
                  <div className="flex flex-row justify-center items-center gap-x-2 ">
                    Abonare
                    <FaPaw className="ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen transform -translate-y-10">
            <div className="grid grid-cols-2 ">
              <div className="col-span-1 flex flex-col mb-14">
                <img
                  src={logo}
                  className="w-[200px] h-auto relative z-10"
                  alt="logo"
                />
                <div className="flex r mt-2">
                  <FaHome className="mt-2" />
                  <p className="ml-2">
                    Ștefăniță Vodă nr. 35, Constanța, România
                  </p>
                </div>
                <div className="flex mt-2">
                  <FaPhone className="mt-2" />
                  <p className="ml-2">(+40)73 282 132</p>
                </div>

                <div className="flex mt-2">
                  <FaEnvelope className="mt-2" />
                  <p className="ml-2">all.about.pets@outlook.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 menu mb-10">
              <p className="text-xl font-semibold">Legături Rapide</p>
              {links.map((link, index) => (
                <div key={index} className="text-wrap mt-3">
                  <Link
                    className="text-lg text-black hover:text-purple-500 cursor-pointer"
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
