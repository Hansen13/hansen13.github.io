import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function WorkExperience() {
    const littleGiantsPraktik = ["Golang","Flutter","gRPC","Javscript, Typescript"]
    const littleGiants4semester = ["Javscript, Typescript", "Node", "GraphQL"]


    
    return (
        <div className="flex flex-col gap-4">
            <MainHeader>Erhvers erfaring</MainHeader>
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

        </div>
    )
}