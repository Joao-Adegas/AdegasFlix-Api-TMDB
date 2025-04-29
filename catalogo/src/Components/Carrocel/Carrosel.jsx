import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS básico do Swiper

const Api_Key = '4a058f0aabb09d73b5bf9bb48a1c3060'
const url = 'https://api.themoviedb.org/3'

export function Carrosel() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${url}/movie/popular?api_key=${Api_Key}&language=pt-BR`)
            .then(res => setMovies(res.data.results))
            .catch(error => console.error("Erro ao buscar filmes:", error));
    }, []);

    return (
        <div className="w-[100%] h-[100%] bg-black flex items-center justify-center relative">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="w-[100%] h-[140vh]" // Define o tamanho do carrossel
            >
                {movies
                //filtra movies que possuem imagens
                .filter((movie)=> movie.backdrop_path)
                .map((movie) => (
                    
                <SwiperSlide key={movie.id}>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover shadow-lg opacity-75"
                    />
                </SwiperSlide>
                 

                ))}
            </Swiper>
        </div>
    );
}
