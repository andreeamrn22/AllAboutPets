import React from "react";
import logo from "./img/logo1.png";
import { Link } from "react-router-dom";

export const Header: React.FC<{ scrollSpreLogin: Function }> = ({
  scrollSpreLogin,
}) => {
  const links = [
    { title: "Acasă", url: "#" },
    { title: "Înregistrează-ți animalul", url: "/animal-registration" },
    { title: "Cabinete Veterinare", url: "/veterinary-clinics" },
    { title: "Centre de adopție", url: "/adoption-centers" },
    { title: "Quiz", url: "/quiz" },
  ];
  return (
    <React.Fragment>
      <div className="h-[90px] bg-[#F2DEBD]">
        <div className="py-4 px-6 flex justify-between items-center">
          <div className="flex items-center z-40">
            <div className="logo mr-6 mt-2 hover:scale-110 cursor-pointer">
              <img src={logo} className="w-[200px] h-auto" alt="Logo" />
            </div>
            <div className="menu flex">
              {links.map((link, index) => (
                <div key={index} className="link m-6 hover:scale-110">
                  <Link
                    className="text-black hover:text-purple-500 text-2xl font-bold hover:font-extrabold cursor-pointer"
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="text-2xl font-bold hover:scale-110 rounded-full bg-white px-6 py-2 mr-4 border-4 border-orange-100"
              onClick={() => scrollSpreLogin()}
            >
              Înregistrare
            </button>
            <button
              className="text-2xl font-bold hover:scale-110 rounded-full bg-orange-100 px-6 py-2 border border-orange-100"
              onClick={() => scrollSpreLogin()}
            >
              Autentificare
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
