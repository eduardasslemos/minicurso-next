"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Contexto = {
    ids: number[];
    alternar: (id: number) => void;
    carregado: boolean;
    erro: string | null;
};

const CurtidosContext = createContext <Contexto | null> (null);

export default function CurtidoProvider({children}:{children: ReactNode}){
    const [ids, setIds] = useState<number[]>([]);

    function alternar(id: number){
        setIds((atual) => atual.includes(id) ? atual.filter((item) => item != id) : [...atual, id]);
    }

    return(
        <CurtidosContext.Provider value={{ids, alternar, carregado:true, erro:null}}>
            {children}
        </CurtidosContext.Provider>
    )
}

export function useCurtidos(){
    const contexto = useContext(CurtidosContext);

    if(!contexto)
        throw new Error ("useCurtidos precisa estar dentro de CurtidosProvider");

    return contexto;
}