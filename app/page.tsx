import Sidebar from "./components/cv/sidebar";
import Education from "./components/sections/education";
import Profile from "./components/sections/profile";
import WorkExperience from "./components/sections/workExperience";

export default function Home() {
  return (
    // <div className="flex flex-row mx-auto min-w-[600px] w-screen max-w-300  ">
    //   <div className="w-96">
    <div className="flex flex-row mx-auto drop-shadow-2xl min-w-[600px] w-screen md:max-w-300  ">
      <div className="hidden md:block w-96">
        <Sidebar></Sidebar>
      </div>
      <div className="flex flex-col bg-white w-full text-black p-6 gap-4">
        <Profile></Profile>
        <WorkExperience></WorkExperience>
        <Education></Education>
      </div>
    </div>
  );
}

//
