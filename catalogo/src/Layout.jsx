import React from 'react';
import { Cabecalho } from '../src/Components/Cabecalho/Cabecalho';
import { BarraNavegacao } from '../src/Components/Navegacao/BarraNavegacao';
import { Outlet } from 'react-router-dom';
import  Rodape  from "./Components/Rodape/Rodape"

export function Layout() {
    return (
    
        <>
        <div className='flex flex-col gap-36 bg-[#2d2d2d]'>
            <Cabecalho />
            <BarraNavegacao />
            {/* Renderiza os componentes da rota filha */}
            <Outlet />
            <Rodape/>
        </div>
         
        </>
    );
}
