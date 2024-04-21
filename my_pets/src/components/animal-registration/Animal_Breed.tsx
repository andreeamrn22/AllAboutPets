import React, { useState, useEffect } from "react";
import gender_f from "./img/gender_symbols_f.png";
import gender_m from "./img/gender_symbols_m.png";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../../lib/components/Button.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../lib/components/Popover.tsx";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../lib/components/Command.tsx";
import { animal } from "./animalute.ts";

interface gender {
  name: string;
  image?: string;
}

export const Animal_Breed: React.FC<{
  pets: animal[];
  animalutSelectat: string | null;
  numeAnimalut: string | null;
}> = ({ pets, animalutSelectat, numeAnimalut }) => {
  const [rasaAnimalut, setRasaAnimalut] = useState<string | null>(null);
  const [genderSelectat, setGenderSelectat] = useState<string | null>(null);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>("");
  const animalutSelectatObject = pets.find(
    (pet) => pet.name === animalutSelectat
  );
  const genders: gender[] = [
    {
      name: "Mascul",
      image: gender_m,
    },
    {
      name: "Femelă",
      image: gender_f,
    },
    {
      name: "Necunoscut",
    },
  ];

  const handleGenderSelect = (genderName: string) => {
    setGenderSelectat(genderName);
  };

  const handleRasaClick = (rasa: string) => {
    setRasaAnimalut(rasa);
    setSelectedBreed(rasa);
    setOpen(false);
  };

  const clearRasaAnimalut = () => {
    setRasaAnimalut(null);
    setSelectedBreed(null);
  };

  useEffect(() => {
    clearRasaAnimalut();
  }, [animalutSelectat]);

  return (
    <div className="bg-orange-200 flex flex-col items-center justify-center menu">
      <div className="w-full max-w-2xl relative">
        <div className="mb-4">
          <label htmlFor="rasaAnimalut" className="block text-2xl mb-10">
            Ce rasă este <strong>{numeAnimalut}</strong>?
          </label>
          {selectedBreed && (
            <div className="text-xl mb-2">Rasă selectată: {selectedBreed}</div>
          )}
          {animalutSelectatObject && animalutSelectatObject.rasa && (
            <div className="flex justify-center items-center">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-center text-xl hover:scale-95 shadow-lg"
                  >
                    {value ? value : "Selectează rasă..."}
                    <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0 mt-2 bg-white rounded-md border border-gray-300 shadow-lg">
                  <Command>
                    <CommandInput placeholder="Caută rasă..." />
                    <CommandEmpty>
                      Nu am găsit o referință pentru rasa respectivă.
                    </CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {animalutSelectatObject.rasa.map((rasa, index) => (
                          <div
                            key={rasa}
                            onClick={() => {
                              if (rasa === value) {
                                setValue("");
                                setSelectedBreed(null);
                              } else {
                                setValue(rasa);
                                setSelectedBreed(rasa);
                              }
                              handleRasaClick(rasa);
                            }}
                            className={`flex justify-start items-start text-xl cursor-pointer mt-3 mb-3 ${
                              value === rasa ? "font-bold" : ""
                            }`}
                          >
                            <CommandItem
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent click on CommandItem from triggering the click on the parent div
                              }}
                              className={`text-black flex justify-start items-start`}
                            >
                              <span>{rasa}</span>
                              <Check
                                className={
                                  value === rasa
                                    ? "ml-2 h-4 w-4 opacity-100"
                                    : "ml-2 h-4 w-4 opacity-0"
                                }
                              />
                            </CommandItem>
                          </div>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
        <div className="mt-10">
          <label htmlFor="rasaAnimalut" className="block text-2xl mb-5">
            Ce gen are <strong>{numeAnimalut}</strong>?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {genders.map((genders) => (
              <div
                key={genders.name}
                className={`flex flex-col items-center p-4 border-2 border-gray-400 hover:border-blue-900 rounded-3xl shadow-md hover:scale-95 cursor-pointer ${
                  genderSelectat === genders.name
                    ? "border-4 border-green-800"
                    : ""
                }`}
                onClick={() => handleGenderSelect(genders.name)}
              >
                <img
                  src={genders.image}
                  alt={genders.image}
                  className="w-32 h-32 mb-3"
                />
                <span>{genders.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
