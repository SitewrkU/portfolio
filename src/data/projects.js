export const projects = [
  {
    title: "Zynetic CLI",
    description: "Zynetic CLI is a hypothetical product for automating project creation, environment setup, and integration.",
    previewImg: "images/Preview/zyneticPrev.png",
    year: "2025",
    links: {
      demo: "https://sitewrku.github.io/Zynetic/",
      github: "https://github.com/SitewrkU/Zynetic",
    }
  },
  {
    title: "Ore Breaker",
    description: "This project is a simple test web application that simulates ore mining, tool crafting, and inventory management.",
    previewImg: "images/Preview/oreBreakerPrev.png",
    year: "2025",
    links: {
      demo: "https://sitewrku.github.io/OreBreaker/",
      github: "https://github.com/SitewrkU/OreBreaker",
    }
  },
  {
    title: "Mayo",
    description: "A weird little project about mayonnaise, made just for fun and to experiment with this kind of design.",
    previewImg: "images/Preview/MayoPrev.png",
    year: "2025",
    links: {
      demo: "https://ivanwuser.github.io/Mayo/",
      github: "https://github.com/IvanWuser/Mayo",
    }
  },
  {
    title: "Fecebak",
    description: "Fecebak is a humorous and quirky parody of Facebook, featuring the personal page of Petrovych, who shares stories about his life.",
    previewImg: "images/Preview/FecebakPrev.png",
    year: "2025",
    links: {
      demo: "https://sitewrku.github.io/ReactPetrovich/",
      github: "https://github.com/SitewrkU/ReactPetrovich",
    }
  },
  {
    title: "GlowCardEffect",
    description: "Interactive card with neon glow and 3D tilt on cursor hover",
    previewImg: "images/Preview/GlowCardPrev.png",
    year: "2024",
    links: {
      demo: "https://sitewrku.github.io/GlowCardEffect",
      github: "https://github.com/SitewrkU/GlowCardEffect",
    }
  },
  {
    title: "TNoT",
    description: "Thousand Nights of Terror is a website (wiki) about a fictional game that revolves around surviving through different types of nights.",
    previewImg: "images/Preview/TNOTPrev.png",
    year: "2024",
    links: {
      demo: "https://sitewrku.github.io/TNoT-Wiki",
      github: "https://github.com/SitewrkU/TNoT-Wiki",
    }
  },
].map((element, index) => ({ 
  ...element, id: index + 1
 }));