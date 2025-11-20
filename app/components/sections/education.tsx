import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function Education() {
    // list items
    const datamatiker = ["Teknologier:", "C#, Golang, Node.js", "Fokus områder:", "IT sikkerhed, Projektstyring, tilegning af ny viden", "Værktøjer:", "Docker, Scrum, Kanban, Github, Docker, system udvikling", "Database:", "MS SQL, MongoDB","API:", "Rest, GraphQL, gRPC"]
    const brandmand = ["Brandmand, Redningsspecialist", "Teknisk Arbejdsleder", "Udvidet Førstehjælp", "C Kørekort"]
    const htx = ["Matematik A", "Fysik A", "Dansk A", "Engelsk A", "El-Teknik A"]
    return (
        <div className="flex flex-col gap-8">
            <MainHeader>Uddannelse</MainHeader>
            <WorkComponent
                header="Datamatiker"
                date="2020-2023"
                location="University College Lillebælt, Odense"
                listItems={datamatiker}
            />

            <WorkComponent
                header="Beredskabsstyrelsen"
                date="2019"
                location="Bornholm"
                listItems={brandmand}
            />

            <WorkComponent
                header="HTX"
                date="2015-2017"
                location="Odense Tekniske Gymnasium"
                listItems={htx}
            />
        </div>
    )
}