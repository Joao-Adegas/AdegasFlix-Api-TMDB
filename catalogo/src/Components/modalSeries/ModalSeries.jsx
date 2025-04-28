export function ModalSeries({serie,onClose}){
    
    if(!serie){
        return null;
    }

  

    return(
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                <div className="bg-[#1e1e1e] p-5 rounded-4xl w-[60rem] h-[35rem] overflow-auto flex flex-col relative">
                    <div className="flex justify-end items-end w-[98%] ">
                        <button onClick={onClose} className="bg-steelblue rounded-full border-none cursor-pointer text-3xl text-white h-[6rem]"> <img src="./src/assets/imagens/ExitIcon.png" alt="" srcset="" className="w-[1.5rem]"/> </button>
                    </div>
                    <div className="flex items-center justify-center gap-10 p-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.title} srcset=""  className="w-auto max-w-[250px] h-auto rounded-lg"/>
                        <ul className=" flex flex-col gap-28 text-end justify-end h-[100%]">
                            <div className="description w-[35rem]">
                                    <p className="font-poppins p-1.5 text-aliceblue text-start text-white text-[1.3rem] font-light">{serie.overview}</p>
                            </div>
                            <div>
                                <li className="font-poppins p-1.5 text-aliceblue text-start text-white"> {`${serie.popularity ?? 'Não disponiel no momento, aguarde!!'}`} </li>

                                <li className="text-[1.2rem] font-poppins p-1.5 text-aliceblue  text-start text-white"> {`Data de Lançamento: ${serie.realize_date ?? 'Não possui data de lançamento'}` } </li>

                                <li className="text-[1.2rem] font-poppins p-1.5 text-aliceblue  text-start text-white"> {`Avaliação: ${serie.vote_count}`} </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}