import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function WorkExperience() {
    const unimicro = [
        "Ansvarlig for håndtering af løn- og salgsmoduler, herunder udvikling af nye features og bug fixing",
        "Med af en trivselskomité, som planlagde fælles aktiviteter for hele organisationen",
        "Frontendudvikling i Angular som en del af det daglige arbejde",
        "Backendudvikling i C#",
        "Arbejde med REST- og OData-API’er i C# og Postman"]
    const littleGiantsPraktik = ["Golang","Flutter","gRPC","Javscript, Typescript", "Docker"]
    const littleGiants4semester = ["Javscript, Typescript", "Node", "GraphQL", "Docker"]
    const CabinPlant = ["Blazor", "MSSQL"]
    const CycleServiceNordic = ["Team leder fra 2019-2021","Lager arbejder fra 2017-2019"]


    
    return (
        <div className="flex flex-col gap-4">
            <div className="relative">
                <button className="absolute flex justify-end right-0 mr-10 md:hidden">
                    <span className="material-symbols-outlined ">sync_alt</span>
                </button>
                <MainHeader>Erhvers erfaring</MainHeader>
            </div>
            <WorkComponent
                header="Unimicro"
                date="30/01/2023 - Nu"
                location="Bergen, Norge"
                listItems={unimicro}
            />

            <WorkComponent
                header="LittleGaints"
                subheader="5. semester - praktik"
                date="08/09/22 - 31/10/22"
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