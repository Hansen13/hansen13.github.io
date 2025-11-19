import MainHeader from "../helper/main-header";

export default function About() {
    return (
        <div className="flex flex-col gap-4">
            <MainHeader>Privat</MainHeader>
            <div>
                <h1 className="text-xl font-bold">Familie</h1>
                <p>Jeg er gift og far til 3. Interesserer mig for 3D print, programminger af hobby projekter, hjemmeautomatisering samt brætspil.</p>
            </div>
        </div>
    )
}