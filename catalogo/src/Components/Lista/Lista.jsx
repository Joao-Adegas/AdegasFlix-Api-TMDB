// permite a comunicação com as paginas http (https)
import axios from "axios"
import {Carrosel} from "../Carrocel/Carrosel"
//as ferramentas começadas co use são hooks do manuseio da
//biblioteca React
import React,{useEffect,useState} from "react"
import { Card } from "../Card/Card";
import { Modal } from  '../Modal/Modal'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CarrocelSerieMaisAssistidos } from "../CarrocelSerieFilters/CarrocelSerieMaisAssistidos";

const Api_Key = '4a058f0aabb09d73b5bf9bb48a1c3060'
const url = 'https://api.themoviedb.org/3'

 

export function Lista(){

    //Crio uma variavel chamada Movie e "seto" 
    //como vazio
    const [movies,setMovies] = useState([])
    
    // mostra se fi selecionado um filme para a vizualização 
    const [SelectMovie,setSelectMovie] = useState(null);

    //Trabalha com uma estrutura especifica parâmetros (), script {}
    // e dependências []
    useEffect(()=>{
        axios.get(`${url}/movie/popular?api_key=${Api_Key}&language=pt-BR`)
        // se a comunicação der certo grava o resultado no response
        .then(respose => {
            console.log(respose.data.results)
            //armazenando a resposta da chamada da url
            setMovies(respose.data.results)
        })
        //se der ruim exibe no inpeciona o erro de comunicação
        .catch(error=>{
            console.log('Error',error);
        })
    },[]);
    
    const handleOpenModal = (movie) => {
        setSelectMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectMovie(null);
    }

    return(
    <>
    <div className="flex flex-col gap-8 bg-[#2d2d2d]">
    <Carrosel/>
    <CarrocelSerieMaisAssistidos/>
        {/* <div className="flex flex-wrap font-mono">

            <figure className="flex flex-wrap w-[100%] justify-center items-center gap-10 bg-[#2d2d2d]">
                {movies.map(movie => ( <Card key={movie.id} movie={movie} onOpenModal = {handleOpenModal} />))}
            </figure>
            
            {setSelectMovie && (<Modal movie={SelectMovie} onClose = {handleCloseModal}/>)}
        </div> */}
    </div>


    </>
    )
}