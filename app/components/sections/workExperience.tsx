import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function WorkExperience() {

   
    // list items
    const unimicro = [
        "Udviklede og vedligeholdt kernefunktioner i løn- og salgssystemer, som dagligt understøtter over 100.000 daglige brugere,",
        "Frontendudvikling i Angular som en del af det daglige arbejde, med udvikling af nye features og bug fixing",
        "Backendudvikling i C# med opsæt af API services, test mm.",
        "Med af en trivselskomité, som planlagde fælles aktiviteter for hele organisationen",
    ]
    const littleGiantsPraktik = [
        "Udviklede en komplet webapplikation i Flutter som solo-projekt",
        "Byggede en administrativ side til oprettelse og håndtering af nye projekter for en virksomhed",
        "Udviklede backend i Golang med gRPC til kommunikation",
        "Ansvar for hele udviklingsprocessen: arkitektur, implementering"
    ]

    const littleGiants4semester = [
        "Designet og udviklet en mobilapplikation helt fra starten af i samarbejde med to medstuderende",
        "Byggede frontend i Flutter",
        "Implementerede backend i TypeScript med GraphQL som API",
        "Arbejdede med versionsstyring, planlægning og løbende sparring i teamet"]
   
    const CabinPlant = ["Blazor", "MSSQL"]
    const CycleServiceNordic = ["Team leder fra 2019-2021","Lager arbejder fra 2017-2019"]


    
    return (
        <div className="flex flex-col gap-8">
            <MainHeader>Erhvers erfaring</MainHeader>
            <WorkComponent
                header="Unimicro"
                link="https://unimicro.no/"
                subheader="Fullstack udvikler"
                date="jan 2023 - Nu"
                location="Bergen, Norge"
                listItems={unimicro}
            />

            <WorkComponent
                header="LittleGaints"
                subheader="5. semester - praktik"
                link="https://littlegiants.dk/"
                date="sep 2022 - okt 2022"
                location="Fyn, Odense"
                listItems={littleGiantsPraktik}
            />

            <WorkComponent
                header="LittleGaints"
                subheader="4. semester"
                link="https://littlegiants.dk/"

                date="2022"
                location="Fyn, Odense"
                listItems={littleGiants4semester}
            />

            <WorkComponent
                header="CabinPlant"
                subheader="Studie job"
                link="https://www.cabinplant.com/"
                date="2021 - 2022"
                location="Fyn, haarby"
                listItems={CabinPlant}
            />
            <WorkComponent
                header="Cycle Service Nordic"
                link="https://www.cycleservicenordic.com/"
                date="2017 - 2021"
                location="Fyn, Odense SØ"
                listItems={CycleServiceNordic}
            />
        </div>
    )
}