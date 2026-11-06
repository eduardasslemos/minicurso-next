"use client";

import { useCurtidos } from "./CurtidosProvider";

export default function BotaoCurtir({jogoId}: {jogoId:number}){
    const {ids, alternar, carregado} = useCurtidos();
    const curtido = ids.includes(jogoId);

    return(
        <button className="curtir" aria-pressed={curtido} disabled={!carregado} onClick={() => alternar(jogoId)}>
            {curtido ? "Curtido" : "Curtir"}
        </button>
    )
}