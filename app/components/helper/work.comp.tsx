export default function WorkComponent({header, subheader, date, location, listItems} : {header:string, subheader?:string, date: string, location:string, listItems:string[]}) {
    return(
        <div className="flex flex-col mr-10">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <h1 className="text-xl font-bold">{header}</h1>
                    <h2 className="text-md flex items-end font-extralight">{subheader}</h2>
                </div>
                <p className="font-mono flex items-end">{date}</p>
            </div>
                <h2 className="text-sm flex items-end font-extralight">{location}</h2>
            <ul className="list-disc pl-8">
                {listItems.map((x) => <li key={x}>
                    {
                    x.endsWith(":")
                    ? <p className="font-bold"> {x} </p>
                    : <p> {x} </p>}
                    </li>)}
            </ul>
        </div>
    )
}