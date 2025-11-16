import Image from "next/image";
import { calculateAge } from "./utils/helperMethods";
import Link from "next/link";
import WorkExperience from "./components/sections/workExperience";
import Education from "./components/sections/education";
import About from "./components/sections/about";

export default function Home() {
  return (
    <div className="flex flex-row w-300 mx-auto ">
      <div className="w-92 h-screen">
        <div className="bg-sky-900">
          <div className="flex justify-center p-4">
            <div className="w-56 h-56 relative">
              <Image src={"/young-bearded-man-with-striped-shirt.jpg"} alt="alt" fill className="object-cover rounded-full" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl">Andreas Hansen</h1>
            <h1 className="text-2xl">Senior Udvikler</h1>
          </div>
        </div>
        <div className="flex flex-col bg-sky-700 h-full p-4 gap-2">
          {/* Phone number */}
          <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined">
              phone_enabled
              </span>
              <p>(+47) 46 67 49 83</p>
          </div>
          {/* Email */}
          <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined">mail</span>

            <p className="text-sm flex items-center">Andreas.mikkel.hansen33@gmail.com</p>
          </div>
          {/* Hjemmeside */}
           <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined">add_link</span>
            <p className="text-sm flex items-center"></p>
            <a  href="https://Andreashansen.info">AndreasHansen.info</a>
          </div>
          {/* Addresse */}
           <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined">location_on</span>

            <p className="text-sm flex items-center">Storehaugen 41, Hetlevik, Norge</p>
          </div>
          {/* Fødselsdato */}
           <div className="flex flex-row gap-1">
            <span className="material-symbols-outlined">cake</span>
            <p className="flex items-center">30/07/97 - {calculateAge(new Date(1997,0o7,30))} år</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full text-black">
        <WorkExperience></WorkExperience>
        <Education></Education>
        <About></About>
      </div>
    </div>
  );
}
