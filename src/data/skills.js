import icons from "../styles/icons";
export const skills = [
  {
    icon: icons.FaHtml5,
    title: "HTML",
    color: "#f16a30", 
    rank: 'A'
  },
  {
    icon: icons.FaCss3,
    title: "CSS",
    color: "#306af1", 
    rank: 'A'
  },
  {
    icon: icons.FaJsSquare,
    title: "JavaScript",
    color: "#f7e025", 
    rank: 'A'
  },
  {
    icon: icons.SiTypescript,
    title: "TypeScript",
    color: "#377cc8", 
    rank: 'C'
  },
  {
    icon: icons.FaReact,
    title: "React",
    color: "#66dbfb", 
    rank: 'B'
  },
  {
    icon: icons.FaBootstrap,
    title: "Bootstrap",
    color: "#8a18fd", 
    rank: 'C'
  },
  {
    icon: icons.FaSass,
    title: "Sass",
    color: "#ce6b9c", 
    rank: 'B'
  },
  {
    icon: icons.RiTailwindCssFill,
    title: "Tailwind",
    color: "#00bcff", 
    rank: 'C'
  },
  {
    icon: icons.FaGitAlt,
    title: "Git",
    color: "#f05539", 
    rank: 'B'
  },
  {
    icon: icons.SiMongodb,
    title: "MongoDB",
    color: "#086b4d", 
    rank: 'C'
  },
  {
    icon: icons.FaNodeJs,
    title: "NodeJS",
    color: "#84bf08", 
    rank: 'C'
  },
].map((element, index) => ({ 
  ...element, id: index + 1
 }));


export const RankTable = [
  {rank: 'S', color: '#02de91ff', icon: icons.TbHexagonLetterSFilled },
  {rank: 'A', color: '#4cff2dff', icon: icons.TbHexagonLetterAFilled },
  {rank: 'B', color: '#fff12dff', icon: icons.TbHexagonLetterBFilled },
  {rank: 'C', color: '#ffae2dff', icon: icons.TbHexagonLetterCFilled },
  {rank: 'D', color: '#ff2d2dff', icon: icons.TbHexagonLetterDFilled },
  {rank: 'F', color: '#25007bff', icon: icons.TbHexagonLetterFFilled },
]