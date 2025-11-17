import WorkExperience from "./components/sections/workExperience";
import Education from "./components/sections/education";
import About from "./components/sections/about";
import Sidebar from "./components/cv/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row w-300 mx-auto ">
      <div className="w-92 ">
       <Sidebar></Sidebar>
      </div>
      <div className="flex  flex-col bg-white w-full text-black p-6">
        <WorkExperience></WorkExperience>
        <Education></Education>
        <About></About>
      </div>
    </div>
  );
}
