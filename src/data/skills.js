import icons from "../styles/icons";
export const skills = [
  {
    icon: icons.FaHtml5,
    title: "HTML",
    color: "#f16a30", 
  },
  {
    icon: icons.FaCss3,
    title: "CSS",
    color: "#306af1", 
  },
  {
    icon: icons.FaJsSquare,
    title: "JavaScript",
    color: "#f7e025", 
  },
  {
    icon: icons.FaReact,
    title: "React",
    color: "#66dbfb", 
  },
  {
    icon: icons.FaBootstrap,
    title: "Bootstrap",
    color: "#8a18fd", 
  },
  {
    icon: icons.FaSass,
    title: "Sass",
    color: "#ce6b9c", 
  },
  {
    icon: icons.RiTailwindCssFill,
    title: "Tailwind",
    color: "#00bcff", 
  },
  {
    icon: icons.FaGitAlt,
    title: "Git",
    color: "#f05539", 
  },
  {
    icon: icons.SiMongodb,
    title: "MongoDB",
    color: "#086b4d", 
  },
  {
    icon: icons.FaNodeJs,
    title: "NodeJS",
    color: "#84bf08", 
  },
].map((element, index) => ({ 
  ...element, id: index + 1
 }));