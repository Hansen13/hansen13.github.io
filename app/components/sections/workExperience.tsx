import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function WorkExperience() {
    const job1 = ["Golang","Flutter","gRPC","Javscript, Typescript","GraphQL"]

    
    return (
        <div>
            <MainHeader>Erhvers erfaring</MainHeader>
            <WorkComponent header="LittleGaints" subheader="test" date="08/09/22 - 31/10/22" listItems={job1}></WorkComponent>
        </div>
    )
}