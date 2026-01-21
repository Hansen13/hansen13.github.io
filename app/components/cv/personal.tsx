export default function PersonalCompetencies() {
  return (
    <div className="flex flex-col pt-4 gap-2">
      <h1 className="text-xl font-bold">Personlige kompetencer</h1>
      <div>
        <h1 className="font-extrabold text-lg tracking-widest">Sprog:</h1>
        <p className="tracking-tight">&#127465;&#127472; Dansk - modersmål</p>
        <p className="tracking-tight">&#127468;&#127463; Engelsk - flydende</p>
        <p className="tracking-tight">
          &#127475;&#127476; Norsk - meget godt kendskab
        </p>
      </div>
      <div className="print:break-inside-avoid">
        <h1 className="font-extrabold text-lg tracking-widest">Fritid:</h1>
        <p className="tracking-tight">&#x1F4BB; Programmering</p>
        <p className="tracking-tight">&#x1F310; Self hosting</p>
        <p className="tracking-tight">&#x1F3C3; Løbetræning</p>
        <p className="tracking-tight">&#x1F4D0; 3D Printing</p>
        <p className="tracking-tight">&#x1F3B2; Brætspil</p>
        <p className="tracking-tight">&#x1F3AE; Computerspil</p>
        <p className="tracking-tight">&#x1F9E9; Rubicks Cube</p>
      </div>
    </div>
  );
}
