export default function Rodape(){
    return(
        <>
        <div className="mb-3.5">
            <div className="bg-[#1f1f1f] flex-col justify-center items-center h-[300px]">
                <div className="flex items-center justify-center h-[200px]"> 
                    <img src="src/assets/logo/LogoAdegasFlix.png" alt="Logo AdegasFlix" className="max-w-full max-h-full" />
                </div>
                <div className="flex items-center justify-center">
                    <h4 className="text-white">Cinema é a nossa adega. Escolha o seu sabor de filmes hoje.</h4>
                </div>
            </div>
            
            <div className=" bg-[#161616] flex text-center justify-center h-[2rem] items-center">
                <h2 className="text-white">© 2025 AdegasFlix. Todos os direitos reservados.</h2>
            </div>
        </div>


        </>
    )
}