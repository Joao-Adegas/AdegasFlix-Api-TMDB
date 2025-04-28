
import { Lista } from '../Lista/Lista'
import { ListaSerie } from '../listaSeries/listaSeries'

export function Conteudo(){
    return(
        <main className='bg-[#2d2d2d]'>
           <Lista/>
           <ListaSerie/>
        </main>
    )
}