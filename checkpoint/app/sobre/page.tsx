import Link from "next/link";

export default function Sobre(){
    return(
        <main className="container sobre">
            <header className="sobre-intro">
                <p className="etiqueta">SOBRE O CHECKPOINT</p>
                <h1>Todo jogo é um<br /><span>novo começo.</span></h1>
                <p className="texto-destaque">
                Um lugar para descobrir jogos, explorar outros mundos e encontrar
                a próxima história que você quer viver.
                </p>
            </header>
            <div className="sobre-blocos">
                <section>
                <span className="passo">01 / EXPLORE</span>
                <h2>Uma seleção, muitos mundos.</h2>
                <p>
                    Da estratégia às pistas de corrida, dos reinos subterrâneos às
                    partidas em equipe. Conheça a coleção e abra os detalhes para
                    descobrir um pouco de cada jogo.
                </p>
                </section>
                <section>
                <span className="passo">02 / CONSTRUA</span>
                <h2>Feito para aprender.</h2>
                <p>
                    O Checkpoint nasceu em um minicurso de Next.js. É um projeto de
                    estudo que transforma páginas, navegação e interatividade em
                    uma experiência que podemos construir juntos.
                </p>
                </section>
                <section>
                <span className="passo">03 / EXPERIMENTE</span>
                <h2>Uma lista com a sua cara.</h2>
                <p>
                    Gostou de um jogo? Marque Curtir e encontre sua seleção na página
                    Curtidos. Você pode remover um jogo quando quiser. Sua lista fica
                    salva neste navegador, sem precisar criar uma conta.
                </p>
                </section>
            </div>
            <div className="sobre-rodape">
                <p className="creditos">
                As imagens são materiais de divulgação dos jogos. Artes e marcas
                pertencem aos seus respectivos titulares.
                </p>
                <Link href="/" className="botao-link">Explorar jogos ↗</Link>
            </div>
        </main>
    );
}