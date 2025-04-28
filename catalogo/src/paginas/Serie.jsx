
import {CarroselSeries} from "../Components/CarrocelSeries/CarroselSeries"
import { CarrocelSerieComedia } from '../Components/CarrocelSerieFilters/CarrocelSerieComedia'
import {CarrocelSerieMaisAssistidos } from "../Components/CarrocelSerieFilters/CarrocelSerieMaisAssistidos"
import { CarrocelSerieMelhorAvaliados } from '../Components/CarrocelSerieFilters/CarroselSeriesMelhorAvaliados'


export function Serie(){

    return(
        <>    
            <div className='flex flex-col gap-8 bg-[#2d2d2d]'>
                <CarroselSeries/>
                
                <div className='flex flex-col gap-0'>
                    <CarrocelSerieComedia/>
                    <CarrocelSerieMaisAssistidos/>
                    <CarrocelSerieMelhorAvaliados/>
                
                </div>
                
            </div>
            
        </>
    )
}