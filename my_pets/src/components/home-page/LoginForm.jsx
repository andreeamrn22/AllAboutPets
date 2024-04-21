import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import fundal from "./img/cats-and-dogs.jpg";
import purr from "./img/purr.png";

export const LoginForm = ({ loginFormRef }) => {
  const [rememberRegister, setRememberRegister] = useState(false);
  const [rememberLogin, setRememberLogin] = useState(false);
  const [currentState, setCurrentState] = useState("left");
  const controls = useAnimation();
  const handleRememberRegisterChange = () => {
    setRememberRegister(!rememberRegister);
  };

  const handleRememberLoginChange = () => {
    setRememberLogin(!rememberLogin);
  };
  const imageVariants = {
    left: {
      x: "0%",
      transition: {
        type: "twen",
        stiffness: 100,
        delay: 0.3,
      },
    },
    right: {
      x: "100%",
      transition: {
        type: "twen",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };
  const leftDivVariants = {
    left: { x: 0, opacity: 1 },
    right: { x: "-100%", opacity: 0 },
  };

  const rightDivVariants = {
    left: { x: "100%", opacity: 0 },
    right: { x: 0, opacity: 1 },
  };
  const transitionStates = () => {
    const nextState = currentState === "left" ? "right" : "left";
    controls.start(nextState);

    setTimeout(() => {
      setCurrentState(nextState);
    }, 300);
  };

  return (
    <React.Fragment>
      <div
        className="bg-gradient-to-b from-orange-200 to-white menu overflow-hidden flex justify-center items-center"
        ref={loginFormRef}
      >
        <img
          src={purr}
          className="absolute w-90 h-90 z-10 left-0"
          alt="text purr"
        ></img>
        <div className="bg-white rounded-xl shadow-xl max-w-screen-lg w-full relative m-40 ">
          <motion.div
            className="absolute top-0 w-1/2 object-cover"
            initial="left"
            animate={controls}
            variants={imageVariants}
          >
            <img
              src={fundal}
              className="object-cover z-0 rounded-xl "
              alt="Background"
            />
          </motion.div>
          <motion.div
            initial="left"
            animate={currentState}
            variants={leftDivVariants}
            transition={{ type: "tween" }}
            className="py-2 px-8 z-10 absolute left-0 top-0 mt-12 w-1/2"
          >
            <p className="text-4xl font-extrabold text-white">Bine ai venit!</p>
            <p className="mt-4 w-1/3 text-xl text-white font-semibold">
              Introduce datele tale personale pentru a descoperi beneficiile
              noastre
            </p>
            <button
              className="text-2xl font-semibold rounded-xl z-10 px-5 py-4 bg-orange-200 hover:text-purple-500 mt-60"
              onClick={() => transitionStates()}
            >
              Înregistreaza-te
            </button>
          </motion.div>
          <motion.div
            initial="left"
            animate={currentState}
            variants={rightDivVariants}
            transition={{ type: "tween" }}
            className="py-2 px-8 z-10 absolute top-0 right-0 mt-12 w-1/2"
          >
            <p className="text-4xl font-extrabold text-white ml-52 text-right">
              Bine ai revenit!
            </p>
            <p className="mt-4 w-1/3 text-xl text-white font-semibold ml-80 text-right">
              Pentru a rămâne conectat, introduce datele tale personale
            </p>
            <button
              className="text-2xl font-semibold rounded-xl z-10 px-5 py-4 bg-orange-200 hover:text-purple-500 mt-72"
              onClick={() => transitionStates()}
            >
              Autentifică-te
            </button>
          </motion.div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <form className="p-10">
                <h1 className="text-4xl font-semibold mb-4">Crează Cont Nou</h1>
                <div className="flex mb-2 text-xl">
                  Nu ai un cont încă? Hai să-ți faci un cont pentru a descoperi
                  beneficiile noastre
                </div>
                <input
                  type="text"
                  placeholder="Nume"
                  className="block mb-4 bg-gray-200 px-20 py-3 rounded-md pl-4"
                />
                <input
                  type="text"
                  placeholder="Prenume"
                  className="block mb-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <input
                  type="text"
                  placeholder="Telefon"
                  className="block mb-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="block mb-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <input
                  type="password"
                  placeholder="Parolă"
                  className="block mb-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <div className="flex items-center mb-4 mt-8">
                  <input
                    type="checkbox"
                    id="rememberRegister"
                    checked={rememberRegister}
                    onChange={handleRememberRegisterChange}
                    className="mr-2"
                  />
                  <label htmlFor="rememberRegister">Ține-mă minte</label>
                </div>
                <button className="text-xl font-bold hover:text-purple-500 rounded-xl bg-orange-200 p-9 py-3 border">
                  Înregistrează-te
                </button>
              </form>
            </div>
            <div className=" w-full md:w-1/2">
              <form className="p-8 ml-10">
                <h1 className="text-4xl font-semibold mb-4">Autentificare</h1>
                <div className="flex mb-6 text-xl">
                  Ai deja un cont? Introduceți datele pentru a te autentifica
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="block mt-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <input
                  type="password"
                  placeholder="Parolă"
                  className="block mt-4 bg-gray-200 px-20 py-2 rounded-md pl-4"
                />
                <div className="flex items-center mb-4 mt-8">
                  <input
                    type="checkbox"
                    id="rememberLogin"
                    checked={rememberLogin}
                    onChange={handleRememberLoginChange}
                    className="mr-2"
                  />
                  <label htmlFor="rememberLogin">Ține-mă minte</label>
                </div>
                <a className="text-sm mb-4 block hover:text-black hover:font-extrabold">
                  Ți-ai uitat parola?
                </a>
                <button className="text-xl font-bold hover:text-purple-500 rounded-xl bg-orange-200 px-9 py-3 border">
                  <div className="flex flex-row justify-center items-center gap-x-2">
                    Autentificare
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
