import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa o CSS básico do Swiper
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

const Api_Key = '4a058f0aabb09d73b5bf9bb48a1c3060';
const url = 'https://api.themoviedb.org/3';

export function CarrocelSerieMaisAssistidos() {
    const [series, setSeries] = useState([]);
    const prevRef = useRef(null); // Ref para o botão "Anterior"
    const nextRef = useRef(null); // Ref para o botão "Próximo"

    useEffect(() => {
        axios.get(`${url}/discover/movie?api_key=${Api_Key}&sort_by=popularity.desc&language=pt-BR`)
            .then(response => {
                console.log(response.data.results);
                setSeries(response.data.results);
            })
            .catch(error => {
                console.log('erro: ' + error);
            });
    }, []);

    return (
        <>
            <div 
            className="
            flex 
            flex-col 
            gap-10 
            p-10" 
            style={{ padding: "1rem" }}>
                <div>
                    <h2 className="text-white text-3xl">
                        Mais Assistidos
                    </h2>
                </div>

                <div className="
                    relative
                    w-[97%] h-[auto] 
                    bg-[#2d2d2d] 
                    flex 
                    justify-start 
                    group
                ">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={6}
                        loop={false}
                        navigation={{
                            prevEl: prevRef.current, 
                            nextEl: nextRef.current, 
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[Navigation]}
                    >
                        {series.map(serie => (
                            //verifica se possui imagem, para a imagem ser carregada
                            serie.backdrop_path &&(
                            <SwiperSlide key={serie.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
                                    alt={serie.title}
                                    className="
                                    group 
                                    rounded-lg shadow-lg 
                                    w-[50rem] h-[auto] 
                                    transition-transform duration-500 
                                    hover:opacity-45 hover:cursor-pointer "
                                />
                                <div className="w-[15rem]"> 
                                    <h3 className="
                                    relative bottom-10 left-2.5 
                                    text-white font-extrabold 
                                    flex-wrap truncate text-[1.2rem]">
                                        {serie.title}
                                    </h3>
                                </div>
                            </SwiperSlide>
                            )
                        ))}
                    </Swiper>

                    {/* Botões de navegação com referências */}
                    <div
                        ref={prevRef}
                        className="
                        swiper-button-prev 
                        absolute left-0 top-1/2 
                        -translate-y-1/2 
                        z-10 w-10 h-10 
                        opacity-0 
                        group-hover:opacity-100 
                        transition duration-300 
                        cursor-pointer"
                    ></div>
                    <div
                        ref={nextRef}
                        className="
                        swiper-button-next 
                        absolute right-0 top-1/2 
                        -translate-y-1/2 
                        z-10 w-10 h-10 
                        opacity-0 
                        group-hover:opacity-100 
                        transition duration-300 
                        cursor-pointer"
                    ></div>
                </div>
            </div>
        </>
    );
}
