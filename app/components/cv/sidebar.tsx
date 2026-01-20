import { calculateAge } from "@/app/utils/helperMethods";
import Image from "next/image";
import TechnicalCompenteces from "./technical";

export default function Sidebar() {
  return (
    <div className="sticky top-0 text-white">
      <div className="bg-sky-900 ">
        <div className="flex justify-center p-4">
          <div className="w-56 h-56 relative">
            <Image
              src={"./PXL_20260119_150637601.PORTRAIT.ORIGINAL-EDIT.jpg"}
              alt="image not loading"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl max-w-dvh">Andreas Hansen</h1>
          <h1 className="text-2xl">Fullstack Udvikler</h1>
        </div>
      </div>
      <div className="flex flex-col bg-sky-700 p-4 gap-2 min-h-[calc(100svh-320px)] ">
        {/* Phone number */}
        <div className="flex flex-row gap-1 p-1">
          <span className="material-symbols-outlined">phone_enabled</span>
          <p className="text-sm flex items-center">(+47) 46 67 49 83</p>
        </div>
        {/* Email */}
        <div className="flex flex-row gap-1 p-1">
          <span className="material-symbols-outlined">mail</span>

          <p className="text-sm flex items-center">
            Andreas.mikkel.hansen33@gmail.com
          </p>
        </div>
        {/* Hjemmeside */}
        <div className="flex flex-row gap-1 p-1">
          <span className="material-symbols-outlined">add_link</span>
          <p className="text-sm flex items-center"></p>
          <a
            href="https://Andreashansen.info"
            className="text-sm flex items-center underline"
          >
            AndreasHansen.info
          </a>
        </div>
        {/* Addresse */}
        <div className="flex flex-row gap-1 p-1">
          <span className="material-symbols-outlined">location_on</span>

          <p className="text-sm flex items-center">
            Storehaugen, 5304 Hetlevik, Norge
          </p>
        </div>
        {/* Fødselsdato */}
        <div className="flex flex-row gap-1 p-1">
          <span className="material-symbols-outlined">cake</span>
          <p className="text-sm flex items-center">
            30/07/97 - {calculateAge(new Date(1997, 0o7, 30))} år
          </p>
        </div>
        <TechnicalCompenteces />
      </div>
    </div>
  );
}
