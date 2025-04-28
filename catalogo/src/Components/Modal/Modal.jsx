export function Modal({movie,onClose}){
    
    if(!movie){
        return null;
    }


    console.log("Modal renderizado");
    console.log(movie)

    return(
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                
                <div className="bg-[#1e1e1e] p-5 rounded-4xl w-[70rem] h-[35rem] overflow-auto flex flex-col relative">
                   
                    <div className="flex justify-end items-end w-[98%] " >
                        <button onClick={onClose} 
                        className="bg-steelblue rounded-full border-none cursor-pointer text-3xl text-white h-[5rem]">  <img src="./src/assets/imagens/ExitIcon.png" alt="" srcset="" className="w-[1.5rem]"/>  </button>
                    </div>

                    <div className="flex items-center justify-center gap-10 p-4">


                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} srcset=""
                        className="w-20rem max-w-[300px] h-auto rounded-lg"/>

                        <ul className=" flex flex-col gap-28 text-end justify-end h-[100%]">

                            <div className="description w-[35rem]">
                                <p className="p-1.5  text-start text-white text-[1.3rem] "> {`${movie.overview}`} </p>
                            </div>

                            <div className="inf-gerais">
                                <li className=" p-1.5  text-start text-white"> {`${movie.popularity ?? 'Não disponiel no momento, aguarde!!'}`} </li>

                                <li className="text-[1.2rem]  p-1.5   text-start text-white"> {`Data de Lançamento: ${movie.realize_date ?? 'Não possui data de lançamento'}` } </li>

                                <li className="text-[1.2rem]  p-1.5   text-start text-white"> {`Avaliação: ${movie.vote_count}`} </li>
                            </div>
                        </ul>        
                    </div>
                </div>
            </div>       
        </>
    )
}
