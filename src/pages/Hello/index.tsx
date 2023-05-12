import style from "./Hello.module.scss";
import eu from "../../assets/eu.png";
export default function Hello() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.imgContainer}>
                    <img src={eu} alt="minha foto" />
                </div>
            </div>
            <div className={style.right}>
                <h1>Olá, eu sou Matheus Marques! 🤙🏻</h1>
                <p>
                    Formado em Análise e Desenvolvimento de Sistemas na Universidade Paulista. Atualmente sou Desenvolvedor Front-End React na Summit-BRA. Sou uma pessoa que adora desafios, pois as maiores evoluções e aprendizados vierem de momentos desafiadores. Uma frase que levo para a vida é "seja 1% melhor a cada dia".
                    No meu tempo livre, eu gosto de sair com a minha namorada e amigos, assistir filmes e séries. Também gosto de tomar uma boa cerveja assistindo NBA.
                </p>
            </div>
        </div>
    );
}