import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function WorkExperience() {
    const unimicro = [
        "Udviklede og vedligeholdt kernefunktioner i løn- og salgssystemer, som dagligt understøtter over 100.000 daglige brugere,",
        "Frontendudvikling i Angular som en del af det daglige arbejde, med udvikling af nye features og bug fixing",
        "Backendudvikling i C# med opsæt af API services, test mm.",
        "Med af en trivselskomité, som planlagde fælles aktiviteter for hele organisationen",
    ]
    const littleGiantsPraktik = ["Golang","Flutter","gRPC","Javscript, TypeScript", "Docker"]
    const littleGiants4semester = ["Javscript, TypeScript", "Node.js", "GraphQL", "Docker"]
    const CabinPlant = ["Blazor", "MSSQL"]
    const CycleServiceNordic = ["Team leder fra 2019-2021","Lager arbejder fra 2017-2019"]


    
    return (
        <div className="flex flex-col gap-8">
            <div className="relative">
                <button className="absolute flex justify-end right-0 mr-10 md:hidden">
                    <span className="material-symbols-outlined ">sync_alt</span>
                </button>
                <MainHeader>Erhvers erfaring</MainHeader>
            </div>
            <WorkComponent
                header="Unimicro"
                subheader="Fullstack udvikler"
                date="jan 2023 - Nu"
                location="Bergen, Norge"
                listItems={unimicro}
            />

            <WorkComponent
                header="LittleGaints"
                subheader="5. semester - praktik"
                date="sep 2022 - okt 2022"
                location="Fyn, Odense"
                listItems={littleGiantsPraktik}
            />

            <WorkComponent
                header="LittleGaints"
                subheader="4. semester"
                date="2022"
                location="Fyn, Odense"
                listItems={littleGiants4semester}
            />

            <WorkComponent
                header="CabinPlant"
                subheader="Studie job"
                date="2021 - 2022"
                location="Fyn, haarby"
                listItems={CabinPlant}
            />
            <WorkComponent
                header="Cycle Service Nordic"
                date="2017 - 2021"
                location="Fyn, Odense SØ"
                listItems={CycleServiceNordic}
            />
        </div>
    )
}