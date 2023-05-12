import netuno from "../../assets/projects/netuno.png";

export interface Projects {
    id: number;
    title: string;
    text: string;
    img: any;
    link: string;
}
export const projects = [
    {
        id: 1,
        title: "Site Netuno Descartavéis",
        text: "Site desenvolvido utilizando NextJs, JavaScript e Sass. Deploy na Vercel.",
        img: netuno,
        link: "https://www.netunodescartaveis.com.br/"
    },
]