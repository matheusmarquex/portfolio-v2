import { GrGithub, GrLinkedin } from "react-icons/gr";
import { IoIosArrowDown } from 'react-icons/io'
import style from "./Principal.module.scss";
import Typical from 'react-typical';

export default function Principal() {
    return (
        <div className={style.container}>
            <h1>Matheus Marques</h1>
            <Typical
                steps={['Desenvolvedor Front-End',3000]}
                loop={Infinity}
                wrapper="p"
            />
            <div className={style.social}>
                <div>
                <GrLinkedin />
                </div>
                <div>
                <GrGithub />
                </div>
            </div>
            <div className={style.arrowDown}>
            <IoIosArrowDown />
            </div>
        </div>
    );
}