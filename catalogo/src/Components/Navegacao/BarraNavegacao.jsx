
import { Link } from 'react-router-dom'
import React from "react"

export function BarraNavegacao() {

    //Sempre que eu precisar renderizar as informações de outra página para ca
    // devo usar o localStorage
    const selectedProfile = JSON.parse(localStorage.getItem("user"));


    return (
        <nav className="bg-transparent text-white h-[100px] flex items-center justify-center absolute top-0 left-0 w-full z-10">
            <ul className="flex justify-center gap-12 items-center text-white font-sans">
                <Link to="filmes">
                    <li className=" group flex gap-2.5 items-center text-2xl transition duration-300 ease-in-out hover:scale-105">
                        <p className="av text-white font-bold ">Filmes</p>
                        <img    
                            src="./src/assets/imagens/silhueta-de-icone-de-casa.png"
                            alt=""
                            className="w-[30px]"
                        />
                    </li>
                </Link>
                <Link to="serie">
                    <li className="flex gap-2.5 items-center text-2xl transition duration-300 ease-in-out hover:scale-105 hover:underline">
                        <p className="text-white font-bold">Serie</p>
                        <img
                            src="./src/assets/imagens/movie-clapper.png"
                            alt=""
                            className="w-[30px]"
                        />
                    </li>
                </Link>
            </ul>
        </nav>

    )
}