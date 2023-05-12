
import typescriptImg from "../../assets/techs/typescript.png";
import reactImg from "../../assets/techs/react.png";
import sassImg from "../../assets/techs/sass.png";
import javaImg from "../../assets/techs/java.png";
import cssImg from "../../assets/techs/css.png";
import styledComponents from "../../assets/techs/styled-components.png";
import tailwindcss from "../../assets/techs/tailwind-css.png";
import reactquery from "../../assets/techs/react-query.png";
import spring from "../../assets/techs/spring.png";
import mysql from "../../assets/techs/mysql.png";
import figma from "../../assets/techs/figma.png";






export interface Technology {
    id: number;
    img: string;
    name: string;
  }

export const techImgs = [
    {
        id: 1,
        name: "TypeScript",
        img: typescriptImg,
    },
    {
        id: 2,
        name: "React",
        img: reactImg,
    },
    {
        id: 3,
        name: "Css",
        img: cssImg,
    },
    {
        id: 4,
        name: "Sass",
        img: sassImg,
    },
    {
        id: 5,
        name: "Styled Components",
        img: styledComponents,
    },
    {
        id: 6,
        name: "Tailwind CSS",
        img: tailwindcss,
    },
    {
        id: 7,
        name: "React Query",
        img: reactquery,
    },
    {
        id: 8,
        name: "Figma",
        img: figma,
    },
    {
        id: 9,
        name: "Java",
        img: javaImg,
    },
    {
        id: 10,
        name: "Spring Boot",
        img: spring,
    },
    {
        id: 11,
        name: "MySQL",
        img: mysql,
    },
]