
/*Navega para mim em todos os componentes podendo
 pegar um deles */ 
import { Routes, Route } from 'react-router-dom'
import { Serie } from '../paginas/Serie'
import { Perfil } from '../paginas/Perfil'
import { Lista } from '../Components/Lista/Lista'



export function Rotas(){
    return (

        <Routes>
            <Route path="/" element={<Perfil />} /> {/* Rota da página de perfis */}
            <Route path='/filmes' element={<Lista/>}/>
            <Route path="/serie" element={<Serie />} /> {/* Rota da página de séries */}
            <Route/>
        </Routes>
        //     <Routes>
        //     <Route path="/" element={<Perfil/>}>
        //         <Route index element={<Lista/>}/>
        //         <Route path='serie' element={<Serie/>}/>
        //     </Route>
        // </Routes>

    )
}