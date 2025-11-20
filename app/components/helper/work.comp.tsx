export default function WorkComponent({header, subheader, link, date, location, listItems} : {header: string, subheader?: string, link?: string, date: string, location: string, listItems: string[]}) {
    return(
        <div className="flex flex-col mr-10">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <h1 className={`text-xl font-bold ${link ? 'hover:text-sky-400 text-sky-600 underline' : ''}`}>
                        <a href={link} target="_blank">{header}</a></h1>
                    <h2 className="text-md flex items-end font-extralight">{subheader}</h2>
                </div>
                <p className="font-mono flex items-end">{date}</p>
            </div>
                <h2 className="text-sm flex items-end font-extralight">{location}</h2>
            <ul className="list-disc pl-8">
                {listItems.map((x) =>
                <div key={x}>
                    {
                        x.endsWith(":")
                        ? <p className="font-bold"> {x} </p>
                        : <li className="pl-8"> {x} </li>}
                </div>
                )}
            </ul>
        </div>
    )
}