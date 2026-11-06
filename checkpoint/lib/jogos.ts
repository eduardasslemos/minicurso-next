export type Jogo = {
  id: number;
  titulo: string;
  genero: string;
  ano: number;
  descricao: string;
  imagem: string;
};

export const jogos: Jogo[] = [
  { id: 1, titulo: "GTA VI", genero: "Ação e aventura", ano: 2026,
    descricao: "Explore Vice City com Jason e Lucia. Lançamento previsto para 19/11/2026.", imagem: "/jogos/gta-6.jpg" },
  { id: 2, titulo: "Hollow Knight", genero: "Plataforma", ano: 2017,
    descricao: "Explore um reino subterrâneo cheio de mistérios.", imagem: "/jogos/hollow-knight.jpg" },
  { id: 3, titulo: "Counter-Strike 2", genero: "FPS", ano: 2023,
    descricao: "Dispute partidas de tiro tático em equipe.", imagem: "/jogos/counter-strike-2.jpg" },
  { id: 4, titulo: "League of Legends", genero: "MOBA", ano: 2009,
    descricao: "Escolha seu campeão e dispute batalhas 5 contra 5 para destruir o Nexus inimigo.", imagem: "/jogos/league-of-legends-capa-logo.jpg" },
  { id: 5, titulo: "Roblox", genero: "Criação e sandbox", ano: 2006,
    descricao: "Crie e explore experiências feitas pela comunidade.", imagem: "/jogos/roblox-avatares.jpg" },
  { id: 6, titulo: "Minecraft", genero: "Sandbox", ano: 2011,
    descricao: "Construa e explore mundos feitos de blocos.", imagem: "/jogos/minecraft.jpg" },
  { id: 7, titulo: "Battlefield 4", genero: "FPS", ano: 2013,
    descricao: "Encare combates modernos em equipe com infantaria e veículos.", imagem: "/jogos/battlefield-4.jpg" },
  { id: 8, titulo: "Project CARS 2", genero: "Corrida", ano: 2017,
    descricao: "Pilote diferentes categorias de carros em pistas e condições climáticas variadas.", imagem: "/jogos/project-cars-2.jpg" },
  { id: 9, titulo: "Age of Empires II: Definitive Edition", genero: "Estratégia", ano: 2019,
    descricao: "Construa um império e comande civilizações em batalhas históricas.", imagem: "/jogos/age-of-empires-2.jpg" },
];
