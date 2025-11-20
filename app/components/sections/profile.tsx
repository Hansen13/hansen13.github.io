import MainHeader from "../helper/main-header";

export default function Profile() {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative">
                <button className="absolute flex justify-end right-0 mr-10 md:hidden">
                    <span className="material-symbols-outlined ">sync_alt</span>
                </button>
            </div>
            <MainHeader>Profil</MainHeader>
            <p className="mr-10">
                Fuldstack udvikler med erfaring indenfor C#, Angular, Next.js og mange andre. Jeg brænder for at være kreativ i mit arbejde, og bygge løsninger som virker i praksis.
            </p>
            <p className="mr-10">
                Jeg trives både med at arbejde selvstændigt og som en del af et team, hvor man kan sparre og lære af hinanden. Jeg er nysgerrig på nye teknologier og søger en rolle jeg kan udvikle mig fagligt.
            </p>
        </div>
    )
}