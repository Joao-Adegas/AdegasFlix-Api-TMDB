import estilos from "./Card.module.css";

export function Card({movie, onOpenModal}){

    return(
        <>
            <div className="Container flex  justity-center gap-15 transform transition duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">

                <div className="text-center relative w-auto  h-[auto] overflow-hidden
                text-cadetblue rounded-2xl transition-transform ease-in-out 
                ml-[30px] bg-[#cacaca] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] hover:mb-3.5 gap-10">
                    
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)} className="w-[250px]"/>
                    
                </div>

            </div>
            
        </>
    )
}