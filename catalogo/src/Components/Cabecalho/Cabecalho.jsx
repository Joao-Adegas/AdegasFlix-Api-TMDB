

export function Cabecalho(){
    const selectedProfile = JSON.parse(localStorage.getItem("user"));


    return(

        <header
            className="bg-transparent flex items-center h-[4rem] w-full justify-between absolute top-[9px] left-0 z-10"
            style={{ padding: "0.5rem", paddingTop: "1rem" }}>
            <div className="title">
                <h1 className="mx-auto text-3xl w-[10rem] font-black">
                    <img src="src/assets/logo/LogoAdegasFlix.png" alt="Logo AdegasFlix" />
                </h1>
            </div>
            <div className="flex items-center gap-10">
                <img
                    src={selectedProfile.avatar}
                    alt={selectedProfile.name}
                    className="w-[52px] h-[52px] rounded-full shadow-lg transition-transform duration-300"
                />
            </div>
        </header>

    
    )
}



































































































