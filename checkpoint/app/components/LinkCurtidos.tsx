"use client";

import Link from "next/link";
import { useCurtidos } from "./CurtidosProvider";

export default function LinkCurtidos(){
    const {ids, carregado} = useCurtidos();

    return(
        <Link href="/curtidos">
            Curtidos <span className="contador" aria-live="polite" aria-atomic="true">
                {carregado ? ids.length : "-"}
            </span>
        </Link>
    )
}