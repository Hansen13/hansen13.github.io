export default function WorkComponent({header, subheader, date, listItems} : {header:string, subheader:string,date: string, listItems:string[]}) {
    return(
        <div className="flex flex-col mr-10">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <h1 className="text-xl font-bold">{header}</h1>
                        <h2 className="text-lg">{subheader}</h2>
                    </div>
                    <p>{date}</p>
                </div>
                <ul className="list-disc pl-8">
                    {listItems.map((x) => <li key={x}>{x}</li>)}
                </ul>
            </div>
    )
}