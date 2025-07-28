import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS básico do Swiper

const Api_Key = '4a058f0aabb09d73b5bf9bb48a1c3060'
const url = 'https://api.themoviedb.org/3'

export function CarroselSeries() {
    const [series,setSeries] = useState([])

    useEffect(()=>{
        axios.get(`${url}/tv/popular?api_key=${Api_Key}&language=pt-BR`)
        .then(response => { setSeries(response.data.results)})
        .catch(error=>{ console.log('erro: ' + error) })
    },[]);

    return (
        <> 
            <div className="bg-black flex items-center justify-center ">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    className="w-auto h-auto" // Define o tamanho do carrossel
                >
                    {series.map((serie) => (
                        <SwiperSlide key={serie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
                                alt={serie.title}
                                className="w-[100%] h-auto object-cover shadow-lg opacity-75"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </>
       
    );
}
