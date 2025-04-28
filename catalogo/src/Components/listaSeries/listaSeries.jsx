import axios from 'axios'
import {CarroselSeries} from "../CarrocelSeries/CarroselSeries"
import React,{useEffect,useState} from 'react'
import { CardSerie } from '../CardSerie/CardSerie'
import { ModalSeries } from '../ModalSeries/ModalSeries'

const Api_Key = '4a058f0aabb09d73b5bf9bb48a1c3060'
const url = 'https://api.themoviedb.org/3'

export function ListaSerie(){
    const [series,setSeries] = useState([])
    const [SelectSerie,setSelectSerie] = useState(null)

    useEffect(()=>{
        axios.get(`${url}/serie/popular?api_key=${Api_Key}&language=pt-BR`)
        .then(response => {
            console.log(response.data.results)
            setSeries(response.data.results)
        })
        .catch( error => {
            console.log('erro: ', error);
        })

    },[]);

    const handleOpenModalSerie = (serie) => {
        setSelectSerie(serie);
    };

    const handleCloseModalSerie = () => {
        setSelectSerie(null);
    }

    return(
        <>
            <div className="flex flex-wrap font-mono">


                <figure className="flex flex-wrap w-[100%] justify-center items-center gap-10 bg-[#2d2d2d]"> 
                    {series.map(serie => (<CardSerie key={serie.id} serie={serie} onOpenModal = {handleOpenModalSerie} />))}
                </figure>

                {setSelectSerie && (<ModalSeries serie={SelectSerie} onClose = {handleCloseModalSerie}/>)}


            </div>
        </>
    )
}