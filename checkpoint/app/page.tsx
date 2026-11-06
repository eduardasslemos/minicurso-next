import Image from "next/image";
import Link from "next/link";
import { jogos } from "@/lib/jogos";

export default function Home() {
  return (
    <main className="container">
      <header className="intro">
        <h1>Qual vai ser sua próxima <span>aventura?</span></h1>
        <p>Explore a coleção e encontre seu próximo jogo.</p>
      </header>
      <ul className="jogos">
        {jogos.map((jogo) => (
          <li key={jogo.id} className="card">
            <Image src={jogo.imagem} alt={jogo.titulo} width={460} height={215}/>
            <div className="card-conteudo">
              <p className="genero">{jogo.genero}</p>
              <h2>{jogo.titulo}</h2>
              <div className="card-acoes">
                <Link href={`/jogos/${jogo.id}`}>Ver detalhes</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
